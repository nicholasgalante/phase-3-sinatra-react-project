import React, { useState } from "react";

function EditFlashcard({ card, onDeleteFlashcard }) {
  const [flip, setFlip] = useState(true);
  const { title, content, id } = card;

  function handleEdit() {
    setFlip(!flip);
  }

  function handleDelete() {
    fetch(`http://localhost:9292/flashcards/${id}`, {
      method: "DELETE",
    });
    onDeleteFlashcard(id);
  }

  function onEditField() {}

  function handleSubmit() {}

  return (
    <div>
      {/* {flip ? flashcard info, edit button : form to edit flashcard, save button} */}

      {/* front */}
      {title}
      {content}
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>

      {/* back */} 
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          onChange={(e) => onEditField(e)}
          placeholder="Title"
        ></input>
        <input
          name="content"
          type="text"
          placeholder="Content"
          onChange={(e) => onEditField(e)}
        ></input>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditFlashcard;
