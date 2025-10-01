import type { ScrollEasingFn } from "./easing";
import type { IFScrollbarRefProps, IFScrollbarPlugin, IFMomentumRef } from "./types";
export declare const createScrollbarApi: (scrollbar: React.RefObject<any>, scrollDuration?: number, scrollEasing?: ScrollEasingFn, momentumRef?: IFMomentumRef, inertia?: boolean, inertiaFriction?: number, plugins?: IFScrollbarPlugin[]) => IFScrollbarRefProps;
