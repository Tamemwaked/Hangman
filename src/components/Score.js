import React, { Component } from "react";

const Score = (props) => {
  let score = props.score;

  return (
    <div>
      {score >= 80 ? (
        <div className="high-score">Score : {score}</div>
      ) : score > 50 ? (
        <div className="medium-score">Score : {score}</div>
      ) : (
        <div className="low-score">Score : {score}</div>
      )}
    </div>
  );
};

export default Score;
