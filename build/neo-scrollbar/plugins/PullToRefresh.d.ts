import React from "react";
interface IFPullToRefreshProps {
    state: "idle" | "loading" | "done";
    loading: React.ReactNode;
    done: React.ReactNode;
}
declare const PullToRefresh: React.FC<IFPullToRefreshProps>;
export default PullToRefresh;
