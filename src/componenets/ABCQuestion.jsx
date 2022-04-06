import PropTypes from 'prop-types';
import "./ABCQuestion.css";

/* button.addEventListener('click', props.onButtonAClick);
button.addEventListener('click', () => {
    props.onChoice(props.buttonAValue);
}) */

export function ABCQuestion(props) {
  //   const handleOnClickA = () => props.onChoice(props.buttonAValue);
  //   const handleOnClickB = () => props.onChoice(props.buttonBValue);
  //   const handleOnClickC = () => props.onChoice(props.buttonBValue);
    
    return (
        <div className="ABCQuestion">
          <p className="ABCQestion__text">{props.question}</p>
          <div className="ABCQuestion__answers">
          {/* <button onClick={props.onButtonAClick}>{props.buttonA}</button>
          <button onClick={props.onButtonBClick}>{props.buttonB}</button> */}
            
            {/*<button onClick = {handleOnClickA}>{props.buttonA}</button>  */}
            {/*<button onClick = {handleOnClickB}>{props.buttonB}</button>  */}
            
            
            <button className="ABCQuestion__answer" onClick = {() => props.onChoice(props.buttonAValue)}>
                {props.buttonA}
            </button>
            <button className="ABCQuestion__answer" onClick = {() => props.onChoice(props.buttonBValue)}>
                {props.buttonB}
            </button>
            <button className="ABCQuestion__answer" onClick = {() => props.onChoice(props.buttonCValue)}>
                {props.buttonC}
            </button>
          </div>
     </div>
    ); 
} 

ABCQuestion.propTypes = {
    id: PropTypes.string.isRequired,
    onChoice: PropTypes.func.isRequired,
    /* onButtonAClick: PropTypes.func.isRequired,
    onButtonBClick: PropTypes.func.isRequired, */
    question: PropTypes.string.isRequired,
    buttonA: PropTypes.string.isRequired,
    buttonB: PropTypes.string.isRequired,
    buttonC: PropTypes.string.isRequired,
    buttonAValue: PropTypes.string.isRequired,
    buttonCValue: PropTypes.string.isRequired,
};
