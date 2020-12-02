import { CURRENCIES, Currency } from "./Currency";

export function formatPrice(currency: Currency, price: number) {
    const toFixed = price.toFixed(2);
    let [beforeDecimal, afterDecimal] = toFixed.split(".");
    const beforeDecimalList = beforeDecimal.split("");

    for (let i = 3, l = beforeDecimal.length; i < l; i += 3) {
        beforeDecimalList[beforeDecimalList.length - i] =
            "," + beforeDecimalList[beforeDecimalList.length - i];
    }

    beforeDecimal = beforeDecimalList.join("");

    return `${CURRENCIES[currency].symbol}${beforeDecimal}.${afterDecimal}`;
}
