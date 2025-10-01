import React from "react";
interface IFPullToRefreshProps {
    state: "idle" | "loading" | "done";
    loadingContent: React.ReactNode;
    loadDoneContent: React.ReactNode;
}
declare const PullToRefresh: React.FC<IFPullToRefreshProps>;
export default PullToRefresh;
