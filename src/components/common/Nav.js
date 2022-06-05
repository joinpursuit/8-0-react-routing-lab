import "./Nav.css";
import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <header>
      <article>
        <Link to="/" className="navLink">
          <h1>  Northwest <span>Animal Hospital</span></h1>
        </Link>
      </article>
      <aside>
        <ul>
          <Link to="/staff"className="navLink">
            <li> All Staff </li>
          </Link>
          <Link to="/pets" className="navLink">
            <li> All Pets </li>
          </Link>
        </ul>
      </aside>
    </header >
  );
};

export default Nav;
