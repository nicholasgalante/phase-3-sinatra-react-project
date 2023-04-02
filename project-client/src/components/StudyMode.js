import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function StudyMode({ studySets }) {
  const [activeStudySet, setActiveStudySet] = useState({});
  const [index, setIndex] = useState(1);

  const { setId } = useParams();

  useEffect(() => {
    setActiveStudySet(studySets.find((set) => set.id == setId));
  }, [studySets]);

  console.log("ACTIVE STUDY SET", activeStudySet);

  if (!activeStudySet) {
    return "loading!";
  } //is this good practice?

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
      Displaying card {index}
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <button onClick={handleRandom}>Random</button>
    </>
  );
}

export default StudyMode;
