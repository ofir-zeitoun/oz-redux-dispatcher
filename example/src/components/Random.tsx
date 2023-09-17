import { useTestActions } from "../store";

export default function Random() {
  const { dispatchFetchRandom} = useTestActions();
  
  return (
    <button
      onClick={dispatchFetchRandom}
      style={{ background: "green", color: "yellow" }}
    >
      Random
    </button>
  );
}
