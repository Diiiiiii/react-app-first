import { useState } from "react";
import { Button } from "./Button";

export function LoginForm(props) {
    const [state, setState] = useState({});

    const handleChange = (event) => {
    // console.log(event.target.value, event.target.name);
       setState({...state, [event.target.name]: event.target.value});
        //state[event.target.name] = event.target.value
        //state.name = event.target.value
    };

    const handleSubmint = (event) => {
        event.preventDefault();
       // console.log("submit", state);
        props.onLogin(state);
    };

    return (
     <form onSubmit={handleSubmint}>
         <div>
             <label htmlFor="name">
                Name:
                <input type="text" id="name" name="name" onChange={handleChange} />
             </label>
         </div>
         <div>
             <label htmlFor="">
                 Email:
                 <input type="email" name="email" id="email" onChange={handleChange} />
             </label>
         </div>
         <div>
             <Button buttonType="primary" type="submit">
                 Sign in
            </Button>
         </div>
     </form>
    );
}