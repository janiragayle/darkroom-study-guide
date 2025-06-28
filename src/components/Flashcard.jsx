import React from "react";
import { useState } from "react";

function Flashcard({ term, definition }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="flashcard" onClick={handleFlip}>
        {isFlipped ? (<p>{definition}</p>) :(<h2>{term}</h2>)}
    </div>
  );
}

export default Flashcard;
