import React, { useState } from "react";
import StudyFlashcard from "./StudyFlashcard";

function StudyDetails({ selectedSetId, studySets }) {
  const [index, setIndex] = useState(1);

  const selectedStudySet = studySets.find((set) => set.id === selectedSetId);

  if (!selectedStudySet.flashcards.length) {
    return (
      <div>
        No flashcards exist for this study set. Return and click "edit" to add
        flashcards.
      </div>
    );
  }

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
    <div class="content m-6">
      <h1>{title}</h1>
      <div class="mb-6">
        Displaying card {index}/{flashcards.length}
      </div>
      <StudyFlashcard activeFlashcard={activeFlashcard} />
      <div class="buttons">
        <button class="button is-info" onClick={handlePrevious}>
          Previous
        </button>
        <button class="button is-info" onClick={handleNext}>
          Next
        </button>
        <button class="button is-info" onClick={handleRandom}>
          Random
        </button>
      </div>
    </div>
  );
}

export default StudyDetails;
