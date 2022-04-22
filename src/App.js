// import logo from "./logo.svg";
//import "./App.css";
//import { idHelpers } from "./library/helpers";
//import { RandomValue } from "./components/RandomValue";
import { RepositoryLink } from "./components/RepositoryLink";
import { Quiz } from "./components/Quiz";
import { useContext, useState} from "react";
import {LoginForm} from "./components/LoginForm";
import { Timer } from "./components/Timer";
import { AppContext } from "./contexts/AppContext";
import { withLocale } from "./hoc/withLocale.jsx";
import { Heading } from "./components/Heading";
import { Paragraph } from "./components/Paragraph";
import { Button } from "./components/Button";
import { Routes, Route, Link, useParams } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/help">Help page</Link>
    </div>
  );
}

function HelpPage() {
  const params = useParams();
 
  return (
    <div>
      <h1>Help page for topic {params.topic}</h1>
      <Link to="/">Home page</Link>
    </div>
  );
}

const LocalizedRepositoryLink = withLocale(RepositoryLink);

function App() {
  const appState = useContext(AppContext);
  console.log(appState);
  const [actionCount, setActionCount] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [loginState, setLoginState] = useState(null);
  const [finishTime, setFinishTime] = useState(null);
  
//  const id = idHelpers.generateId();
  
  const handleSubmit = (answers, id) => { 
  setQuizAnswer({answers, id});
};
  const handleStateChange = () => setActionCount((state) => state + 1);
 // const handleLogin = (formState) => console.log(formState);
 const handleLogin = (formState) => {
   setLoginState(formState);
 };
 const handleTimerFinish = (time) => setFinishTime(time);

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
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="help" element={<HelpPage />} >
          <Route path=":topic" element={<HelpPage />} />
        </Route>
      </Routes>

      <header className="App-header">
        <Heading element="h1" size="1">Quiz Application</Heading>
        <Heading element="h2" size="5">Hello World!</Heading>
        <Heading element="h3" size="4">Hello World!</Heading>

     
        <Button buttonType="primary" onClick={() => appState.setId("foo")}>Click me</Button>
         <Paragraph element="div">
           {appState.translate("currentLocale")}: {appState.locale}
         </Paragraph>
        <Button buttonType="ghost" onClick={() => appState.setLocale("hr")}>
          HR
        </Button> 
        <Button buttonType="ghost" onClick={() => appState.setLocale("en")}>
          EN
        </Button> 
        <Button buttonType="ghost" onClick={() => appState.setLocale("de")}>
          DE
        </Button> 
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <h1>react-app-first</h1> */}
        {/* <p>Your unique ID is: {id}</p> */}
        
        <Paragraph element="p">
          <div>Your action count is: {actionCount}</div>
          <RepositoryLink>View Repository</RepositoryLink>
          <LocalizedRepositoryLink>View Repository</LocalizedRepositoryLink> 
        </Paragraph>
        
        {/* <RandomValue values={[4, 5, 6]} /> */}
        {/* <LoginForm onLogin={handleLogin}/> */}
        {loginState === null && <LoginForm onLogin={handleLogin} />}
        {loginState !== null && (
          <Paragraph element="div">
            {loginState.name} ({loginState.email})
          </Paragraph>
        )}
        {quizAnswer === null && loginState !== null && (
         
        
        <>
        <Timer onFinish={handleTimerFinish}
        // izdvojimo u zasebnu funkciju
        //  onTick={(time) => console.log('tick', time)} 
        //  onFinish={(time) => setFinishTime(time)}  
          />
        <Quiz 
              //id = {appState.id} 
              onSubmit={handleSubmit} 
              onStateChange= {handleStateChange}/>
        </>
        )}
        { quizAnswer !== null && answerComponents}
        { quizAnswer !== null  && <Paragraph element="div">{quizAnswer.id}</Paragraph>}
        { finishTime !== null && <Paragraph element="div">{finishTime} s</Paragraph>}
 
      </header>
    </div>
    
  );
  }

export default App;
 /*{ quizAnswer !== null && <div>{JSON.stringify(quizAnswer)}</div>}*/