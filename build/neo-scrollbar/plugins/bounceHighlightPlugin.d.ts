import type { IFScrollbarPlugin } from "../types";
export interface IFBounceHighlightOptions {
    distance?: number;
    duration?: number;
}
declare const bounceHighlightPlugin: ({ distance, duration, }?: IFBounceHighlightOptions) => IFScrollbarPlugin;
export default bounceHighlightPlugin;
