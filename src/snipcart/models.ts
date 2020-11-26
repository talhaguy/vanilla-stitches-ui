export interface SnipCartCallbackFunction {
    (snipCart: SnipcartGlobal): void;
}

export interface SnipCartRunOnStateChangeFunction {
    (cb: SnipCartCallbackFunction): void;
}
