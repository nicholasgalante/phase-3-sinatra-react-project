import { Link } from "react-router-dom";

function StudySetCard({ set, onSelectStudySet }) {
  const { title, id } = set;

  function handleSelectStudySet() {
    onSelectStudySet(id);
  }

  return (
    <div class="card mb-6">
      <div class="card-header-title">{title}</div>
      <footer class="card-footer">
        <a class="card-footer-item" onClick={handleSelectStudySet}>
          <Link to={"edit/" + id}>Edit</Link>
        </a>
        <a class="card-footer-item" onClick={handleSelectStudySet}>
          <Link to={"study/" + id}>Study</Link>
        </a>
      </footer>
    </div>
  );
}

export default StudySetCard;
