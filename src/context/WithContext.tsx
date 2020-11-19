import React, { ReactNode } from "react";
import { CartStateContext, CartStateContextMap } from "./CartStateContext";
import { NavigationContextMap, NavigationContext } from "./NavigationContext";
import { WindowContext } from "./WindowContext";

export interface WithContextProps {
    window: Window;
    cartStateContextMap: CartStateContextMap;
    navigationContextMap: NavigationContextMap;
    children: ReactNode;
}

export function WithContext({
    window,
    cartStateContextMap,
    navigationContextMap,
    children,
}: WithContextProps) {
    return (
        <WindowContext.Provider value={window}>
            <CartStateContext.Provider value={cartStateContextMap}>
                <NavigationContext.Provider value={navigationContextMap}>
                    {children}
                </NavigationContext.Provider>
            </CartStateContext.Provider>
        </WindowContext.Provider>
    );
}
