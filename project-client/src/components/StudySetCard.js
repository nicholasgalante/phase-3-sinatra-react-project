import { Link, Route, Routes } from "react-router-dom";

function StudySetCard({ set, onActivateStudySet }) {
  const { title, id } = set;

   function handleActivateStudySet(){
      onActivateStudySet(id)
   }

  return (
    <>
      {title}
      <Link to={"edit/" + id}>
        <button onClick={handleActivateStudySet}>Edit</button>
      </Link>
      <Link to={"study/" + id}>
        <button>Study</button>
      </Link>
    </>
  );
}

export default StudySetCard;

