export type Align = "auto" | "start" | "center" | "end";
export interface IFUseVirtualProps {
    itemCount: number;
    itemSize?: number;
    estimateItemHeight?: number;
    overscan?: number;
}
export interface IFVirtualState {
    startIndex: number;
    endIndex: number;
    offsetTop: number;
    totalHeight: number;
}
/**
 * Simple virtualization logic:
 * - Fixed-size mode when itemSize provided.
 * - Variable-size mode when itemSize undefined and estimateItemHeight provided.
 *
 * For variable mode we maintain a map of measured sizes (index -> height)
 * and a prefix sum cache for fast approximate position.
 */
export declare function useVirtual({ itemCount, itemSize, estimateItemHeight, overscan, }: IFUseVirtualProps): {
    setSize: (index: number, size: number) => void;
    getWindowForScroll: (scrollTop: number, viewportHeight: number) => {
        startIndex: number;
        endIndex: number;
        offsetTop: number;
        totalHeight: number;
    };
    getTotalHeight: () => number;
    getScrollTopForIndex: (index: number, align: Align, viewportHeight: number) => number;
    sizeMap: Map<number, number>;
};
