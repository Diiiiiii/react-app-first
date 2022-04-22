import "../styles/Heading.css";
import React from "react";

export function Heading(props) {
  const className = `h${props.size}`;

return React.createElement(props.element, { className: className }, props.children);
//return <h1 className={className}>{props.children}</h1>;
}