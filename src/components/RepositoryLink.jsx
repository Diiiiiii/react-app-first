//Pretvaranje funkcije u klasu, u funkciji webpack preozna da postoji u funkciji jsx i automatski prebacuje react na vrh
//import "./RepositoryLink.css";

import React from "react";

//definiramo klasu, definiramo naziv komponente i obavzeno moramo naslijediti React.Componenet jer je to osnova svih komponenti -definira što sve komponenta može (metode, render)
export class RepositoryLink extends React.Component {
  constructor(props) {
    //metoda koja se nalazi na klasama, iznad
    super();
    this.props = props;
    console.log(this.props);
  }

  render() {
    let translation = this.props.children;

    if (this.props.translate) {
      translation = this.props.translate(this.props.children);
    }
    return (
      <a
            className="RepositoryLink"
            href="https://github.com/Diiiiiii/react-app-first">
              {translation}
             {/* GitHub Repository Link  */}
          </a>
    );
  }
}

/* export function RepositoryLink_() {
    return (
      <a
            className="RepositoryLink"
            href="https://github.com/Diiiiiii/react-app-first">
            GitHub Repository Link
          </a>
    );
  } */