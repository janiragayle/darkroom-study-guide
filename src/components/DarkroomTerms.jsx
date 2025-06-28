import React from "react";
import { useState } from "react";
import Flashcard from "./Flashcard";

function DarkroomTerms() {
  const terms = [
    {
      term: "Burning",
      definition:
        "A technique used to darken specific areas of a print by exposing them to more light during the printing process.",
    },
    {
      term: "Dodging",
      definition:
        "A technique used to lighten specific areas of a print by blocking light during the printing process.",
    },
    {
      term: "Developer",
      definition:
        "A chemical solution used to develop exposed photographic film or paper.",
    },
    {
      term: "Fixer",
      definition:
        "A chemical solution used to stop the development process and make the image permanent.",
    },
    {
      term: "Stop Bath",
      definition:
        "A solution used to halt the development process after the film or paper has been in the developer.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % terms.length);
    setGuess("");
    setIsCorrect(null);
  };
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + terms.length) % terms.length
    );
    setGuess("");
    setIsCorrect(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.toLowerCase() === terms[currentIndex].term.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="flashcard-container">
      <Flashcard
        term={terms[currentIndex].term}
        definition={terms[currentIndex].definition}
      />
      <form
        className={`flashcard-form ${
          isCorrect === null ? "" : isCorrect ? "correct" : "incorrect"
        }`}
        onSubmit={handleSubmit}
      >
        <label htmlFor="guess"> Guess here!</label>
        <input
          type="text"
          id="guess"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          style={{
            width: "100%",
            padding: "5px",
            fontSize: "16px",
          }}
        />
        <button type="submit" style={{ margin: "10px" }}>
          Submit
        </button>
      </form>
      <div className="arrows">
        <button
          onClick={handlePrev}
          disabled={currentIndex == 0}
          style={{ color: currentIndex == 0 ? "gray" : "black" }}
        >
          {" "}
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex == terms.length - 1}
          style={{ color: currentIndex == terms.length - 1 ? "gray" : "black" }}
        >
          Next
        </button>
      </div>
      <p>
        {currentIndex + 1} of {terms.length}
      </p>
    </div>
  );
}

export default DarkroomTerms;
