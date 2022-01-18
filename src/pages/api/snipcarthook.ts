import { NextApiRequest, NextApiResponse } from "next";
import { incrementProductQuantity } from "../../db";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        return res.status(405).json({
            status: "ERROR",
        });
    }

    return authorize(req.headers["X-Snipcart-RequestToken"] as string)
        .then((authorized) => {
            if (!authorized) {
                throw new SnipCartHookError(401);
            }

            let data: SnipCartWebHookRequestBody;
            try {
                data = JSON.parse(req.body);
            } catch (err) {
                throw new SnipCartHookError(400);
            }

            if (data.eventName === HookEventName.OrderComplete) {
                const orderCompleteData: OrderCompleteRequestBody = data as OrderCompleteRequestBody;

                // get product quantities ordered
                const productQuantity: {
                    [key: string]: number;
                } = orderCompleteData.content.items.reduce((accum, item) => {
                    accum[item.id] = item.quantity;
                    return accum;
                }, {});

                // subtract quantities from stock in DB
                const quantityPromises = Object.entries(productQuantity).map(
                    ([id, qty]) => {
                        return incrementProductQuantity(id, -qty);
                    }
                );

                return Promise.all(quantityPromises);
            }

            // simply continue for any other hook type
            return null;
        })
        .then((queryRes) => {
            // if there is no queryRes, that means the web hook type was an unsupported one
            // just pass through successfully
            if (!queryRes) {
                return res.status(200).json({
                    status: "SUCCESS",
                });
            }

            // make sure all query results are successfull
            const allUpdated = queryRes.every((r) => r);
            if (!allUpdated) {
                console.log("ERROR: not all products inventory was updated");
                throw new SnipCartHookError(
                    400,
                    "not all products inventory were updated"
                );
            }

            res.status(200).json({
                status: "SUCCESS",
            });
        })
        .catch((err) => {
            if (err instanceof SnipCartHookError) {
                return res.status(err.status).json({
                    status: "ERROR",
                    message: err.message,
                });
            }

            res.status(500).json({
                status: "ERROR",
                message: err.message,
            });
        });
}

/**
 * Checks if request to hook is authentic. Authentic requests from SnipCart
 * have the "X-Snipcart-RequestToken" header. This header value should be
 * passed as the `token` parameter. A SnipCart API endpoint is then used
 * to check if the request was authentic.
 * On development mode, this check is skipped to allow for easier testing.
 * For more info see: https://docs.snipcart.com/v3/webhooks/introduction
 */
async function authorize(token?: string): Promise<boolean> {
    if (process.env.NODE_ENV === "development") {
        return true;
    }

    if (!token) {
        return false;
    }

    return fetch(
        `https://app.snipcart.com/api/requestvalidation/${token}`
    ).then((res) => {
        return res.status === 200;
    });
}

interface SnipCartWebHookRequestBody {
    eventName: HookEventName;
}

// full definition for order complete hook body data: https://docs.snipcart.com/v3/webhooks/order-events
// the following definition is only partially defined
interface OrderCompleteRequestBody extends SnipCartWebHookRequestBody {
    content: {
        items: OrderCompleteItem[];
    };
}

enum HookEventName {
    OrderComplete = "order.completed",
}

interface OrderCompleteItem {
    id: string;
    quantity: number;
}

class SnipCartHookError extends Error {
    constructor(
        public status = 400,
        ...params: ConstructorParameters<ErrorConstructor>
    ) {
        super(...params);
    }
}
