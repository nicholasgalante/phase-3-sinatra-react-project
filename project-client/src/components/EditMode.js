import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Flashcard from "./Flashcard";

function EditMode() {
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
    const date = new Date().toJSON();
    setFormData({
      ...activeStudySet,
      updated_at: date,
      // activeStudySet[flashcards]
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  console.log(activeStudySet.flashcards);

  function displayFlashCards() {
    if (activeStudySet.flashcards) {
      activeStudySet.flashcards.map((card) => {
        return <Flashcard card={card} key={card.id}/>
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
        ></input>
        <input
          name="content"
          type="text"
          onChange={(e) => onEditField(e)}
        ></input>
        <button type="submit">Add New Flashcard</button>
      </form>

      {displayFlashCards()}
    </>
  );
}

export default EditMode;
