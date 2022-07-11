import React from "react";
import "./card.css";

function Card({ img, name, species, onClick = null, type }) {
  //  const image = props.img;
  //  const name = props.name;
  //  const species = props.species;

  if (img !== undefined) {
    return (
      <div className="card character" onClick={onClick}>
        <div>
          <img src={img} />
          <h4>Name : {name}</h4>
        </div>
        <h3>Species : {species}</h3>
      </div>
    );
  } else {
    return (
      <div className="card location" onClick={onClick}>
        <h4>Name : {name}</h4>
        <h3>type : {type}</h3>
      </div>
    );
  }
}

export default Card;
