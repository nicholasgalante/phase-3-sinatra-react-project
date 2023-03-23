import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditMode() {
  const [activeStudySet, setActiveStudySet] = useState([]);

  const { title } = activeStudySet;
  const { setId } = useParams();

  console.log(setId);

  useEffect(() => {
    fetch(`http://localhost:9292/study_sets/${setId}`)
      .then((res) => res.json())
      .then((data) => setActiveStudySet(data));
  }, [setId]);

  return <>{title}</>;
}

export default EditMode;
