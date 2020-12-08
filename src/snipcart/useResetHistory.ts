import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSnipCartGlobal } from "./useSnipCartGlobal";

// run this at the top of the app once to reset the snip cart history state
// which interferes with the browser back button.
// more info: https://github.com/talhaguy/vanilla-stitches-ui/issues/1
export function useResetHistory() {
    const router = useRouter();
    const [runOnReady, runOnInit] = useSnipCartGlobal();

    useEffect(() => {
        runOnInit((snipCart) => {
            router.replace(router.asPath);
        });
    }, []);
}
