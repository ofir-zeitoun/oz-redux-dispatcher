import { useDispatch as r } from "react-redux";
function o(t) {
  return `${t[0].toUpperCase()}${t.substring(1)}`;
}
function u(t) {
  const i = r();
  return Object.entries(t).reduce(
    (c, [e, n]) => ({
      ...c,
      [`dispatch${o(e)}`]: function(s) {
        i(n(s));
      }
    }),
    {}
  );
}
export {
  u as useOzDispatchActions
};
