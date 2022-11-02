import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
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
          <Link to="/staff">
            <li>All Staff</li>
          </Link>
          <Link to="/pets">
            <li>All Pets</li>
          </Link>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
