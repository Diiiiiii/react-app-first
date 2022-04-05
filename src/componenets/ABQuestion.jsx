import PropTypes from 'prop-types';

/* button.addEventListener('click', props.onButtonAClick);
button.addEventListener('click', () => {
    props.onChoice(props.buttonAValue);
}) */

export function ABQuestion(props) {
    // const handleOnClickA = () => props.onChoice(props.buttonAValue);
    // const handleOnClickB = () => props.onChoice(props.buttonBValue);
    
    
    return (
        <div>
          <p>{props.question}</p>
          <div>
          {/* <button onClick={props.onButtonAClick}>{props.buttonA}</button>
          <button onClick={props.onButtonBClick}>{props.buttonB}</button> */}
            
            {/*<button onClick = {handleOnClickA}>{props.buttonA}</button>  */}
            {/*<button onClick = {handleOnClickB}>{props.buttonB}</button>  */}
            
            
            <button onClick = {() => props.onChoice(props.buttonAValue)}>
                {props.buttonA}
            </button>
            <button onClick = {() => props.onChoice(props.buttonBValue)}>
                {props.buttonB}
            </button>
          </div>
     </div>
    ); 
} 

ABQuestion.propTypes = {
    onChoice: PropTypes.func.isRequired,
    /* onButtonAClick: PropTypes.func.isRequired,
    onButtonBClick: PropTypes.func.isRequired, */
    question: PropTypes.string.isRequired,
    buttonA: PropTypes.string.isRequired,
    buttonB: PropTypes.string.isRequired,
    buttonAValue: PropTypes.string.isRequired,
    buttonBValue: PropTypes.string.isRequired,
};