import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function StudyMode({ studySets }) {
  const [activeStudySet, setActiveStudySet] = useState({});
  const [index, setIndex] = useState(0);

  const { setId } = useParams();

  useEffect(() => {
    setActiveStudySet(studySets.find((set) => set.id == setId));
  }, [studySets]);

  console.log("ACTIVE STUDY SET", activeStudySet);

  function handleNext() {
    setIndex((prevIndex) => prevIndex + 1);
  }

  function handlePrevious(){
   setIndex((prevIndex) => prevIndex - 1);
  }

  function handleRandom(){
   const randomIndex = Math.floor(Math.random() * activeStudySet.flashcards.length);
   setIndex(randomIndex)
  }

  if (!activeStudySet) {
    return "loading!";
  } //is this good practice?

  return (
    <>
      You are now in study mode!
      {activeStudySet.title}
      Displaying card #{index}
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <button onClick={handleRandom}>Random</button>
    </>
  );
}

export default StudyMode;
