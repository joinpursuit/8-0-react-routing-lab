import "./PetsListNav.css";
import { Link } from 'react-router-dom'

export const PetsListNav = ({ cats, dogs }) => {
  return (
    <nav className="pets-nav">
      <ul>
      <Link to='/pets/cats'>
        <li>
          See All Cats ({cats.length})
        </li>
      </Link>
      <Link to='/pets/dogs'>
        <li>
          See All Dogs ({dogs.length})
        </li>
      </Link>
      </ul>
    </nav>
  );
};

export default PetsListNav;
