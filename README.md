# oz-redux-dispatcher

This utility get all actions into useDispatch hook.

Uses [oz-redux-reducer](https://github.com/ofir-zeitoun/oz-redux-reducer)

Works with:

1. [Redux](https://redux.js.org/ "Official site")
1. [Redux Thunk](https://www.npmjs.com/package/redux-thunk "npm")
1. [React Redux](https://www.npmjs.com/package/react-redux "npm")

## Example:

[Live demo - TBD](https://ofir-zeitoun.github.io/oz-redux-dispatcher/)

## Install:

First follow instruction of [oz-redux-reducer](https://www.npmjs.com/package/oz-redux-reducer)

```
npm i oz-redux-dispatcher
```

## Usage:

`store/reducers/test`:

```ts
import { buildOzReducer } from "oz-redux-reducer";
// .
// .
// .
export const [testReducer, testActions] = buildOzReducer({
  text: "test",
  setText(state: object, newValue: string) {
    return { ...state, text: newValue };
  },
  async fetchText(dispatch: Function) {
    const value = await fetch(
      ///...
    ).then(response => response.text());
    dispatch(testActions.setText(value));
  };
});
```

in `store/reducers/index.ts` file:

```ts
import { combineReducers } from "redux";

// ...
import { testReducer } from "./TestReducer";
// ...

export default combineReducers({
  // ...
  test: testReducer,
  // ...
});
```

in `store/actions/index.ts` file:

```ts
import { useOzDispatchActions } from "oz-redux-dispatcher";

import { testActions } from "../reducers/test-reducer";

export const useTestActions = () => useOzDispatchActions(testActions);
```

calling actions:

```tsx
import { useTestActions } from "../store";

export default function ShowText({ text = "" }: { text?: string }) {
  const { dispatchSetText } = useTestActions();

  return <button onClick={() => dispatchSetText(text)}>Set text</button>;
}
```

### Now replace old reducers with new ozReducer & ozDispatcher 😉
