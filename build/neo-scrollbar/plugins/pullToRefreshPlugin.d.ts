import React from "react";
import type { IFScrollbarPlugin } from "../types";
export interface IFPullToRefreshOptions {
    threshold?: number;
    onRefresh: () => Promise<void>;
    loadingContent?: React.ReactNode;
    loadDoneContent?: React.ReactNode;
    doneDuration?: number;
    lockScrollWhileLoading?: boolean;
}
declare const pullToRefreshPlugin: ({ threshold, onRefresh, loadingContent, loadDoneContent, doneDuration, lockScrollWhileLoading, }: IFPullToRefreshOptions) => IFScrollbarPlugin;
export default pullToRefreshPlugin;
