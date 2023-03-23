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
  },[]);

  const displayStudySets = studySets.map((set) => {
    return <StudySetCard key={set.id} set={set} />;
  });

  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/study_sets" element={displayStudySets} />
          <Route path="/study_sets/edit/*" element={`Edit Study Set`}/>
          <Route path="/study_sets/study/*" element={`View Flashcards for Study set`}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="users/*" element={<Users />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function Users() {
//   return (
//     <div>
//       <nav>
//         <Link to="me">My Profile</Link>
//       </nav>

//       <Routes>
//         <Route path=":id" element={<UserProfile />} />
//         <Route path="me" element={<OwnUserProfile />} />
//       </Routes>
//     </div>
//   );
// }