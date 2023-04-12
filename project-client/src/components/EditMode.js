import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditFlashcard from "./EditFlashcard";

function EditMode({
  studySets,
  onDeleteStudySet,
  onAddFlashcard,
  onDeleteFlashcard,
  selectedSetId,
}) {
  const [formData, setFormData] = useState({});

  const selectedStudySet = studySets.find((set) => set.id === selectedSetId);

  const navigate = useNavigate();

  if (!selectedStudySet) {
    return <div>No study set selected</div>;
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      study_set_id: selectedSetId,
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
      .then((newFlashcard) => onAddFlashcard(newFlashcard, selectedSetId))
      .catch((error) => console.error("Error occurred during fetch:", error));
    e.target.reset();
  }

  function handleDeleteStudySet() {
    fetch(`http://localhost:9292/study_sets/${selectedSetId}`, {
      method: "DELETE",
    });
    onDeleteStudySet(selectedSetId);
    navigate("/study_sets");
  }

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
      {selectedStudySet.title}
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
