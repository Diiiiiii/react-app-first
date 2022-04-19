import { useState, useEffect, useRef } from "react";

export function Timer(props) {
  const [time, setTime] = useState(0);
  const refTime = useRef(time);
 //const [isStopped, setIsStopped] = useState(false);

 
  useEffect(() => {
//    console.log("call effect");
    const intervalId = setInterval(() => {
      setTime((state) => state + 1);
        //props.onTick(state); 
         
    }, 1000);
          

    return () => {
 //     console.log("clean up effect");
      clearInterval(intervalId);
      props.onFinish(refTime.current);
  //    setIsStopped(true);
    //  props.onFinish(refTime.current);
    };
  }, []);

  useEffect(() => {
    props.onTick(time);
    refTime.current = time;
  }, [time, props]);
/* 
  useEffect(() => {
    console.log("isStopped", isStopped);
    if (isStopped) {
      props.onStop(time);
    }

    return () => {
      if (isStopped) {
        props.onStop(time);
      }
    };
  }, [isStopped, props, time]); */


 /*  useEffect(() => {
    props.onTick(time);
    refTime.current = time;
  }, [time, props]);
 */
  return <div>{time} s</div>;
}