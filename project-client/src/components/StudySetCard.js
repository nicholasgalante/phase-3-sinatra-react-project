import { Link, Route, Routes } from "react-router-dom";

function StudySetCard({ set, onSelectStudySet }) {
  const { title, id } = set;

  function handleSelectStudySet() {
    onSelectStudySet(id);
  }

  return (
    <>
      {title}
      <Link to={"edit/" + id}>
        <button onClick={handleSelectStudySet}>Edit</button>
      </Link>
      <Link to={"study/" + id}>
        <button>Study</button>
      </Link>
    </>
  );
}

export default StudySetCard;
