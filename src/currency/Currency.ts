export enum Currency {
    PhillipinesPeso,
}

export interface CurrencyItem {
    code: string;
    symbol: string;
}

export interface Currencies {
    [key: string]: CurrencyItem;
}

export const CURRENCIES: Currencies = {
    [Currency.PhillipinesPeso]: {
        code: "PHP",
        symbol: "₱",
    },
};
