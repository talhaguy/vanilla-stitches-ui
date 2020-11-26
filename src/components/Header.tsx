import React, { useEffect, useState } from "react";
import { useSnipCartGlobal } from "../snipcart";

export interface HeaderProps {}

export function Header(props: HeaderProps) {
    const [_, snipCartRunOnInit] = useSnipCartGlobal();
    const [numItems, setNumItems] = useState(0);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        snipCartRunOnInit((snipCart) => {
            setNumItems(snipCart.store.getState().cart.items.count);
            setSubtotal(snipCart.store.getState().cart.subtotal);
        });
    });

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
