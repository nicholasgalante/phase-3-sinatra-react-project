import { NavLink, Router } from "react-router-dom";

function NavBar() {
  return (
    <>
    <Router>
      <NavLink to="/">QuizMe</NavLink>
      <NavLink to="/study_sets">View Your Study Sets</NavLink>
   </Router>
    </>
  );
}

export default NavBar;
