import React, { type MutableRefObject } from "react";
import PerfectScrollbar from "perfect-scrollbar";
import type { ScrollEasingFn } from "./easing";
/** Size props */
export interface IFSize {
    maxWidth?: string | number;
    maxHeight?: string | number;
    width?: string | number;
    height?: string | number;
}
/** Scroll event callbacks */
export interface IFScrollFn {
    onScrollY?: (evt: Event) => void;
    onScrollX?: (evt: Event) => void;
    onScrollUp?: (evt: Event) => void;
    onScrollDown?: (evt: Event) => void;
    onScrollLeft?: (evt: Event) => void;
    onScrollRight?: (evt: Event) => void;
    onYReachStart?: (evt: Event) => void;
    onYReachEnd?: (evt: Event) => void;
    onXReachStart?: (evt: Event) => void;
    onXReachEnd?: (evt: Event) => void;
}
/** Scrollbar ref API */
export interface IFScrollbarRefProps {
    update: () => void;
    destroy: () => void;
    getScrollbar: () => any | null;
    getScrollElement: () => HTMLElement | null;
    resetMomentum: () => any;
    scrollToX: (x: number, duration?: number, easing?: ScrollEasingFn) => void;
    scrollToY: (y: number, duration?: number, easing?: ScrollEasingFn) => void;
    scrollToTop: (duration?: number, easing?: ScrollEasingFn) => void;
    scrollToBottom: (duration?: number, easing?: ScrollEasingFn) => void;
    scrollToLeft: (duration?: number, easing?: ScrollEasingFn) => void;
    scrollToRight: (duration?: number, easing?: ScrollEasingFn) => void;
    scrollToIndex: (index: number, duration?: number, easing?: ScrollEasingFn) => void;
    scrollToElement: (el: HTMLElement, duration?: number, easing?: ScrollEasingFn) => void;
    scrollToPercent: (yPercent: number, xPercent?: number, duration?: number, easing?: ScrollEasingFn) => void;
}
/** Core scrollbar props */
export interface IFScrollbarCoreProps extends IFSize, IFScrollFn {
    children: React.ReactNode;
    id?: string;
    effectData?: unknown;
    inertia?: boolean;
    inertiaFriction?: number;
    always?: boolean;
    disableKeyboard?: boolean;
    wheelStop?: boolean;
    style?: React.CSSProperties;
    options?: PerfectScrollbar.Options;
    refScroll?: MutableRefObject<unknown>;
    triggerScrollClick?: boolean;
    autoHide?: boolean;
    preserveScroll?: boolean;
    autoScrollBottom?: boolean;
    autoScrollToNewItem?: boolean;
    scrollLock?: boolean;
    scrollSaveKey?: string;
    initialScroll?: "top" | "bottom" | number;
    smoothScroll?: boolean;
    direction?: "vertical" | "horizontal" | "both";
    scrollDuration?: number;
    scrollEasing?: ScrollEasingFn;
    plugins?: IFScrollbarPlugin[];
    onScroll?: (pos: {
        x: number;
        y: number;
    }) => void;
    onScrollDirectionChange?: (pos: {
        x: number;
        y: number;
    }) => void;
    onScrollStart?: () => void;
    onScrollStop?: () => void;
    onReachStart?: () => void;
    onUserScroll?: (pos: {
        x: number;
        y: number;
    }) => void;
    onReachEnd?: () => void;
    onReachLeft?: () => void;
    onReachRight?: () => void;
    onReachTop?: () => void;
    onReachBottom?: () => void;
    onReachThreshold?: (percent: number) => void;
    onOverflowChange?: (x: boolean, y: boolean) => void;
}
/** TBody wrapper props */
export interface IFScrollbarTBodyProps extends IFScrollbarCoreProps, Omit<React.HTMLAttributes<HTMLDivElement>, "onScroll" | "children"> {
}
/** Main props */
export interface IFScrollbarProps extends IFScrollbarTBodyProps {
    injectTable?: boolean;
}
export interface IFScrollbarPlugin {
    mountPosition?: "inside" | "outside" | "before";
    onInit?: (api: IFScrollbarRefProps, el: HTMLElement) => void;
    onScroll?: (el: HTMLElement) => void;
    onDestroy?: () => void;
    render?: () => React.ReactNode;
    onScrollStart?: (el: HTMLElement) => void;
    onScrollStop?: (el: HTMLElement) => void;
    onReachTop?: () => void;
    onReachBottom?: () => void;
    onReachLeft?: () => void;
    onReachRight?: () => void;
    onReachThreshold?: (percent: number) => void;
}
export interface IFMomentumRef {
    vx: number;
    vy: number;
    raf: number | null;
}
