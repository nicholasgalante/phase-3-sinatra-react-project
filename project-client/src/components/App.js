import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

function App() {
  const [studySets, setStudySets] = useState([])

  useEffect(()=>{
    fetch("http://localhost:9292/study_sets")
      .then(res => res.json())
      .then(data => setStudySets(data))
  })



  return (
    <div>
      <NavBar/>
      Your Study Sets: 
    </div>
  );
}

export default App;
