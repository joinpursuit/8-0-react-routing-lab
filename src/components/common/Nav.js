import "./Nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <header>
      <article>
        <h1>
          <a href="/">
            Northwest <span>Animal Hospital</span>
          </a>
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
      <nav>
        <div>
          <Link to="/">
            <h3> Northwest <span>Animal Hospital</span></h3>
          </Link>
          <Link to = "/staff">
            <h3>All Staff</h3>
          </Link>
          <Link to="/pets">
            <h3>All Pets</h3>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

