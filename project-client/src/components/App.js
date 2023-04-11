import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import EditMode from "./EditMode";
import StudyMode from "./StudyMode";
import StudySetCard from "./StudySetCard";

function App() {
  const [studySets, setStudySets] = useState([]);
  const [selectedStudySet, setSelectedStudySet] = useState({});

  useEffect(() => {
    fetch("http://localhost:9292/study_sets")
      .then((res) => res.json())
      .then((data) => setStudySets(data));
  }, []);

  function onDeleteStudySet(id) {
    const updatedStudySets = studySets.filter((studySet) => studySet.id !== id);
    setStudySets(updatedStudySets);
  }

  function onDeleteFlashcard(id) {
    console.log("BEFORE", studySets)
    setStudySets(prevStudySets => {
      const updatedSets = prevStudySets.map(set => {
        if (set.flashcards.some(card => card.id === id)) {
          const updatedFlashcards = set.flashcards.filter(card => card.id !== id);
          return { ...set, flashcards: updatedFlashcards };
        }
        return set;
      });
      return updatedSets;
    });
  }

  console.log("AFTER", studySets)

  function onSelectStudySet(id) {
    const set = studySets.find((set) => set.id == id);
    setSelectedStudySet(set);
  }

  function onAddFlashcard(newFlashcard, setId) { 
    setStudySets(prevStudySets => {
      const updatedSet = prevStudySets.find((set) => set.id == setId);
      const updatedFlashcards = [...updatedSet.flashcards, newFlashcard];
      const updatedSets = prevStudySets.map((set) =>
        set.id == setId ? { ...set, flashcards: updatedFlashcards } : set
      );
      return updatedSets;
    });
  }

  const displayStudySets = studySets.map((set) => {
    return (
      <div key={set.id}>
        <StudySetCard set={set} onSelectStudySet={onSelectStudySet} />
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
            element={
              <EditMode
                onDeleteStudySet={onDeleteStudySet}
                onDeleteFlashcard={onDeleteFlashcard}
                selectedStudySet={selectedStudySet}
                onAddFlashcard={onAddFlashcard}
              />
            }
          />
          <Route path="/study_sets/study/:setId" element={<StudyMode />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
