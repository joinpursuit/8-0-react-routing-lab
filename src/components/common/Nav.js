import "./Nav.css";
import {Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import StaffList from "../staff/StaffList";
import { employees } from "../../data/employees";
import { pets } from "../../data/pets";
import PetsList from "../pets/PetsList";


function Staff(){
  return(
  <div>
    <StaffList employees={employees} />
  </div>
  )
}

function ListOfPets(){
  return(
  <div>
    <PetsList pets={pets} />
  </div>
  )
}






export const Nav = () => {
  return (
    <header>
      <article>
        <h1>
          <Link to="/">
            Northwest <span>Animal Hospital</span>
          </Link>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <Link to="/staff">All Staff</Link>
          </li>
          <li>
            <Link to="/pets">All Pets</Link>
          </li>
        </ul>
          <Switch>
               <Route path="/staff" component={Staff} />
          
               <Route path="/pets" component={ListOfPets} />

          </Switch>
      
      </aside>
    </header>
  );
};

export default Nav;
