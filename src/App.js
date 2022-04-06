import logo from './logo.svg';
import './App.css';
import  { idHelpers} from "./library/helpers";
import { RandomValue } from "./componenets/RandomValue";
import { RepositoryLink } from "./componenets/RepositoryLink";
import { ABQuestion } from './componenets/ABQuestion';
import { ABCQuestion } from './componenets/ABCQuestion';
import { useState } from "react";

function App() {
  const [state, setState] = useState({ question1: null, question2: null });
  /* 
  const stateReferences = useState(...);
  const state = stateReferences[0];
  const setState = stateReferences[1];
   */
  // definiramo dvije funkcije i stavljamo ih u onClikEventhandler
  //pozivamo metodu setState() -dva načina - 1. staviti novi objekt setState({}) i 2. funkcijski oblik koji vraća trenutno stanje i očekuje da damo novo stanje
  const handleOnChoice = (id, choiceValue) => {
    setState((currentState) =>({
    ...currentState,
    [id]: choiceValue,
  }));
};
 // const handleOnChoice = (choiceValue) => console.log(choiceValue);
//  const handleButtonBClick = () => console.log('Clicked B');
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
        <div>{state.question1}, {state.question2}</div>
        <ABQuestion
          id="question1" 
          question="Make the right choice"
          buttonA="Blue pill"
          buttonB="Red pill"
          buttonAValue="Blue"
          buttonBValue="Red"
          onChoice={handleOnChoice}
          /* onButtonAClick={handleButtonAClick}
          onButtonBClick={handleButtonBClick} */
        />
        <ABCQuestion 
          id="question2"
          question="Make the right choice"
          buttonA="Blue pill"
          buttonB="Red pill"
          buttonC="Pink pill"
          buttonAValue="Blue"
          buttonBValue="Red"
          buttonCValue="Pink"
          onChoice={handleOnChoice}
        />
      </header>
    </div>
  );
}

export default App;
