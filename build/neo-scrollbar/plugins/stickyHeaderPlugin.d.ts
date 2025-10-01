import type { IFScrollbarPlugin } from "../types";
export interface IFStickyHeaderOptions {
    zIndex?: number;
    background?: string;
}
declare const stickyHeaderPlugin: ({ zIndex, background, }?: IFStickyHeaderOptions) => IFScrollbarPlugin;
export default stickyHeaderPlugin;
