import React, { useState } from "react";

function EditFlashcard({ card, studySets, onDeleteFlashcard }) {
  const [formData, setFormData] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const { title, content, id } = card;

  // const selectedStudySet = studySets.find((set) => set.id === selectedSetId);

  function handleEdit(e) {
    setIsEditing(true);
  }

  function handleDelete() {
    fetch(`http://localhost:9292/flashcards/${id}`, {
      method: "DELETE",
    });
    onDeleteFlashcard(id);
  }

  function handleChange() {}

  function handleSubmit() {
    
  }

  return (
    <div>
      {isEditing ? (
        <div>
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
            <button type="submit">Save Changes</button>
          </form>
        </div>
      ) : (
        <div>
          {title}
          {content}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default EditFlashcard;
