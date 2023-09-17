import { useTestActions } from "../store";

export default function Reset() {
  const { dispatchResetState } = useTestActions();

  return (
    <button
      onClick={dispatchResetState}
      style={{ background: "red", color: "white" }}
    >
      Reset
    </button>
  );
}
