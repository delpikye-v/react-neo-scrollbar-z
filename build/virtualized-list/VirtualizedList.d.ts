import React from "react";
import { type Align } from "./useVirtual";
export interface IFVirtualizedListProps {
    itemCount: number;
    renderItem: (index: number) => React.ReactNode;
    itemSize?: number;
    estimateItemHeight?: number;
    scrollElement?: HTMLElement | React.RefObject<HTMLElement> | null;
    height?: number;
    width?: number | string;
    overscan?: number;
    className?: string;
    style?: React.CSSProperties;
    onItemsRendered?: (params: {
        startIndex: number;
        endIndex: number;
    }) => void;
}
export interface IFVirtualizedListRef {
    scrollToIndex: (index: number, align?: Align, behavior?: ScrollBehavior) => void;
    getTotalHeight: () => number;
}
export declare const VirtualizedList: React.ForwardRefExoticComponent<IFVirtualizedListProps & React.RefAttributes<IFVirtualizedListRef>>;
export default VirtualizedList;
