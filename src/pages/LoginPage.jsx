import { useContext } from "react";
import {useNavigate} from "react-router-dom";
import { AppContext} from "../contexts/AppContext";
import {LoginForm} from "../components/LoginForm";


export function LoginPage() {
const navigate =useNavigate();
const appState = useContext(AppContext);

const handleLogin = (formState) => {
     appState.signIn(formState.name, formState.email);
     navigate("/quiz");
 };
 
  return (
    <div className="LoginPage">
        <LoginForm onLogin={handleLogin} />      
    </div>  
  );
  }

 