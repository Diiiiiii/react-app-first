// import logo from "./logo.svg";
import "./App.css";
import { idHelpers } from "./library/helpers";
//import { RandomValue } from "./components/RandomValue";
import { RepositoryLink } from "./components/RepositoryLink";
import { Quiz } from "./components/Quiz";
import { useState} from "react";
import {LoginForm} from "./components/LoginForm";
import { Timer } from "./components/Timer";

function App() {
  const [actionCount, setActionCount] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [loginState, setLoginState] = useState(null);
  const id = idHelpers.generateId();
  const handleSubmit = (answers, id) => { 
  setQuizAnswer({answers, id});
};
  const handleStateChange = () => setActionCount((state) => state + 1);
 // const handleLogin = (formState) => console.log(formState);
 const handleLogin = (formState) => {
   setLoginState(formState);
 };
 //const handleTimerFinish = (time) => setFinishTime(time);

 let answerComponents = null;

 if (quizAnswer !== null) {
  answerComponents = Object.keys(quizAnswer.answers).map((key) => {
    console.log(key);
   return (
     <div key={key}>
     {key}: {quizAnswer.answers[key]}
     </div>
   );
  });

  console.log(answerComponents);
 }
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <h1>react-app-first</h1> */}
        {/* <p>Your unique ID is: {id}</p> */}
        <p>Your action count is: {actionCount}</p>
        <RepositoryLink>View Repository</RepositoryLink>
        {/* <RandomValue values={[4, 5, 6]} /> */}
        {/* <LoginForm onLogin={handleLogin}/> */}
        {loginState === null && <LoginForm onLogin={handleLogin} />}
        {loginState !== null && (
          <div>
            {loginState.name} ({loginState.email})
          </div>
        )}
        {quizAnswer === null && loginState !== null && (
          <Quiz id = {id} onSubmit={handleSubmit} onStateChange= {handleStateChange}/>
        )}
        <>
        <Timer onTick={(time) => console.log(time)} onFinish={handleTimerFinish} />
            <Quiz onSubmit={handleSubmit} onStateChange={handleStateChange} />
        </>
        { quizAnswer !== null && answerComponents}
         
 
      </header>
    </div>
    
  );
  }

export default App;
 /*{ quizAnswer !== null && <div>{JSON.stringify(quizAnswer)}</div>}*/