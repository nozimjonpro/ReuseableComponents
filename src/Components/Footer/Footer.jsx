import React from "react";
import "../Header/header.scss";
import Button from "../Button/Button";

function Footer() {
  return (
    <div className="buttons">
        <span className="buttons__span">5 items left</span>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
    </div>
  );
}

export default Footer;
