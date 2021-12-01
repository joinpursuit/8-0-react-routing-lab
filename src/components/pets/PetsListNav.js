import { Link, BrowserRouter as Router } from "react-router-dom";
import "./PetsListNav.css";

export const PetsListNav = ({ cats, dogs }) => {
  return (
    <Router>
    <nav className="pets-nav">
      <ul>
        <li>
          <Link to="/pets/cats">See All Cats ({cats.length})</Link>
        </li>
        <li>
          <Link to="/pets/dogs">See All Dogs ({dogs.length})</Link>
        </li>
      </ul>
    </nav>
    </Router>
  );
};

export default PetsListNav;
