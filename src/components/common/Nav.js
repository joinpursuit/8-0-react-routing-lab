import "./Nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <header>
      <article>
        <h1>
          <Link to="/">
            <h3>
              Northwest <span>Animal Hospital</span>
            </h3>
          </Link>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <Link to="/staff">
              <h3>All Staff</h3>
            </Link>
          </li>
          <li>
            <Link to="/pets">
              <h3>All Pets</h3>
            </Link>
          </li>
        </ul>
      </aside>
    </header>
  );
};

export default Nav;
