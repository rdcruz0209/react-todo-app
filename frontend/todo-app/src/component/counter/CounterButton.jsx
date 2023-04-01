// import {useState} from "react";
import './Counter.css'
import { PropTypes } from 'prop-types'

export default function CounterButton({ by, incrementMethod, decrementMethod }) {
  // this function works  by requiring a parameters to be passed in whenever this Component is called
  // in the Counter Component, the by and methods are provided in the <CounterButton> tags

  // [0, ƒ]
  // const [count, setCount] = useState(0);

  // function incrementCounterFunction() {
  //   // setCount(count + by);
  //   incrementMethod(by);
  // }
  // function decrementCounterFunction() {
  //   // setCount(count - by);
  //   decrementMethod(by);
  // }

  return (
    <div className="Counter">
      <div>
        <button className="counterButton" onClick={() => incrementMethod(by)}>
          +{by}
        </button>
        <button className="counterButton" onClick={() => decrementMethod(by)}>
          -{by}
        </button>
      </div>
    </div>
  )
}

CounterButton.propTypes = {
  by: PropTypes.number,
}

CounterButton.defaultProps = {
  by: 5,
}
