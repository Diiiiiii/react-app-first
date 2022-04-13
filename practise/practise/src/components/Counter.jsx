import { useState} from "react";

export function Counter() {
    const [count, setCount] = useState(1234);
    const handleClick = () => {
        //setCount(count + 1);
        setCount((state) => state + 1);
    };

    return <button onClick= {handleClick}>{count}</button>;  
}