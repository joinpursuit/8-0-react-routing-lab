import "./Nav.css";
import { Link } from "react-router-dom";

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
        <nav>
          <ul>
            <li>
              <Link to="/staff">All Staff</Link>
            </li>
            <li>
              <Link to="/pets">All Pets</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </header>
  );
};

export default Nav;
