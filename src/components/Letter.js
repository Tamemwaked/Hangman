import React, { Component } from "react";

const Letter = (props) => {
  return (
    <span className="container">
      <b>{props.letter} </b>
      <span
        onClick={() => {
          props.selectLetter(props.letterFromLetters);
          props.runIncreaseOrDecrease(props.letterFromLetters);
        }}
        className={props.className}
      >
        {props.letterFromLetters}
      </span>
    </span>
  );
};

export default Letter;
