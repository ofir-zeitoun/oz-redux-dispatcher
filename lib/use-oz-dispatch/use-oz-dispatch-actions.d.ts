import { DispatchFunctions } from "./use-oz-dispatch-actions.types";
export declare function useOzDispatchActions<T extends {
    [K in keyof T]: T[K];
}, K extends keyof T>(actions: T): DispatchFunctions<T>;
