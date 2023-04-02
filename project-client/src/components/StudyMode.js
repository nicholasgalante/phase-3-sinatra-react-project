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

  if (!activeStudySet) {
    return "loading!";
  } //is this good practice?

  return (
    <>
      You are now in study mode!
      {activeStudySet.title}
      Displaying card #{index}
      <button>Previous</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
}

export default StudyMode;
