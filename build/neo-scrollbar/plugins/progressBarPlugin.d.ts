import type { IFScrollbarPlugin } from "../types";
export interface IFProgressBarOptions {
    size?: number;
    color?: string;
    background?: string;
    axis?: "y" | "x";
    position?: "top" | "bottom" | "left" | "right";
}
declare const progressBarPlugin: ({ size, color, background, axis, position, }?: IFProgressBarOptions) => IFScrollbarPlugin;
export default progressBarPlugin;
