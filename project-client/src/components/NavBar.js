import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
        QuizMe
        <NavLink to="/study_sets">View Your Study Sets</NavLink>
    </>
  );
}

export default NavBar;
