import type { IFScrollbarPlugin } from "../types";
export interface IFSnapToItemOptions {
    itemSelector?: string;
    snapDelay?: number;
}
declare const snapToItemPlugin: ({ itemSelector, snapDelay, }?: IFSnapToItemOptions) => IFScrollbarPlugin;
export default snapToItemPlugin;
