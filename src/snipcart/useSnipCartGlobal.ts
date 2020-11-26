import { useContext, useEffect } from "react";
import { WindowContext } from "../context";
import { SnipCartEvent } from "./constants/SnipCartEvent";
import { SnipCartRunOnStateChangeFunction } from "./models";
import { SnipCartMetaStateContext } from "./SnipCartMetaStateContext";

export function useSnipCartGlobal() {
    const windowObj = useContext(WindowContext);
    const snipCartMetaState = useContext(SnipCartMetaStateContext);

    const runOnReady: SnipCartRunOnStateChangeFunction = (cb) => {
        if (snipCartMetaState.isReady) {
            cb(snipCartMetaState.snipCartGlobal);
        } else {
            snipCartMetaState.readyFuncQueue.push(cb);
        }
    };

    const runOnInit: SnipCartRunOnStateChangeFunction = (cb) => {
        if (snipCartMetaState.isInitted) {
            cb(snipCartMetaState.snipCartGlobal);
        } else {
            snipCartMetaState.inittedFuncQueue.push(cb);
        }
    };

    useEffect(() => {
        // only run the following if another instance of the hook has not used this so that data can be shared
        if (!snipCartMetaState.usedYet) {
            snipCartMetaState.usedYet = true;

            windowObj.document.addEventListener(SnipCartEvent.Ready, () => {
                snipCartMetaState.snipCartGlobal = (windowObj as any).Snipcart;
                snipCartMetaState.isReady = true;

                // run ready queue
                while (snipCartMetaState.readyFuncQueue.length > 0) {
                    snipCartMetaState.readyFuncQueue.shift()(
                        snipCartMetaState.snipCartGlobal
                    );
                }

                ((windowObj as any).Snipcart as SnipcartGlobal).events.on(
                    SnipCartEvent.Initialized,
                    (snipcartState) => {
                        snipCartMetaState.isInitted = true;

                        // run initted queue
                        while (snipCartMetaState.inittedFuncQueue.length > 0) {
                            snipCartMetaState.inittedFuncQueue.shift()(
                                snipCartMetaState.snipCartGlobal
                            );
                        }
                    }
                );
            });
        }
    }, []);

    return [runOnReady, runOnInit] as [
        SnipCartRunOnStateChangeFunction,
        SnipCartRunOnStateChangeFunction
    ];
}
