import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import StudySetCard from "./StudySetCard";

function App() {
  const [studySets, setStudySets] = useState([])

  useEffect(()=>{
    fetch("http://localhost:9292/study_sets")
      .then(res => res.json())
      .then(data => setStudySets(data))
  })

  const displayStudySets = studySets.map(set => {
    return <StudySetCard key={set.id} set={set}/>
  })

  return (
    <div>
      <NavBar/>
          Your Study Sets: 
          {displayStudySets}

    </div>
  );
}

export default App;
