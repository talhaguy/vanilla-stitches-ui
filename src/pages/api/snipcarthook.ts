import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    authorize(req.headers["X-Snipcart-RequestToken"] as string).then(
        (authorized) => {
            if (!authorized) {
                res.status(401).json({
                    STATUS: "ERROR",
                });
                return;
            }

            // TODO: check for order complete webhook type

            let data: OrderCompleteRequestBody;
            try {
                data = JSON.parse(req.body);
            } catch (err) {
                res.status(400).json({
                    STATUS: "ERROR",
                });
                return;
            }

            // TODO: get quantity of each item ordered
            // then subtract quantity from current inv in db

            res.status(200).json({
                name: "John Doe",
                env: process.env.NODE_ENV,
            });
        }
    );
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

// full definition for order complete hook body data: https://docs.snipcart.com/v3/webhooks/order-events
// the following definition is only partially defined
interface OrderCompleteRequestBody {
    eventName: HookEventName;
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
