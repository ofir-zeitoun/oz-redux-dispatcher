export type DispatchFunctions<T extends {
    [K in keyof T]: (...args: any[]) => any;
}> = {
    [K in keyof T as `dispatch${Capitalize<K & string>}`]: T[K];
};
