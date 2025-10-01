/// <reference types="react" />
import type { IFScrollbarProps, IFScrollbarRefProps } from "./types";
export declare function useScrollbarCore(props: IFScrollbarProps, refScroll?: React.MutableRefObject<IFScrollbarRefProps | null>): {
    refsTarget: import("react").MutableRefObject<HTMLDivElement>;
    hovering: boolean;
    setHovering: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    dimension: import("./types").IFSize;
    getApi: () => IFScrollbarRefProps;
    plugins: import("./types").IFScrollbarPlugin[];
};
