import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return <div className={[classes["card-layout"]]}>{props.children}</div>;
};

export default Card;
