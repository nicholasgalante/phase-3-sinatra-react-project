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

  function onAddStudySet(newStudySet) {
    setStudySets((prevStudySets) => {
      return [...prevStudySets, newStudySet];
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

  function onUpdateFlashcard(updatedFlashcard) {
    setStudySets((prevStudySets) => {
      const updatedStudySets = [...prevStudySets];
      // Find the study set
      const updatedStudySetIndex = updatedStudySets.findIndex(studySet => studySet.id === updatedFlashcard.study_set_id);
      const updatedStudySet = updatedStudySets[updatedStudySetIndex];
      // Find the flashcard
      const updatedFlashcardIndex = updatedStudySet.flashcards.findIndex(flashcard => flashcard.id === updatedFlashcard.id);
      // Update/replace flashcard with updatedFlashcard
      updatedStudySet.flashcards[updatedFlashcardIndex] = updatedFlashcard;
      // Update/replace study set with updatedStudySet
      updatedStudySets[updatedStudySetIndex] = updatedStudySet;
      // Return updated study sets
      return updatedStudySets;
    })
  }  

  function onDeleteStudySet(id) {
    const updatedStudySets = studySets.filter((studySet) => studySet.id !== id);
    setStudySets(updatedStudySets);
  }

  function onDeleteFlashcard(id) {
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
                onUpdateFlashcard={onUpdateFlashcard}
                onAddFlashcard={onAddFlashcard}
                selectedSetId={selectedSetId}
              />
            }
          />
          <Route
            path="/study_sets/study/:setId"
            element={
              <StudyDetails
                selectedSetId={selectedSetId}
                studySets={studySets}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
