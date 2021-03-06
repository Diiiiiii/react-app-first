import PropTypes from 'prop-types';
import "./ABQuestion.css";

/* button.addEventListener('click', props.onButtonAClick);
button.addEventListener('click', () => {
    props.onChoice(props.buttonAValue);
}) */

export function ABQuestion(props) {
     const handleOnClickA = () => props.onChoice(props.id, props.buttonAValue);
     const handleOnClickB = () => props.onChoice(props.id, props.buttonBValue);
    
    
    return (
        <div className="ABQuestion">
          <p className="ABQestion__text">{props.question}</p>
          <div className="ABQuestion__answers">
          {/* <button onClick={props.onButtonAClick}>{props.buttonA}</button>
          <button onClick={props.onButtonBClick}>{props.buttonB}</button> */}
            
            {/*<button onClick = {handleOnClickA}>{props.buttonA}</button>  */}
            {/*<button onClick = {handleOnClickB}>{props.buttonB}</button>  */}
            
            
            {/*<button className="ABQuestion__answer" onClick = {() => props.onChoice(props.buttonAValue)}>
                {props.buttonA}
            </button>
            <button className="ABQuestion__answer" onClick = {() => props.onChoice(props.buttonBValue)}>
                {props.buttonB}
        </button>   */}

        <button className="ABQuestion__answer" onClick = {handleOnClickA}>
        {props.buttonA}
        </button>
        <button className="ABQuestion__answer" onClick = {handleOnClickB}>
        {props.buttonB}
        </button> 
          </div>
     </div>
    ); 
} 

ABQuestion.propTypes = {
    id: PropTypes.string.isRequired,
    onChoice: PropTypes.func.isRequired,
    /* onButtonAClick: PropTypes.func.isRequired,
    onButtonBClick: PropTypes.func.isRequired, */
    question: PropTypes.string.isRequired,
    buttonA: PropTypes.string.isRequired,
    buttonB: PropTypes.string.isRequired,
    buttonAValue: PropTypes.string.isRequired,
    buttonBValue: PropTypes.string.isRequired,
};
