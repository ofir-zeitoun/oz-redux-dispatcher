import { useDispatch } from "react-redux";

import { DispatchFunctions } from "./use-oz-dispatch-actions.types";

function capitalize(text: string): string {
  return `${text[0].toUpperCase()}${text.substring(1)}`;
}

type Entry<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T];

export function useOzDispatchActions<
  T extends {
    [K in keyof T]: T[K];
  },
  K extends keyof T
>(actions: T): DispatchFunctions<T> {
  const dispatch = useDispatch();

  return (Object.entries(actions) as Entry<T>[]).reduce(
    (a: DispatchFunctions<T>, [name, action]) => ({
      ...a,
      [`dispatch${capitalize(name as string)}`]: function (
        payload: Parameters<T[K]>
      ) {
        dispatch(action(payload));
      },
    }),
    {} as DispatchFunctions<T>
  );
}
