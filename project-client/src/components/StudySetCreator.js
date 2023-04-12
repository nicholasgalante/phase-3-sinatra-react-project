import React, { useState } from "react";

function StudySetCreator({ onAddStudySet }) {
  const [formData, setFormData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/study_sets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newStudySet) => onAddStudySet(newStudySet))
      .catch((error) => console.error("Error occurred during fetch:", error));
    e.target.reset();
  }

  function handleChange(e) {
    setFormData({ title: e.target.value });
  }

  return (
    <>
      Create a New Study Set
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          onChange={(e) => handleChange(e)}
          placeholder="Title"
        ></input>
        <button type="submit">Create New Study Set</button>
      </form>
    </>
  );
}

export default StudySetCreator;
