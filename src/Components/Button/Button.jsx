import React from "react";
import "../Header/header.scss";

function Button({ children }) {
  return <button className="btn">{children}</button>;
}

export default Button;
