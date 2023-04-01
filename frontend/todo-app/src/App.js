import './App.css'
import TodoApp from './component/todo/TodoApp'

function App() {
  return (
    <div className="App">
      <TodoApp></TodoApp>
    </div>
  )
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

export default App
