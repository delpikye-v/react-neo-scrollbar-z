import type { IFScrollbarPlugin } from "../types";
export interface IFBounceEffectOptions {
    distance?: number;
    duration?: number;
    borderColor?: string;
    borderWidth?: number;
    borderDuration?: number;
}
declare const bounceEffectPlugin: ({ distance, duration, borderColor, borderWidth, borderDuration, }?: IFBounceEffectOptions) => IFScrollbarPlugin;
export default bounceEffectPlugin;
