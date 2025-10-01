import type { IFScrollbarPlugin } from "../types";
export interface IFHighlightItemOptions {
    itemSelector?: string;
    highlightClass?: string;
}
declare const highlightItemPlugin: ({ itemSelector, highlightClass, }?: IFHighlightItemOptions) => IFScrollbarPlugin;
export default highlightItemPlugin;
