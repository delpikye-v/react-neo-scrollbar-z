import type { ScrollEasingFn } from "./easing";
import type { IFScrollbarPlugin } from "./types";
export interface IFAnimateScrollOptions {
    duration?: number;
    easing?: ScrollEasingFn;
}
/**
 * Smooth scroll theo trục Y
 */
export declare const animateScrollTo: (el: HTMLElement, target: number, options?: IFAnimateScrollOptions) => void;
/**
 * Smooth scroll theo trục X
 */
export declare const animateScrollToX: (el: HTMLElement, target: number, options?: IFAnimateScrollOptions) => void;
/**
 * Scroll thẳng xuống bottom
 */
export declare const animateScrollToBottom: (el: HTMLElement, options?: IFAnimateScrollOptions) => void;
/**
 * Scroll thẳng về top
 */
export declare const animateScrollToTop: (el: HTMLElement, options?: IFAnimateScrollOptions) => void;
/**
 * Call hooks trong plugin
 */
export declare const callPlugins: (plugins: IFScrollbarPlugin[] | undefined, fnName: keyof IFScrollbarPlugin, ...args: any[]) => void;
