import { useTestActions } from "../store";

export default function Add({ amount = 1 }: { amount?: number }) {
  const { dispatchAdd } = useTestActions();

  return (
    <button onClick={() => dispatchAdd(amount)}>{`Add +${amount}`}</button>
  );
}
