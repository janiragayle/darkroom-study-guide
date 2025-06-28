import React from "react";
import { useState } from "react";

function Flashcard({ term, definition }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="flashcard" onClick={handleFlip}>
        {isFlipped ? (<h2>{term}</h2>)  : (<p>{definition}</p>)}
    </div>
  );
}

export default Flashcard;
