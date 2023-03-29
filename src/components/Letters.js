import React, { Component } from "react";
import Letter from "./Letter";

const Letters = (props) => {
  let letters = Object.keys(props.letterStatus);
  let letterStatus = props.letterStatus;
  return (
    <div>
      {letters.map((l) =>
        letterStatus[l] ? (
          <Letter
            className="cross"
            letterFromLetters={l}
            selectLetter={props.selectLetter}
            runIncreaseOrDecrease={props.runIncreaseOrDecrease}
          />
        ) : (
          <Letter
            className="false"
            letterFromLetters={l}
            selectLetter={props.selectLetter}
            runIncreaseOrDecrease={props.runIncreaseOrDecrease}
          />
        )
      )}
    </div>
  );
};

export default Letters;
