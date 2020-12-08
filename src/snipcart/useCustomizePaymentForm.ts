import { useEffect } from "react";
import { useSnipCartGlobal } from "./useSnipCartGlobal";

export function useCustomizePaymentForm() {
    const [runOnReady, runOnInit] = useSnipCartGlobal();

    useEffect(() => {
        runOnReady((snipCart) => {
            snipCart.api.theme.customization.registerPaymentFormCustomization({
                input: {
                    border: "1px solid #808080",
                    placeholder: {
                        color: "gray",
                    },
                    focus: {
                        border: "1px solid pink",
                    },
                },
                label: {
                    color: "#808080",
                    fontSize: "14px",
                },
            });
        });
    }, []);
}
