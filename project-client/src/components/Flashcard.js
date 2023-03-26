import React from "react";

function Flashcard({ card }) {
  const { title, content } = card;
  return (
    <>
      {title}
      {content}
      <button>Edit</button>
      <button>Delete</button>
    </>
  );
}

export default Flashcard;
