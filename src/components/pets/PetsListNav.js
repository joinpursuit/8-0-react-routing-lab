import "./PetsListNav.css";
import { Link } from "react-router-dom";

export const PetsListNav = ({ cats, dogs }) => {
  return (
    <nav className="pets-nav">
      <ul>
        <li>
          <Link to="/pets/cats">
          See All Cats ({cats.length})
          </Link>
          {/* <a href="/pets/cats">See All Cats ({cats.length})</a> */}
        </li>
        <li>
          <Link to="/pets/dogs">
          See All Dogs ({dogs.length})
          </Link>
          {/* <a href="/pets/dogs">See All Dogs ({dogs.length})</a> */}
        </li>
      </ul>
    </nav>
  );
};

export default PetsListNav;
