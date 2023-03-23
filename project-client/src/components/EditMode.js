import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditMode() {
  const [activeStudySet, setActiveStudySet] = useState({});
  const [formData, setFormData] = useState({});

  const { title } = activeStudySet;
  const { setId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/study_sets/${setId}`)
      .then((res) => res.json())
      .then((data) => setActiveStudySet(data));
  }, [setId]);
  
  function onEditField(e){
   const date = new Date().toJSON();
   setFormData({
      ...activeStudySet,
      [e.target.name] : e.target.value,
      updated_at : date,
   })
  }
  
  function handleSubmit(e){
   e.preventDefault();
   console.log(formData)
  }

  return (
    <>
      {title}

      <form onSubmit={handleSubmit}>
        <input name="title" type="text" onChange={(e) => onEditField(e)}></input>
        <input name="content" type="text" onChange={(e) => onEditField(e)}></input>
        <button type="submit">Add New Flashcard</button>
      </form>
    </>
  );
}

export default EditMode;
