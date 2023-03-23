import { Link, Route, Routes } from "react-router-dom";

function StudySetCard({ set }) {
  const { title, id } = set;

  return (
    <>
      {title}
      <Link to={"edit/" + id}>
        <button>Edit</button>
      </Link>
      <Link to={"study/" + id}>
        <button>Study</button>
      </Link>
    </>
  );
}

export default StudySetCard;

