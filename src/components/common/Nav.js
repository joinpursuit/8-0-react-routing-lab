import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  return (
    <header>
      <article>
        <h1>
          <a href="/">
          <Link to="/">
            Northwest <span>Animal Hospital</span>
            </Link>
          </a>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <Link to="/staff">
            <a href="/staff">All Staff</a>
            </Link>
          </li>
          <li>
            <Link to="/pets">
            <a href="/pets">All Pets</a>
            </Link>
          </li>
        </ul>
      </aside>
    </header>
  );
};

export default Nav;
