import React, { useState } from "react";
import translations from "../assets/translations.json";

export const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;


export function AppProvider(props) {
  const [state, setState] = useState(props.value);
  const [locale, setLocale] = useState("en");
  const [user, setUser] = useState(null);

  const value = {
    locale: locale,
    state: state,
    user: user,
    setState: setState,
    setId: (id) => setState((state) => ({ ...state, id: id })),
    setLocale: (locale) => setLocale(locale),
    translate: (key) => {
      const translationKey = `${locale}.${key}`;
      const translationValue = translations[translationKey];

      if (translationValue === undefined) {
        return translationKey;
      } else {
        return translationValue;
      }
    },
    signIn: (name, email) => setUser ({name, email}),
    signOut: () => setUser(null),
    isSignedIn: user !== null,
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
}


//negdje pogreška
/* // import React, { useState } from "react";
//import React, { useState } from "react";
import React, { useState } from "react";

export const AppContext = React.createContext();
//export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;

const translations = {
  "en.currrentLocale": "Current locale",
  "hr.currrentLocale": "Trenutni jezik",
  //"de.currrentLocale": "",
  "en.View Repository": "View Repository",
  "hr.View Repository": "Vidi repozitorij",
};

export function AppProvider(props) {
  const [state, setState] = useState(props.value);
  const [locale, setLocale] = useState("en");

  const value = {
  locale: locale,
  state: state,
  setState: setState,
  setId: (id) => setState((state) => ({ ...state, id: id})),
  setLocale: (locale) => setLocale(locale),
  translate: (key) => {
    const translationKey = `${locale}.${key}`;
    const translationValue = translations[translationKey];

    if (translationValue === undefined) {
      return translationKey;
    } else {
      return translationValue;
    }
},
  };
  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
} */



/* const translations = {
  "en.currentLocale": "Current locale",
  "hr.currentLocale": "Trenutni jezik",
  "en.View Repository": "View Repository",
  "hr.View Repository": "Vidi Repozitorij",
};

export function AppProvider(props) {
  const [state, setState] = useState(props.value);
  const [locale, setLocale] = useState("en");

  const value = {
    locale: locale,
    state: state,
    setState: setState,
    setId: (id) => setState((state) => ({ ...state, id: id })),
    setLocale: (locale) => setLocale(locale),
    translate: (key) => {
      const translationKey = `${locale}.${key}`;
      const translationValue = translations[translationKey];

      if (translationValue === undefined) {
        return translationKey;
      } else {
        return translationValue;
      }
    },
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
} */