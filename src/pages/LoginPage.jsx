import { useContext } from "react";
import {useNavigate} from "react-router-dom";
import { AppContext} from "../contexts/AppContext";
import {LoginForm} from "../components/LoginForm";
import { RandomQuote } from "../containers/RandomQuote";
import { NasaImage } from "../containers/NasaImage";

export function LoginPage() {
const navigate =useNavigate();
const appState = useContext(AppContext);

const handleLogin = (formState) => {
     appState.signIn(formState.name, formState.email);
     navigate("/quiz");
 };
 
  return (
    <div className="LoginPage">
        <RandomQuote  />
        <LoginForm onLogin={handleLogin} />
        <NasaImage />      
    </div>  
  );
  }

 