import PropTypes from 'prop-types';

export function ABQuestion(props) {
    return (
        <div>
          <p>Make the right choice:</p>
          <button onClick={props.onButtonAClick}>Blue pill</button>
          <button onClick={props.onButtonBClick}>Red pill</button>
        </div>
    );  
} 

ABQuestion.propTypes = {
    onButtonAClick: PropTypes.func.isRequired,
    onButtonBClick: PropTypes.func.isRequired,
};