import { Component } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

// export default function Counter() {
//   const counter = useSelector((state) => state.counter);
//   const dispatch = useDispatch();

//   const toggleCounterHandler = () => {};

//   const incrementHandler = () => {
//     dispatch({
//       type: "increment",
//     });
//   };

//   const resetHandler = () => {
//     dispatch({
//       type: "reset",
//     });
//   };

//   const decrementHandler = () => {
//     dispatch({
//       type: "decrement",
//     });
//   };

//   return (
//     <div className="w-1/2 flex items-center justify-center flex-col gap-5">
//       <h1 className="tracking-tighter text-4xl">Redux Counter</h1>
//       <div className="flex items-center justify-center flex-col gap-5 p-10 border border-seasalt/20 w-full rounded-2xl">
//         <h1 className="tracking-tighter text-4xl">{counter}</h1>
//         <div className="flex gap-2">
//           <button
//             className="cursor-pointer px-4 py-2 bg-seasalt text-black w-max rounded-xl hover:text-rich-black hover:bg-seasalt/90"
//             onClick={incrementHandler}
//           >
//             Increment
//           </button>
//           <button
//             className="cursor-pointer px-4 py-2 bg-seasalt text-black w-max rounded-xl hover:text-rich-black hover:bg-seasalt/90"
//             onClick={resetHandler}
//           >
//             Reset
//           </button>
//           <button
//             className="cursor-pointer px-4 py-2 bg-seasalt text-black w-max rounded-xl hover:text-rich-black hover:bg-seasalt/90"
//             onClick={decrementHandler}
//           >
//             Decrement
//           </button>
//         </div>
//         <button
//           className="cursor-pointer px-4 py-2 bg-seasalt text-black w-max rounded-xl hover:text-rich-black hover:bg-seasalt/90"
//           onClick={toggleCounterHandler}
//         >
//           Toggle Counter
//         </button>
//       </div>
//     </div>
//   );
// }

class Counter extends Component {
  toggleCounterHandler() {}

  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  resetHandler() {
    this.props.reset();
  }

  render() {
    return (
      <div className="w-1/2 flex items-center justify-center flex-col gap-5">
        <h1 className="tracking-tighter text-4xl">Redux Counter</h1>
        <div className="flex items-center justify-center flex-col gap-5 p-10 border border-seasalt/20 w-full rounded-2xl">
          <h1 className="tracking-tighter text-4xl">{this.props.counter}</h1>
          <div className="flex gap-2">
            <button
              className="cursor-pointer px-4 py-2 bg-seasalt text-black w-max rounded-xl hover:text-rich-black hover:bg-seasalt/90"
              onClick={this.incrementHandler.bind(this)}
            >
              Increment
            </button>
            <button
              className="cursor-pointer px-4 py-2 bg-seasalt text-black w-max rounded-xl hover:text-rich-black hover:bg-seasalt/90"
              onClick={this.resetHandler.bind(this)}
            >
              Reset
            </button>
            <button
              className="cursor-pointer px-4 py-2 bg-seasalt text-black w-max rounded-xl hover:text-rich-black hover:bg-seasalt/90"
              onClick={this.decrementHandler.bind(this)}
            >
              Decrement
            </button>
          </div>
          <button
            className="cursor-pointer px-4 py-2 bg-seasalt text-black w-max rounded-xl hover:text-rich-black hover:bg-seasalt/90"
            onClick={this.toggleCounterHandler}
          >
            Toggle Counter
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapStateToDispatch(dispatch) {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
    reset: () => dispatch({ type: "reset" }),
  };
}

export default connect(mapStateToProps, mapStateToDispatch)(Counter);
