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

declare interface SnipcartGlobal {
    store: SnipcartStore;
    events: SnipcartEvents;
}
