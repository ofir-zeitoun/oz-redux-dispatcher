import { useOzDispatchActions } from "oz-redux-dispatcher";

import { testActions } from "../reducers/test-reducer";

export const useTestActions = () => useOzDispatchActions(testActions);
