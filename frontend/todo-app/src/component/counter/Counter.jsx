import {useState} from "react";
import "./Counter.css";
import CounterButton from "./CounterButton";
// import {PropTypes} from "prop-types";

export default function Counter() {
  const [totalCount, setCount] = useState(0);

  function incrementCounterParentFunction(by) {
    setCount(totalCount + by);
  }

  function decrementCouterParentFunction(by) {
    if (totalCount <= 0 || totalCount <= by) {
      setCount(0);
    } else {
      setCount(totalCount - by);
    }
  }

  function resetCounter() {
    setCount(0);
  }

  return (
    <>
      <span className="totalCount">{totalCount}</span>

      <CounterButton
        by={1}
        incrementMethod={incrementCounterParentFunction}
        decrementMethod={decrementCouterParentFunction}
      ></CounterButton>

      <CounterButton
        by={2}
        incrementMethod={incrementCounterParentFunction}
        decrementMethod={decrementCouterParentFunction}
      ></CounterButton>

      <CounterButton
        by={5}
        incrementMethod={incrementCounterParentFunction}
        decrementMethod={decrementCouterParentFunction}
      ></CounterButton>

      <div>
        <button className="resetButton" onClick={resetCounter}>
          Reset
        </button>
      </div>
    </>
  );
}
