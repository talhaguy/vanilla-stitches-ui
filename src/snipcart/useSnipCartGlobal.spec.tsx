import { renderHook, RenderHookResult } from "@testing-library/react-hooks";
import { getSnipCartGlobal } from "../../test/mocks/snipCartGlobal";
import { WindowContext } from "../context";
import { SnipCartEvent } from "./constants/SnipCartEvent";
import { SnipCartRunOnStateChangeFunction } from "./models";
import {
    SnipCartMetaStateContext,
    SnipCartMetaStateMap,
} from "./SnipCartMetaStateContext";
import { useSnipCartGlobal } from "./useSnipCartGlobal";

describe("useSnipCartGlobal()", () => {
    let documentAddEventListenderSpy: jest.SpyInstance;
    let snipCartMetaState: SnipCartMetaStateMap;
    let wrapper: ({ children }: { children: any }) => JSX.Element;
    let rendered: RenderHookResult<
        {
            children: any;
        },
        [SnipCartRunOnStateChangeFunction, SnipCartRunOnStateChangeFunction]
    >;

    const fakeSnipCartReady = () => {
        // snip cart is expected to be available on window once the snip cart ready event fires
        (window as any).Snipcart = getSnipCartGlobal();

        const event = new Event(SnipCartEvent.Ready);
        window.document.dispatchEvent(event);
    };

    const fakeSnipCartInit = () => {
        // instead of mocking the snip cart `on` functionality, just run the call back passed to it
        (window as any).Snipcart.events.on.mock.calls[0][1]();
    };

    beforeEach(() => {
        // spy on document.addEventListener to be able to grab function passed to it to be able
        // to remove listener
        documentAddEventListenderSpy = jest.spyOn(
            window.document,
            "addEventListener"
        );

        snipCartMetaState = {
            snipCartGlobal: null,

            isReady: false,
            readyFuncQueue: [],

            isInitted: false,
            inittedFuncQueue: [],

            usedYet: false,
        };

        wrapper = ({ children }) => (
            <WindowContext.Provider value={window}>
                <SnipCartMetaStateContext.Provider value={snipCartMetaState}>
                    {children}
                </SnipCartMetaStateContext.Provider>
            </WindowContext.Provider>
        );

        rendered = renderHook(() => useSnipCartGlobal(), {
            wrapper,
        });
    });

    afterEach(() => {
        (window as any).Snipcart = undefined;

        // remove ready listener so it doesn't fire more than 1x in subsequent tests
        const fn = documentAddEventListenderSpy.mock.calls[0][1];
        window.document.removeEventListener(SnipCartEvent.Ready, fn);

        documentAddEventListenderSpy.mockRestore();

        fakeSnipCartReady();
    });

    it("shoud only run ready function if snip cart ready and otherwise queue it", () => {
        const runOnReady = rendered.result.current[0];

        const cb = jest.fn();
        runOnReady(cb);
        expect(cb).not.toBeCalled();
        fakeSnipCartReady();
        expect(cb).toBeCalled();

        // now that snip cart is ready any more functions should immediately run
        const cb2 = jest.fn();
        runOnReady(cb2);
        expect(cb2).toBeCalled();
    });

    it("shoud only run init function if snip cart ready and otherwise queue it", () => {
        const runOnInit = rendered.result.current[1];

        const cb = jest.fn();
        runOnInit(cb);
        expect(cb).not.toBeCalled();
        fakeSnipCartReady();
        // should still not run as snip cart is just ready, NOT initted
        expect(cb).not.toBeCalled();
        fakeSnipCartInit();
        expect(cb).toBeCalled();

        // now that snip cart is initted any more functions should immediately run
        const cb2 = jest.fn();
        runOnInit(cb2);
        expect(cb2).toBeCalled();
    });

    it("should only listen for snipcart ready and init events on the first use of the hook", () => {
        const rendered = renderHook(
            () => ({
                useSnipCartGlobalFirstReturn: useSnipCartGlobal(),
                useSnipCartGlobalSecondReturn: useSnipCartGlobal(),
            }),
            {
                wrapper,
            }
        );

        const numOfReadyListeners = documentAddEventListenderSpy.mock.calls.filter(
            (call) => {
                return call[0] === SnipCartEvent.Ready;
            }
        ).length;
        expect(numOfReadyListeners).toBe(1);

        // when using either hooks run callback instances, when the ready and init events fire,
        // the functions passed in should run

        // test ready
        const runOnReady1 =
            rendered.result.current.useSnipCartGlobalFirstReturn[0];
        const readyCb1 = jest.fn();
        runOnReady1(readyCb1);
        const runOnReady2 =
            rendered.result.current.useSnipCartGlobalSecondReturn[0];
        const readyCb2 = jest.fn();
        runOnReady2(readyCb2);
        expect(readyCb1).not.toBeCalled();
        expect(readyCb2).not.toBeCalled();
        fakeSnipCartReady();
        expect(readyCb1).toBeCalled();
        expect(readyCb2).toBeCalled();

        // test init
        const runOnInit1 =
            rendered.result.current.useSnipCartGlobalFirstReturn[1];
        const initCb1 = jest.fn();
        runOnInit1(initCb1);
        const runOnInit2 =
            rendered.result.current.useSnipCartGlobalSecondReturn[1];
        const initCb2 = jest.fn();
        runOnInit2(initCb2);
        expect(initCb1).not.toBeCalled();
        expect(initCb2).not.toBeCalled();
        fakeSnipCartInit();
        expect(initCb1).toBeCalled();
        expect(initCb2).toBeCalled();
    });
});
