import type { IFScrollbarPlugin } from "../types";
import type { ReactNode } from "react";
export interface IFLoadMorePluginOptions {
    threshold?: number;
    onLoadMore: () => Promise<boolean | void>;
    onCompleted?: () => void;
    loading?: ReactNode;
    done?: ReactNode;
    completed?: ReactNode;
    doneDelay?: number;
    lockWhileLoading?: boolean;
    onError?: (err: any) => void;
}
declare const loadMorePlugin: ({ threshold, onLoadMore, onCompleted, loading, done, completed, doneDelay, lockWhileLoading, onError, }: IFLoadMorePluginOptions) => IFScrollbarPlugin;
export default loadMorePlugin;
