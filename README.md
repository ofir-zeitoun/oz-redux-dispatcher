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

in `store/actions/index.ts` file:

```ts
import { useDispatchActions } from "oz-redux-dispatcher";

import { demoActions } from "../reducers/demo-reducer";

export const useDemoActions = () => useDispatchActions(demoActions);
```

calling actions:

```tsx
import { useDemoActions } from "../store";

export default function ShowText({ text = "" }: { text?: string }) {
  const { dispatchSetText } = useDemoActions();

  return <button onClick={() => dispatchSetText(text)}>Set text</button>;
}
```

### Now replace old reducers with new ozReducer & ozDispatcher 😉
