import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function StudyMode({studySets}) {
  const [activeStudySet, setActiveStudySet] = useState({});
  const [index, setIndex] = useState(0);

  const { setId } = useParams();

  useEffect(()=> {
   setActiveStudySet(studySets.find(set => set.id == setId))
  },[studySets])



  
  console.log("ACTIVE STUDY SET", activeStudySet)


//   useEffect(() => {
//     fetch(`http://localhost:9292/study_sets/${setId}`)
//       .then((res) => res.json())
//       .then((data) => setActiveStudySet(data));
//   }, [setId]);

//   console.log("ACTIVE STUDY SET", activeStudySet)


  return <>
  You are now in study mode!
  {activeStudySet.title}
  Displaying card # 
  {index}

  <button>Previous</button>
  <button>Next</button>
  </>;
}

export default StudyMode;
