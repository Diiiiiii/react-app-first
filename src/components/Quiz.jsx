// import { checkPropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { ABCQuestion } from "./ABCQuestion";
import { ABQuestion } from "./ABQuestion";
import { FreeInputQuestion } from "./FreeInputQuestion";

/* const questions = [
  "Enter your name",
  "Enter your age",
  "Enter your favourite food"
];
 */
const questions = [
  { 
    text: "Enter your name",
    id: "name",
 },
 {
   text: "Enter your age",
   id: "age",
 },
 {
   text:"Enter your favourite food",
    id: "food",
 }, 
 {
  text:"Enter your city",
   id: "city",
},
];


export function Quiz(props) {
  const [state, setState] = useState({});

   useEffect(() => {
    props.onStateChange();
  }, [state]);
 
  /* useEffect(() => {
    console.log('First mount!');

    return () => {
      console.log("Unmount!");
    };
   }, []);

   useEffect(() => {
     console.log("New state!");

     return () => {
       console.log("Old state!");
     };
   });

   useEffect(() => {
     console.log("Dependency change", state.question1);
   }, [state.question1]); */

  const handleAnswer = (id, choiceValue) => {
    setState((currentState) => ({
      ...currentState,
      [id]: choiceValue,
    }));
  };

  const handleSubmit = () => {
    props.onSubmit(state, props.id);
  };

 /*  const questionsMap = questions.map((question, index) => { 
    return (
  <FreeInputQuestion 
    key={index} 
    id={`freeInputQuestion${index}`}
    text={question} 
    onKeyUp={handleAnswer}
     />
  );
  }); */

  const questionsMap = questions.map((question) => { 
    return (
  <FreeInputQuestion 
    key={question.id} 
    id={question.id}
    text={question.text} 
    onKeyUp={handleAnswer}
     />
  );
  });

  return (
    <div>
      {questionsMap}
      {/* <div>
        {state.question1}, {state.question2}, {state.question3}
      </div> */}
      {/* <FreeInputQuestion id="question3" text="Enter your name" onKeyUp={handleAnswer} /> */}
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