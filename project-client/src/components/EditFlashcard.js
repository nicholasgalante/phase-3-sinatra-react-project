import React, { useState } from "react";

function EditFlashcard({
  card,
  studySets,
  onUpdateFlashcard,
  onDeleteFlashcard,
}) {
  const [formData, setFormData] = useState(card);
  const [isEditing, setIsEditing] = useState(false);
  const { title, content, id } = card;

  // const selectedStudySet = studySets.find((set) => set.id === selectedSetId);
  console.log("FORMDATA", formData);
  console.log("CARD", card);
  console.log("TITLE", title);
  console.log("CONTENT", content);

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
    fetch(`http://localhost:9292/flashcards/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((updatedFlashcard) => onUpdateFlashcard(updatedFlashcard));
    setIsEditing(false);
  }

  return (
    <div>
      {isEditing ? (
        <div class="card mb-6">
          <form onSubmit={handleSubmit}>
            <header class="card-header">
              <textarea
                name="title"
                type="textarea"
                onChange={(e) => handleChange(e)}
                value={formData.title}
              ></textarea>
            </header>
            <div class="card-content">
            <textarea
              name="content"
              type="textarea"
              value={formData.content}
              onChange={(e) => handleChange(e)}
            ></textarea>
            </div>
            <footer class="card-footer">
              <button class="card-footer-item" type="submit">
                Save Changes
              </button>
            </footer>
          </form>
        </div>
      ) : (
        <div class="card mb-6">
          <header class="card-header">
            <p class="card-header-title">{title}</p>
          </header>
          <div class="card-content">
            <div class="content">{content}</div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item" onClick={handleEdit}>
              Edit
            </a>
            <a class="card-footer-item" onClick={handleDelete}>
              Delete
            </a>
          </footer>
        </div>
      )}
    </div>
  );
}

export default EditFlashcard;
