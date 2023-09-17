import { useDispatch } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import reducers from "./reducers";

export * from "./actions";

const middleware = applyMiddleware(thunkMiddleware);

const store = createStore(reducers, composeWithDevTools({ trace: true })(middleware));

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

export default store;
