import React from "react";

export interface HeaderProps {}

export function Header(props: HeaderProps) {
    return (
        <header>
            <div>
                <button className="snipcart-checkout">Cart</button>
            </div>
            <div>
                No. Items: <span className="snipcart-items-count"></span>
            </div>
            <div>
                Total: <span className="snipcart-total-price"></span>
            </div>
        </header>
    );
}
