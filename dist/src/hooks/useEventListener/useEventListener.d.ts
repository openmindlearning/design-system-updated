interface Input {
    type: string;
    handler: (e?: Event) => void;
    element?: Window | HTMLElement | null;
    useCapture?: boolean;
    shouldListen?: boolean;
}
export declare const useEventListener: ({ type, handler, element, useCapture, shouldListen, }: Input) => void;
export {};
