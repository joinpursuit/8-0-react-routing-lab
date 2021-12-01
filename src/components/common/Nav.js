import { unmountComponentAtNode } from "react-dom";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import StaffList from "../staff/StaffList";
import "./Nav.css";

export const Nav = () => {



  return (
    <Router>

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
            <Link exact to="/pets/cat">All Pets</Link>
          </li>
        </ul>
      </aside>
    </header>
    
    {/* <Switch>
      <Route exact path="/">
      </Route>
    <Route path="/staff">
    <StaffList />
    </Route>
      </Switch> */}
    </Router>
  );
};

export default Nav;
