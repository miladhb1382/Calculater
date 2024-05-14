import React from "react";
import "./button.css";

const Button = (props) => {
  const { btnType } = props;
  const classes = ["button"];

  switch (btnType) {
    case "Number":
      classes.push("Number");
      break;
    case "Action":
      classes.push("Action");
      break;
    default:
      break;
  }

  return (
    <button className={classes.join(" ")} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default Button;
