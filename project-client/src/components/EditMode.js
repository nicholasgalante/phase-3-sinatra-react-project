import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditFlashcard from "./EditFlashcard";

function EditMode({ onDeleteStudySet, selectedStudySet, onAddFlashcard, onDeleteFlashcard }) {
  //   const [activeStudySet, setActiveStudySet] = useState({});
  const [formData, setFormData] = useState({});

  const { title } = selectedStudySet;
  const { setId } = useParams();

  //is this good practice? Storage of study sets is not all stored in App state
  //   useEffect(() => {
  //     fetch(`http://localhost:9292/study_sets/${setId}`)
  //       .then((res) => res.json())
  //       .then((data) => setActiveStudySet(data));
  //   }, [setId]);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      study_set_id: setId,
    });
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
      .then((newFlashcard) => onAddFlashcard(newFlashcard, setId))
      .catch((error) => console.error("Error occurred during fetch:", error));
    e.target.reset();
  }

  function handleDeleteStudySet() {
    fetch(`http://localhost:9292/study_sets/${setId}`, {
      method: "DELETE",
    });
    onDeleteStudySet(setId);
  }

  //   function onAddFlashcard(newFlashcard) {
  //     setActiveStudySet((prevStudySet) => {
  //       return {
  //         ...prevStudySet,
  //         flashcards: [...prevStudySet.flashcards, newFlashcard],
  //       };
  //     });
  //   }

//   function onDeleteFlashcard(id) {
//    console.log('clicked!')
    //  setActiveStudySet((prevStudySet) => {
    //    const newFlashcards = prevStudySet.flashcards.filter(
    //      (flashcard) => flashcard.id !== id
    //    );
    //    return { ...prevStudySet, flashcards: newFlashcards };
    //  });
//   }

  function displayFlashCards() {
    if (selectedStudySet.flashcards) {
      return selectedStudySet.flashcards.map((card) => {
        return (
          <div key={card.id}>
            <EditFlashcard card={card} onDeleteFlashcard={onDeleteFlashcard} />
          </div>
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
          onChange={(e) => handleChange(e)}
          placeholder="Title"
        ></input>
        <input
          name="content"
          type="text"
          placeholder="Content"
          onChange={(e) => handleChange(e)}
        ></input>
        <button type="submit">Add New Flashcard</button>
      </form>

      {displayFlashCards()}

      <button onClick={handleDeleteStudySet}>Delete Study Set</button>
    </>
  );
}

export default EditMode;
