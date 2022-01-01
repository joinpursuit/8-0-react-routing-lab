import {Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import "./PetsListNav.css";
import PetsList from "../pets/PetsList";



export const PetsListNav = ({ cats, dogs }) => {
  return (
    <nav className="pets-nav">
      <ul>
        <li>
          <Link to="/pets/cats">See All Cats ({cats.length})</Link>
        </li>
        <li>
          <Link to="/pets/dogs">See All Dogs ({dogs.length})</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/pets/cats" PetsList={cats}/>

        <Route path="/pets/dogs" PetsList={dogs}/>
      </Switch>
    </nav>
  );
};

export default PetsListNav;
