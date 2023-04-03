import { useState } from "react";

function StudyFlashcard({ activeFlashcard }) {
  const [flip, setFlip] = useState(true);

  function handleFlip() {
    setFlip(!flip);
  }

  return (
    <div onClick={handleFlip}>
      {flip ? activeFlashcard.title : activeFlashcard.content}
    </div>
  );
}

export default StudyFlashcard;
