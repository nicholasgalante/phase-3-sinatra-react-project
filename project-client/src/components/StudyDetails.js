import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StudyFlashcard from "./StudyFlashcard";

function StudyDetails() {
  const [activeStudySet, setActiveStudySet] = useState({
    id: null,
    title: null,
    content: null,
    flashcards: [{ title: null, content: null }],
  });
  const [index, setIndex] = useState(1);

  const { setId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/study_sets/${setId}`)
      .then((res) => res.json())
      .then((data) => setActiveStudySet(data));
  }, []);

  const { flashcards, title, content } = activeStudySet;

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
