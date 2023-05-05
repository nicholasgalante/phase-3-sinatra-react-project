import { useState } from "react";

function StudyFlashcard({ activeFlashcard }) {
  const [flip, setFlip] = useState(true);

  function handleFlip() {
    setFlip(!flip);
  }

  return (
    <div class="card mb-6" onClick={handleFlip}>
      {flip ? (
        <div class="card-content">{activeFlashcard.title} </div>
      ) : (
        <div class="card-content"> {activeFlashcard.content} </div>
      )}
    </div>
  );
}

export default StudyFlashcard;
