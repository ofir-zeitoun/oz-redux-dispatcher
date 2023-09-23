import { useDispatchActions } from "oz-redux-dispatcher";

import { testActions } from "../reducers/test-reducer";

export const useTestActions = () => useDispatchActions(testActions);
