import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StudyFlashcard from "./StudyFlashcard";

function StudyMode() {
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

  console.log("ACTIVE STUDY SET", activeStudySet);

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

  return (
    <>
      You are now in study mode!
      {title}
      Displaying card {index}/{flashcards.length}
      <StudyFlashcard flashcards={flashcards}/>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <button onClick={handleRandom}>Random</button>
    </>
  );
}

export default StudyMode;
