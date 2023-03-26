import React from "react";

function Flashcard({ card }) {
  const { title, content, id } = card;

  function handleDelete(){
      fetch(`http://localhost:9292/flashcards/${id}`, {
        method: "DELETE",
      });
  }

  return (
    <>
      {title}
      {content}
      <button>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

export default Flashcard;
