import  { arrayHelpers } from "../library/helpers";

export function RandomValue() {
    return <div>{arrayHelpers.getRendomElement([1 ,2, 3])}</div>
  }