import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import EditDetails from "./EditDetails";
import StudyDetails from "./StudyDetails";
import StudySetList from "./StudySetList";

function App() {
  const [studySets, setStudySets] = useState([]);
  const [selectedSetId, setSelectedSetId] = useState({});

  useEffect(() => {
    fetch("http://localhost:9292/study_sets")
      .then((res) => res.json())
      .then((data) => setStudySets(data));
  }, []);

  function onSelectStudySet(id) {
    setSelectedSetId(id);
  }

  function onDeleteStudySet(id) {
    const updatedStudySets = studySets.filter((studySet) => studySet.id !== id);
    setStudySets(updatedStudySets);
  }

  function onDeleteFlashcard(id) {
    console.log("BEFORE", studySets);
    setStudySets((prevStudySets) => {
      const updatedSets = prevStudySets.map((set) => {
        if (set.flashcards.some((card) => card.id === id)) {
          const updatedFlashcards = set.flashcards.filter(
            (card) => card.id !== id
          );
          return { ...set, flashcards: updatedFlashcards };
        }
        return set;
      });
      return updatedSets;
    });
  }

  function onAddFlashcard(newFlashcard, setId) {
    setStudySets((prevStudySets) => {
      const updatedSet = prevStudySets.find((set) => set.id == setId);
      const updatedFlashcards = [...updatedSet.flashcards, newFlashcard];
      const updatedSets = prevStudySets.map((set) =>
        set.id == setId ? { ...set, flashcards: updatedFlashcards } : set
      );
      return updatedSets;
    });
  }

  function onAddStudySet(newStudySet){
    setStudySets((prevStudySets) => {
      return [...prevStudySets, newStudySet]
    })
  }

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/study_sets"
            element={
              <StudySetList
                studySets={studySets}
                onSelectStudySet={onSelectStudySet}
                onAddStudySet={onAddStudySet}
              />
            }
          />
          <Route
            path="/study_sets/edit/:setId"
            element={
              <EditDetails
                onDeleteStudySet={onDeleteStudySet}
                onDeleteFlashcard={onDeleteFlashcard}
                studySets={studySets}
                onAddFlashcard={onAddFlashcard}
                selectedSetId={selectedSetId}
              />
            }
          />
          <Route path="/study_sets/study/:setId" element={<StudyDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
