import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter";

export default function Counter() {
  const counter = useSelector((state) => state.counter.counter);
  const toggleCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = (value) => {
    dispatch(counterActions.increase(value));
  };

  const resetHandler = () => {
    dispatch(counterActions.reset());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className="w-1/2 flex items-center justify-center flex-col gap-5 place-self-center">
      <h1 className="tracking-tighter text-4xl">Redux Counter</h1>
      <div className="flex items-center justify-center flex-col gap-5 p-10 border border-seasalt/20 w-full rounded-2xl">
        {toggleCounter && (
          <h1 className="tracking-tighter text-4xl">{counter}</h1>
        )}
        <div className="flex gap-2">
          <button
            className="cursor-pointer px-4 py-2 bg-seasalt text-black w-max rounded-xl hover:text-rich-black hover:bg-seasalt/90"
            onClick={incrementHandler}
          >
            Increment
          </button>
          <button
            className="cursor-pointer px-4 py-2 bg-seasalt text-black w-max rounded-xl hover:text-rich-black hover:bg-seasalt/90"
            onClick={() => increaseHandler(5)}
          >
            Increment by 5
          </button>
          <button
            className="cursor-pointer px-4 py-2 bg-seasalt text-black w-max rounded-xl hover:text-rich-black hover:bg-seasalt/90"
            onClick={resetHandler}
          >
            Reset
          </button>
          <button
            className="cursor-pointer px-4 py-2 bg-seasalt text-black w-max rounded-xl hover:text-rich-black hover:bg-seasalt/90"
            onClick={decrementHandler}
          >
            Decrement
          </button>
        </div>
        <button
          className="cursor-pointer px-4 py-2 bg-seasalt text-black w-max rounded-xl hover:text-rich-black hover:bg-seasalt/90"
          onClick={toggleCounterHandler}
        >
          {toggleCounter ? "Hide" : "Show"} Counter
        </button>
      </div>
    </div>
  );
}
