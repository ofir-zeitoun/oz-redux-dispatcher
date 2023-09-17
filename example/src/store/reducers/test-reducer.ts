import { buildOzReducer } from "oz-redux-reducer";

type TestState = {
  sum: number;
  word: string;
  prev: string;
};

export const [testReducer, testActions] = buildOzReducer({
  sum: 0,
  word: "<Empty>",
  prev: "<Empty>",
  add(state: TestState, toAdd: number) {
    return {
      ...state,
      sum: state.sum + toAdd,
    };
  },
  resetSum(state: TestState) {
    return { ...state, sum: 0 };
  },
  setSum(state: TestState, sum: number) {
    return { ...state, sum };
  },
  async fetchRandom(dispatch: Function) {
    const value = await fetch(
      "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"
    ).then((response) => response.json());
    dispatch(testActions.setSum(value));
  },
  setWord(state: TestState, word: string) {
    return { ...state, prev: state.word, word };
  },
  async fetchWord(
    dispatch: Function,
    getState: () => TestState,
    extraArgument: any,
    payload: number
  ) {
    
    const word = await fetch(
      `https://www.random.org/strings/?num=1&len=${payload}&digits=on&upperalpha=on&loweralpha=on&format=plain&rnd=new`
    ).then((response) => response.text());

    dispatch(testActions.setWord(word.trim()));
  },
});
