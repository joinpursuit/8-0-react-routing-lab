import "./Nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <header>
      <article>
        <h1>
          <a href="/">
          <Link to="/">
              <h3> Northwest <span>Aninmal Hospital</span></h3>
          </Link>
          </a>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
          <Link to="/staff">
              <h3> Northwest <span>All Staff</span></h3>
          </Link>
          </li>
          <li>
          <Link to="/pets">
              <h3> Northwest <span>Pets</span></h3>
          </Link>
          </li>
        </ul>
      </aside>
      <nav>
        <div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
