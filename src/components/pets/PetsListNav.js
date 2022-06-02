import "./PetsListNav.css";
import { Link } from "react-router-dom";

export const PetsListNav = ({ cats, dogs }) => {
  return (
    <nav className="pets-nav">
      <ul>
        <li>
          <Link to="/pets/cats">
            <h4>See All Cats ({cats.length})</h4>
          </Link>
        </li>

        <li>
          <Link to="/pets/dogs">
            <h4>See All Dogs ({dogs.length})</h4>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PetsListNav;
