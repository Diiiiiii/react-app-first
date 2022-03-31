import logo from './logo.svg';
import './App.css';
import  { idHelpers} from "./library/helpers";
import { RandomValue } from "./componenets/RandomValue";
import { RepositoryLink } from "./componenets/RepositoryLink";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          First react app
        </h1>
        <p>Your unique ID is: {idHelpers.generateId()}</p>
        <RepositoryLink />
        <RandomValue />
      </header>
    </div>
  );
}

export default App;
