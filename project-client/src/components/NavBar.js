import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div class="navbar navbar-menu">
      <div class="navbar-item">QuizMe</div>
      <a class="navbar-item">
        <NavLink to="/study_sets">View Your Study Sets</NavLink>
      </a>
    </div>
  );
}

export default NavBar;
