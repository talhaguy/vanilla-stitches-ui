import React, { useContext } from "react";
import { CartStateContext } from "../context";
import { useCartStateAtComponentLevel } from "../hooks";

export interface HeaderProps {}

export function Header(props: HeaderProps) {
    const { numItemsRef, subtotalRef, wasSnipCartInitializedRef } = useContext(
        CartStateContext
    );
    const [numItems, subtotal] = useCartStateAtComponentLevel(
        numItemsRef,
        subtotalRef,
        wasSnipCartInitializedRef
    );

    return (
        <header>
            <div>
                <button className="snipcart-checkout">Cart</button>
            </div>
            <div>No. Items: {numItems}</div>
            <div>Total: {subtotal}</div>
        </header>
    );
}
