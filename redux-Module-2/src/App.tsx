import "./App.css";
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const count = useAppSelector((store) => store.counter.count);
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center ">
      <div className="border p-20 rounded-md border-red-500 bg-gray-100 shadow-xl">
        <h1 className="text-7xl">{count}</h1>
        <div className="space-x-5 mt-10">
          <button
            onClick={() => {
              dispatch(decrement());
            }}
            className={`bg-red-500 hover:bg-red-700 ${button}`}
          >
            Decrement
          </button>
          <button
            onClick={() => {
              dispatch(increment());
            }}
            className={`bg-blue-500 hover:bg-blue-700 ${button}`}
          >
            Increment
          </button>
        </div>
        <div className="space-x-5 mt-10">
          <button
            onClick={() => {
              dispatch(decrementByValue(5));
            }}
            className={`bg-red-500 hover:bg-red-700 ${button}`}
          >
            Decrement By 5
          </button>
          <button
            onClick={() => {
              dispatch(incrementByValue(5));
            }}
            className={`bg-blue-500 hover:bg-blue-700 ${button}`}
          >
            Increment By 5
          </button>
        </div>
      </div>
    </div>
  );
}
const button =
  " text-white font-bold py-6 px-12 rounded transition duration-300";
export default App;
