import type { IFScrollbarPlugin } from "../types";
export interface IFStickyColumnsOptions {
    leftColumns?: number;
    rightColumns?: number;
    zIndex?: number;
    background?: string;
}
declare const stickyColumnsPlugin: ({ leftColumns, rightColumns, zIndex, background, }?: IFStickyColumnsOptions) => IFScrollbarPlugin;
export default stickyColumnsPlugin;
