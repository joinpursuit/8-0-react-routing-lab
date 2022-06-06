import "./PetsListNav.css";
import { Link } from "react-router-dom";
export const PetsListNav = ({ cats, dogs }) => {
  return (
    <nav className="pets-nav">
      <ul>
        <li>
          <a href="/pets/cats">See All Cats ({cats.length})</a>
        </li>
        <li>
          <a href="/pets/dogs">See All Dogs ({dogs.length})</a>
        </li>
        <li>
          <Link to="/petform">Add Pets</Link>
        </li>
      </ul>
    </nav>
  );
};

export default PetsListNav;
