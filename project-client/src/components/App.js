import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import StudySetCard from "./StudySetCard";

function App() {
  const [studySets, setStudySets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/study_sets")
      .then((res) => res.json())
      .then((data) => setStudySets(data));
  });

  const displayStudySets = studySets.map((set) => {
    return <StudySetCard key={set.id} set={set} />;
  });

  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={displayStudySets} />
          <Route path="/hola" element={"Hola Mundo"}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
