import React, { useState } from "react";
import StudyFlashcard from "./StudyFlashcard";

function StudyDetails({ selectedSetId, studySets }) {
  const [index, setIndex] = useState(1);

  const selectedStudySet = studySets.find((set) => set.id === selectedSetId);

  if (selectedStudySet.flashcards.length < 1) {
    return (
      <div>
        No flashcards exist for this study set! Return and click "edit" to add
        flashcards.
      </div>
    );
  }

  console.log(selectedStudySet);

  const { flashcards, title } = selectedStudySet;

  function handleNext() {
    setIndex((prevIndex) => {
      return prevIndex < flashcards.length ? prevIndex + 1 : 1;
    });
  }

  function handlePrevious() {
    setIndex((prevIndex) => {
      return prevIndex == 1 ? flashcards.length : prevIndex - 1;
    });
  }

  function handleRandom() {
    const randomIndex = Math.floor(Math.random() * flashcards.length) + 1;
    setIndex(randomIndex);
  }

  const activeFlashcard = flashcards[index - 1];

  return (
    <div>
      <div>{title}</div>
      <div>
        Displaying card {index}/{flashcards.length}
      </div>
      <StudyFlashcard activeFlashcard={activeFlashcard} />

      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <button onClick={handleRandom}>Random</button>
    </div>
  );
}

export default StudyDetails;
