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

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("FORMDATA:", formData)
    console.log(JSON.stringify(formData))
    console.log(id)
    fetch(`http://localhost:9292/flashcards/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((updatedFlashcard) => console.log(updatedFlashcard));
    setIsEditing(false);
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
