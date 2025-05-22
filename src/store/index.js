import { createStore } from "redux";

const initialValue = { counter: 0, showCounter: false };

function reducer(state = initialValue, action) {
  if (action.type === "increment")
    return { counter: state.counter + 1, showCounter: state.showCounter };
  if (action.type === "increase")
    return {
      counter: state.counter + action.payload,
      showCounter: state.showCounter,
    };
  if (action.type === "decrement")
    return { counter: state.counter - 1, showCounter: state.showCounter };
  if (action.type === "reset")
    return { counter: 0, showCounter: state.showCounter };

  if (action.type === "show") {
    return { showCounter: !state.showCounter, counter: state.counter };
  }
  return state;
}

const store = createStore(reducer);

export default store;
