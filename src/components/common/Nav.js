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
        <ul>
          <li>
            <a href="/staff">All Staff</a>
          </li>
          <li>
            <a href="/pets">All Pets</a>
          </li>
        </ul>
      </aside>
    </header>
  );
};

export default Nav;
