import type { IFScrollbarPlugin } from "../types";
import type { ReactNode } from "react";
interface LoadMorePluginOptions {
    threshold?: number;
    onLoadMore: () => Promise<void>;
    onCompleted?: () => void;
    loading?: ReactNode;
    done?: ReactNode;
    doneDelay?: number;
    lockWhileLoading?: boolean;
    onError?: (err: any) => void;
}
declare const loadMorePlugin: ({ threshold, onLoadMore, onCompleted, loading, done, doneDelay, lockWhileLoading, onError, }: LoadMorePluginOptions) => IFScrollbarPlugin;
export default loadMorePlugin;
