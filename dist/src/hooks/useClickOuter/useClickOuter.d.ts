import { MutableRefObject } from "react";
export declare const useClickOuter: (isActive: boolean, onOutsideClick: () => void, ...exceptions: MutableRefObject<any>[]) => MutableRefObject<any>;
export declare const useClickWhiteSpace: (isActive: boolean, onWhiteSpaceClick: () => void, customDetector: (target: HTMLElement) => boolean, ...exceptions: MutableRefObject<any>[]) => {
    ref: MutableRefObject<any>;
    onClick: (e: Event) => void;
    id: string;
};
