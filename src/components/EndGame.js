import React from "react";

export default function EndGame(props) {
  return (
    <div>
      {props.trackWord() === "win" ? (
        <div className="win">CONGATULATION</div>
      ) : props.trackWord() === "lose" ? (
        <div className="lose">Game Over</div>
      ) : null}
    </div>
  );
}
