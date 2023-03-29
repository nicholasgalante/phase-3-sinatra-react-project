import React from "react";

function Flashcard({ card, onDeleteFlashcard }) {
  const { title, content, id } = card;

  function handleDelete(){
      fetch(`http://localhost:9292/flashcards/${id}`, {
        method: "DELETE",
      });
      onDeleteFlashcard(id)
  }

  return (
    <>
      {title}
      {content}
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

export default Flashcard;
