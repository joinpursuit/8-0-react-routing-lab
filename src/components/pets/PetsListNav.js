import { Link } from "react-router-dom";
import "./PetsListNav.css";

export const PetsListNav = ({ cats, dogs }) => {
  return (
    <nav className="pets-nav">
      <ul>
        <li>
          <Link to="./pets/cats">
            <a href="/pets/cats">See All Cats ({cats.length})</a>
          </Link>
        </li>
        <li>
          <Link to="./pets/dogs">
            <a href="/pets/dogs">See All Dogs ({dogs.length})</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PetsListNav;
