import type { IFScrollbarPlugin } from "../types";
export interface IFGradientIndicatorOptions {
    gradientSize?: number;
    gradientColor?: string;
    zIndex?: number;
}
declare const gradientIndicatorPlugin: ({ gradientSize, gradientColor, zIndex, }?: IFGradientIndicatorOptions) => IFScrollbarPlugin;
export default gradientIndicatorPlugin;
