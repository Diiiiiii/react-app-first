import logo from './logo.svg';
import './App.css';
import { nanoid } from 'nanoid'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          First react app
        </h1>
        <p>Your unique ID is: {nanoid()}</p>
        <a
          className="App-link"
          href="https://github.com/Diiiiiii/react-app-first"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </header>
    </div>
  );
}

export default App;
