import type { IFScrollbarPlugin } from "../types";
export interface IFinertiaOptions {
    momentumRef?: {
        vx: number;
        vy: number;
        raf: number | null;
    };
    friction?: number;
}
/** ------------------- Inertia / Momentum Plugin ------------------- */
declare const inertiaPlugin: ({ momentumRef, friction, }?: IFinertiaOptions) => IFScrollbarPlugin;
export default inertiaPlugin;
