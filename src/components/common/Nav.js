import "./Nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <header>
      <article>
        <h1>
          <Link to="/">
            <h1>Northwest <span>Animal Hospital</span></h1>
          </Link>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <Link to="/staff">
              <article>All Staff</article>
            </Link>
          </li>
          <li>
            <Link to="/pets">
              <article>All Pets</article>
            </Link>
          </li>
        </ul>
      </aside>
    </header>
  );
};

export default Nav;
