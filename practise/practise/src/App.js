import { Counter } from "./containers/Counter";

function App(props) {
  return (
    <div className="App">
      <Counter initialValue={0} increment = {props.increment || -10} />
    </div>
  );
}
export default App;
