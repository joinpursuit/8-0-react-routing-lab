import "./Nav.css";
import {Link, Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';


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
          
      </aside>
    </header>
  );
};

export default Nav;