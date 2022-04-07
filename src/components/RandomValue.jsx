import  { arrayHelpers } from "../library/helpers";

export function RandomValue(props) {
    const value = arrayHelpers.getRendomElement(props.values);
    //const isOdd = value % 2 === 1; 
    //const element = isOdd ? <span>is odd</span> : <span>is even</span>;
   /*  let element = <span>is even</span>;
    if (isOdd) {
      element = <span>is odd</span>;
    } else {
      element = <span>is even</span>;
    } */
  
  
  return (

    <div>
   {value} is {value % 2 === 1 ?  "odd" : "even"}
    </div>
  );

   /*  <div>
   {value}  {value % 2 === 1 ? <span>is odd</span> : <span>is even</span>}
    </div>
  ); */

    /* <div>
    {value} {isOdd ? <span>is odd</span> : <span>is even</span>}
    </div>
    ); */
  }