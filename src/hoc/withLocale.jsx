import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";


export function withLocale(Component) {
   // return (props) => <Component>{props.children}</Component>;
  // return (props) => <Component {...props} />;
  return (props) => {
      const appState = useContext(AppContext);
      return (
          <Component 
            {...props}
            locale={appState.locale}
            setLocale={appState.setLocale}
            translate={appState.translate}
          />
      );
  };
}