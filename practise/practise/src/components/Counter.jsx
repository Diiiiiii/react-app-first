import { useState} from "react";

export function Counter(props) {
    const [count, setCount] = useState(props.initialValue);
    const handleClick = () => {
        //setCount(count + 1);
        setCount((state) => state + props.increment);
    };

    return <button onClick= {handleClick}>{count}</button>;  
}