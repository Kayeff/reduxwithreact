export default function Counter() {
  const toggleCounterHandler = () => {};

  return (
    <div className="w-1/2 flex items-center justify-center flex-col gap-5">
      <h1 className="tracking-tighter text-4xl">Redux Counter</h1>
      <div className="flex items-center justify-center flex-col gap-5 p-10 border border-seasalt/20 w-full rounded-2xl">
        <h1 className="tracking-tighter text-2xl">Counter Value</h1>
        <button
          className="cursor-pointer px-4 py-2 bg-seasalt text-rich-black w-max rounded-xl"
          onClick={toggleCounterHandler}
        >
          Toggle Counter
        </button>
      </div>
    </div>
  );
}
