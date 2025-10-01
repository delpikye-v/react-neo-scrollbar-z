import type { IFScrollbarPlugin } from "../types";
export interface IFScrollSpyOptions {
    callbacks?: {
        onTop?: () => void;
        onBottom?: () => void;
    };
    threshold?: number;
}
declare const scrollSpyPlugin: ({ threshold, callbacks, }?: IFScrollSpyOptions) => IFScrollbarPlugin;
export default scrollSpyPlugin;
