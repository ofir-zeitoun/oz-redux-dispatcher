import { ChangeEvent, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useTestActions } from "../store";

export default function Word() {
  const { dispatchFetchWord } = useTestActions();
  const [wordLength, setWordLength] = useState(5);

  const { word, prev } = useSelector(
    (state: { test: { word: string; prev: string } }) => ({
      word: state.test.word,
      prev: state.test.prev,
    }),
    shallowEqual
  );

  return (
    <div>
      <div>Old word: {prev}</div>
      <div>Word: {word}</div>
      <input
        type="range"
        min="3"
        max="10"
        value={wordLength}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setWordLength(Number(e.target.value))
        }
        step="1"
      />
      <button
        onClick={() => dispatchFetchWord(wordLength)}
        style={{ background: "pink", color: "red" }}
      >
        {`Get ${wordLength} letters word`}
      </button>
    </div>
  );
}
