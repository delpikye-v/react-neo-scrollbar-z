import type { IFScrollbarPlugin } from "../types";
export interface IFMinimapOptions {
    width?: number;
    indicatorColor?: string;
    trackColor?: string;
}
declare const minimapPlugin: ({ width, indicatorColor, trackColor, }?: IFMinimapOptions) => IFScrollbarPlugin;
export default minimapPlugin;
