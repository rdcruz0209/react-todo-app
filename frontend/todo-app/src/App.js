// import logo from './logo.svg';
import "./App.css";
import Counter from "./component/counter/Counter";

function App() {
  return (
    <div className="App">
      <h1 className="count">This is a Counter App</h1>
      <div className="count">Try and Click a Button</div>
      <Counter totalCount={0}></Counter>
    </div>
  );
}

// function PlayingWithProps(props) {
//   console.log(props);
//   console.log(props.property1);
//   console.log(props.property2);
//   return <div>Props</div>;
// }

// function PlayingWithProps({property1, property2}) {
//   console.log(property1);
//   console.log(property2);
//   return <div>Props</div>;
// }

export default App;
