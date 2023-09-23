import { DispatchFunctions } from "./use-dispatch-actions.types";
export declare function useDispatchActions<T extends {
    [K in keyof T]: T[K];
}, K extends keyof T>(actions: T): DispatchFunctions<T>;
