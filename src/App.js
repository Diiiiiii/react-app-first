import logo from "./logo.svg";
import "./App.css";
import { idHelpers } from "./library/helpers";
import { RandomValue } from "./components/RandomValue";
import { RepositoryLink } from "./components/RepositoryLink";
import { Quiz } from "./components/Quiz";

function App() {
  const id = idHelpers.generateId();
  const handleSubmit = (answers, id) => console.log(answers, id);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>react-app-first</h1>
        <p>Your unique ID is: {id}</p>
        <RepositoryLink>View Repository</RepositoryLink>
        <RandomValue values={[4, 5, 6]} />
        <Quiz id = {id} onSubmit={handleSubmit} />
      </header>
    </div>
  );
}

export default App;