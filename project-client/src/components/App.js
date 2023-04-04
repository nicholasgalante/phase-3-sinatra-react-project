import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import EditMode from "./EditMode";
import StudyMode from "./StudyMode";
import StudySetCard from "./StudySetCard";

function App() {
  const [studySets, setStudySets] = useState([]);
  const [activeStudySet, setActiveStudySet] = useState({});
  
  useEffect(() => {
    fetch("http://localhost:9292/study_sets")
      .then((res) => res.json())
      .then((data) => setStudySets(data));
  }, []);

  function handleDeleteStudySet(id) {
    const updatedStudySets = studySets.filter((studySet) => studySet.id !== id);
    setStudySets(updatedStudySets);
  }

  function onActivateStudySet(id){
    const activatedSet = studySets.find(set => set.id == id)
    setActiveStudySet(activatedSet)
  }

  const displayStudySets = studySets.map((set) => {
    return (
      <div key={set.id}>
        <StudySetCard set={set} onActivateStudySet={onActivateStudySet}/>
      </div>
    );
  });

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/study_sets" element={displayStudySets} />
          <Route
            path="/study_sets/edit/:setId"
            element={<EditMode onDeleteStudySet={handleDeleteStudySet} activeStudySet={activeStudySet}/>}
          />
          <Route
            path="/study_sets/study/:setId"
            element={<StudyMode />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
