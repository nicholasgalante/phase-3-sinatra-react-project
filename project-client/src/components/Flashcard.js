import React from "react";

function Flashcard({ card }) {
  const { title, content } = card;
  return (
    <>
      {title}
      {content}
    </>
  );
}

export default Flashcard;
