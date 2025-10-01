import type { IFScrollbarProps, IFScrollFn, IFSize } from "./types";
import type { MutableRefObject } from "react";
/**
 * Convert props dimensions into inline style object
 */
export declare const appendDimension: ({ height, maxHeight, width, maxWidth, }: IFSize) => IFSize;
/**
 * Bind PerfectScrollbar events from props
 */
export declare const appendEventListener: (props: Partial<IFScrollbarProps>, target: HTMLElement) => IFScrollFn;
/**
 * Remove all PS events
 */
export declare const clearEventListener: (listEvent: IFScrollFn, target: HTMLElement) => void;
/**
 * Find table tbody if injectTable is true, otherwise return container element
 */
export declare const findTargetTable: (root: MutableRefObject<HTMLElement | null>, dimension: IFSize, injectTable?: boolean) => {
    table?: HTMLTableElement;
    el: HTMLElement | null;
};
/**
 * Filter children that are not PerfectScrollbar rails or thumbs
 */
export declare const psHtmlListSize: (children: HTMLCollection, psElements: HTMLElement[]) => HTMLElement[];
/**
 * Calculate total height of list of HTMLElements
 */
export declare const calculatorRealSize: (elements?: HTMLElement[]) => number;
/**
 * Find last visible element from a given query selector or provided list
 */
export declare const find1stLevel: (root: HTMLElement, querySelector: string, list?: HTMLElement[]) => HTMLElement | null;
