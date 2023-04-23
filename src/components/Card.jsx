import React from "react";
import Styles2 from "./card.module.css";

const Card = props => {
  return (
    <div className={Styles2.btn}>
      <button
        style={{
          color: "red",
          backgroundColor: "black",
          padding: "20px",
          borderRadius: "10px ",
          width: "120px",
        }}
      >
        {props.text.name}
        {props.text.title}
      </button>
    </div>
  );
};

export default Card;

//~ use inside homemiddle example
//  <Card text={{ name: "Vivek", title: "choubey" }} />;