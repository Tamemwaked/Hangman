import logo from "./logo.svg";
import "./App.css";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import Score from "./components/Score";
import { useState } from "react";
import EndGame from "./components/EndGame";

function App() {
  const [letterStatus, setLetterStatus] = useState({
    letterStatus: generateLetterStatuses(),
  });

  const [solution, setSolution] = useState({
    word: "MESSI",
    hint: "the goat",
  });

  const [score, setscore] = useState(20);

  function generateLetterStatuses() {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }
  function selectLetter(letter) {
    let newletterStatus = { ...letterStatus.letterStatus };
    newletterStatus[letter] = true;
    setLetterStatus({ letterStatus: newletterStatus });
  }
  function runIncreaseOrDecrease(letter) {
    if (solution.word.includes(letter)) {
      increaseScore();
    } else {
      decreaseScore();
    }
  }
  function increaseScore() {
    setscore(score + 5);
  }
  function decreaseScore() {
    setscore(score - 20);
  }
  function trackWord() {
    const splitedWord = solution.word.split("");
    const allLetters = letterStatus.letterStatus;

    let i = 0;
    splitedWord.forEach((a) => {
      allLetters[a] ? i++ : (i = 0);
    });
    if (splitedWord.length === i) {
      return "win";
    } else if (score < 0) {
      return "lose";
    }
  }

  return (
    <div className="App">
      <Score score={score} />
      <Solution letterStatus={letterStatus.letterStatus} solution={solution} />
      <Letters
        letterStatus={letterStatus.letterStatus}
        selectLetter={selectLetter}
        runIncreaseOrDecrease={runIncreaseOrDecrease}
      />

      <EndGame trackWord={trackWord} />
    </div>
  );
}

export default App;
