// import { checkPropTypes } from "prop-types";
import { useState } from "react";
import { ABCQuestion } from "./ABCQuestion";
import { ABQuestion } from "./ABQuestion";
import { FreeInputQuestion } from "./FreeInputQuestion";

export function Quiz(props) {
  const [state, setState] = useState({});

  const handleAnswer = (id, choiceValue) => {
    setState((currentState) => ({
      ...currentState,
      [id]: choiceValue,
    }));
  };

  const handleSubmit = () => {
    props.onSubmit(state, props.id);
  };

  return (
    <div>
      {/* <div>
        {state.question1}, {state.question2}, {state.question3}
      </div> */}
      <FreeInputQuestion id="question3" text="Enter your name" onKeyUp={handleAnswer} />
      <ABQuestion
        id="question1"
        question="Make the right choice"
        buttonA="Blue pill"
        buttonB="Red pill"
        buttonAValue="Blue"
        buttonBValue="Red"
        onChoice={handleAnswer}
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
        onChoice={handleAnswer}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}