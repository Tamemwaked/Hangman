import React, { Component } from "react";
import Letter from "./Letter";
const Solution = (props) => {
  let letterStatus = props.letterStatus;

  let splitedWord = props.solution.word.split("");

  return (
    <div>
      {splitedWord.map((a) =>
        letterStatus[a] ? <Letter letter={a} /> : <Letter letter={"_"} />
      )}
      <br />
      <b>{props.solution.hint}</b>
    </div>
  );
};

export default Solution;
