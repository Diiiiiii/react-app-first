export function ABQuestion(props) {
    return (
        <div>
          <p>Make the right choice:</p>
          <button onClick={props.onButtonAClick}>Blue pill</button>
          <button onClick={props.onButtonBClick}>Red pill</button>
        </div>
    );
}