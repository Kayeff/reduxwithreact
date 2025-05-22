import { createStore } from "redux";

function reducer(state = { counter: 0 }, action) {
  if (action.type === "increment") return { counter: state.counter + 1 };
  if (action.type === "decrement") return { counter: state.counter - 1 };
  if (action.type === "reset") return { counter: 0 };
  return state;
}

const store = createStore(reducer);

export default store;
