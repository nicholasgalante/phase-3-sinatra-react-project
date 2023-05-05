import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditFlashcard from "./EditFlashcard";

function EditDetails({
  studySets,
  onDeleteStudySet,
  onAddFlashcard,
  onUpdateFlashcard,
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
            <EditFlashcard
              studySets={studySets}
              card={card}
              onUpdateFlashcard={onUpdateFlashcard}
              onDeleteFlashcard={onDeleteFlashcard}
            />
          </div>
        );
      });
    }
  }

  return (
    <>
      <div class="content m-6">
        <h1>{selectedStudySet.title}</h1>
        <form class="mb-6" onSubmit={handleSubmit}>
          <input
            class="input"
            name="title"
            type="text"
            onChange={(e) => handleChange(e)}
            placeholder="Title"
          ></input>
          <input
            class="input"
            name="content"
            type="text"
            placeholder="Content"
            onChange={(e) => handleChange(e)}
          ></input>
          <button class="button is-info" type="submit">
            Add New Flashcard
          </button>
        </form>

        {displayFlashCards()}

        <button
          class="button is-danger is-light"
          onClick={handleDeleteStudySet}
        >
          Delete Study Set
        </button>
      </div>
    </>
  );
}

export default EditDetails;
