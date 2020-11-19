import { createContext, MutableRefObject } from "react";

export interface CartStateContextMap {
    numItemsRef: MutableRefObject<number>;
    subtotalRef: MutableRefObject<number>;
    wasSnipCartInitializedRef: MutableRefObject<boolean>;
}

export const CartStateContext = createContext<CartStateContextMap>(null);
