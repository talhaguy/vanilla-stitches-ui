import {
    useContext,
    useEffect,
    useRef,
    useState,
    MutableRefObject,
} from "react";
import { WindowContext } from "../context";
import { SnipCartEvent } from "./constants/SnipCartEvent";

export const useCartStateAtTopLevel = (windowObj?: Window) => {
    console.log("DEBUG: IN USE CART STATE");
    console.log("DEBUG: got window context", windowObj);
    const wasSnipCartInitializedRef = useRef<boolean>(false);
    const numItemsRef = useRef<number>(null);
    const subtotalRef = useRef<number>(null);

    return [numItemsRef, subtotalRef, wasSnipCartInitializedRef] as [
        MutableRefObject<number>,
        MutableRefObject<number>,
        MutableRefObject<boolean>
    ];
};

export const useCartStateAtComponentLevel = (
    numItemsRef: MutableRefObject<number>,
    subtotalRef: MutableRefObject<number>,
    wasSnipCartInitializedRef: MutableRefObject<boolean>
) => {
    console.log(
        "DEBUG: IN USER CART STATE AT COMPONET LEVLE - cart refs:",
        numItemsRef.current,
        subtotalRef.current
    );
    const windowObj = useContext(WindowContext);
    const snipCartRef = useRef<SnipcartGlobal>(
        windowObj ? (windowObj as any).Snipcart : null
    );
    const [numItems, setNumItems] = useState<number>(numItemsRef.current);
    const [subtotal, setSubtotal] = useState<number>(subtotalRef.current);

    const getAndSetCartState = () => {
        const {
            items,
            subtotal: cartSubtotal,
        } = snipCartRef.current.store.getState().cart;

        numItemsRef.current = items.count;
        setNumItems(items.count);
        subtotalRef.current = cartSubtotal;
        setSubtotal(cartSubtotal);

        console.log("DEBUG: snip set", items.count, cartSubtotal);
    };

    const runOnInit = (callback: Function) => {
        if (!wasSnipCartInitializedRef.current) {
            console.log("DEBUG: snip NOT yet initted");
            snipCartRef.current.events.on(SnipCartEvent.Initialized, () => {
                console.log("DEBUG: snip is now initted");
                wasSnipCartInitializedRef.current = true;
                callback();
            });
        } else {
            console.log("DEBUG: snip already initted");
            callback();
        }
    };

    useEffect(() => {
        if (snipCartRef.current) {
            console.log("DEBUG: snip already ready");
            // snip cart JS is loaded
            // get and set state after snip cart init, or else cart state will not be ready
            runOnInit(getAndSetCartState);
        } else {
            // queue until snip cart JS is loaded
            windowObj.document.addEventListener(SnipCartEvent.Ready, () => {
                console.log("DEBUG: snip ready");
                snipCartRef.current = (windowObj as any).Snipcart;

                // get and set state after snip cart init, or else cart state will not be ready
                runOnInit(getAndSetCartState);
            });
        }
    }, []);

    return [numItems, subtotal];
};
