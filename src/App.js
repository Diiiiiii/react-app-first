import logo from './logo.svg';
import './App.css';
import  { idHelpers} from "./library/helpers";
import { RandomValue } from "./componenets/RandomValue";
import { RepositoryLink } from "./componenets/RepositoryLink";
import { ABQuestion } from './componenets/ABQuestion';


function App() {
  // definiramo dvije funkcije i stavljamo ih u onClikEventhandler
  const handleButtonAClick = () => console.log('Clicked A');
  const handleButtonBClick = () => console.log('Clicked B');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          First react app
        </h1>
        <p>Your unique ID is: {idHelpers.generateId()}</p>

        <RepositoryLink>View Repository</RepositoryLink>
        <RandomValue values={[4, 5, 6]} />
        {/* <div>
          <p>Make the right choice:</p>
          <button onClick={handleButtonAClick}>Blue pill</button>
          <button onClick={handleButtonBClick}>Red pill</button>
        </div> */}
        <ABQuestion 
          onButtonAClick={handleButtonAClick}
          onButtonBClick={handleButtonBClick}
        />
      </header>
    </div>
  );
}

export default App;
