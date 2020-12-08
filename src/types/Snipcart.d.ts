interface SnipcartStoreCartState {
    subtotal: number;
    items: {
        count: number;
    };
}

interface SnipcartStoreState {
    cart: SnipcartStoreCartState;
}

interface SnipcartStoreGetStateFunc {
    (): SnipcartStoreState;
}

interface SnipcartStore {
    getState: SnipcartStoreGetStateFunc;
}

interface SnipcartEvents {
    on: (eventName: string, callback: Function) => void;
}

interface SnipcartRegisterPaymentFormCustomizationConfig {
    [key: string]: {
        [key: string]: any;
    };
}

interface SnipcartRegisterPaymentFormCustomizationFunc {
    (config: SnipcartRegisterPaymentFormCustomizationConfig): void;
}

interface SnipcartAPI {
    theme: {
        customization: {
            registerPaymentFormCustomization: SnipcartRegisterPaymentFormCustomizationFunc;
        };
    };
}

declare interface SnipcartGlobal {
    store: SnipcartStore;
    events: SnipcartEvents;
    api: SnipcartAPI;
}
