import React from "react";
import type { IFScrollbarPlugin } from "../types";
export interface IFPullToRefreshOptions {
    threshold?: number;
    onRefresh: () => Promise<void>;
    loading?: React.ReactNode;
    done?: React.ReactNode;
    doneDuration?: number;
    lockScrollWhileLoading?: boolean;
}
declare const pullToRefreshPlugin: ({ threshold, onRefresh, loading, done, doneDuration, lockScrollWhileLoading, }: IFPullToRefreshOptions) => IFScrollbarPlugin;
export default pullToRefreshPlugin;
