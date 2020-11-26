import { createContext } from "react";
import { SnipCartCallbackFunction } from './models';

export interface SnipCartMetaStateMap {
    snipCartGlobal: SnipcartGlobal;

    isReady: boolean;
    readyFuncQueue: SnipCartCallbackFunction[];

    isInitted: boolean;
    inittedFuncQueue: SnipCartCallbackFunction[];

    usedYet: boolean;
}

export const SnipCartMetaStateContext = createContext<SnipCartMetaStateMap>(null);

