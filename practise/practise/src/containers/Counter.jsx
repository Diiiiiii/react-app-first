import { useState} from "react";
import { Counter as Component } from "../components/Counter";

export function Counter(props) {
    const [count, setCount] = useState(props.initialValue);
    const handleClick = () => {
        //setCount(count + 1);
        setCount((state) => state + props.increment);
    };

    return <Component onClick= {handleClick} count={count} />;
}