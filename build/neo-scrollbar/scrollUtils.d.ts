import type { ScrollEasingFn } from "./easing";
import type { IFScrollbarPlugin } from "./types";
export interface IFAnimateScrollOptions {
    duration?: number;
    easing?: ScrollEasingFn;
}
export declare const animateScrollTo: (el: HTMLElement, target: number, options?: IFAnimateScrollOptions) => void;
export declare const animateScrollToX: (el: HTMLElement, target: number, options?: IFAnimateScrollOptions) => void;
export declare const callPlugins: (plugins: IFScrollbarPlugin[] | undefined, fnName: keyof IFScrollbarPlugin, ...args: any[]) => void;
