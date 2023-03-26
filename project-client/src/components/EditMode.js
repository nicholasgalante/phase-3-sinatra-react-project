import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Flashcard from "./Flashcard";

function EditMode({ onDeleteStudySet }) {
  const [activeStudySet, setActiveStudySet] = useState({});
  const [formData, setFormData] = useState({});

  const { title } = activeStudySet;
  const { setId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/study_sets/${setId}`)
      .then((res) => res.json())
      .then((data) => setActiveStudySet(data));
  }, [setId]);

  function onEditField(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      study_set_id: setId,
    });
    console.log(JSON.stringify(formData));
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/flashcards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newFlashcard) => onAddFlashcard(newFlashcard))
      .catch((error) => console.error("Error occurred during fetch:", error));
   e.target.reset();
  }

  function handleDeleteStudySet() {
    fetch(`http://localhost:9292/study_sets/${setId}`, {
      method: "DELETE",
    });
    onDeleteStudySet(setId);
  }

  function onAddFlashcard(newFlashcard) {
    setActiveStudySet((prevStudySet) => {
      return {
        ...prevStudySet,
        flashcards: [...prevStudySet.flashcards, newFlashcard],
      };
    });
  }

  function onDeleteFlashcard(id) {
    setActiveStudySet((prevStudySet) => {
      const newFlashcards = prevStudySet.flashcards.filter(
        (flashcard) => flashcard.id !== id
      );
      return { ...prevStudySet, flashcards: newFlashcards };
    });
  }

  function displayFlashCards() {
    if (activeStudySet.flashcards) {
      return activeStudySet.flashcards.map((card) => {
        return (
          <Flashcard
            card={card}
            key={card.id}
            onDeleteFlashcard={onDeleteFlashcard}
          />
        );
      });
    }
  }

  return (
    <>
      {title}
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          onChange={(e) => onEditField(e)}
          placeholder="Title"
        ></input>
        <input
          name="content"
          type="text"
          placeholder="Content"
          onChange={(e) => onEditField(e)}
        ></input>
        <button type="submit">Add New Flashcard</button>
      </form>

      {displayFlashCards()}

      <button onClick={handleDeleteStudySet}>Delete Study Set</button>
    </>
  );
}

export default EditMode;
