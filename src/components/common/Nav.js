import "./Nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <header>
      <article>
        <h1>
          {/* <a href="/"> */}
          <Link to="/">
            Northwest <span>Animal Hospital</span>
          </Link>
          {/* </a> */}
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <Link to="/staff">All Staff</Link>
            {/* <a href="/staff">All Staff</a> */}
          </li>
          <li>
            <Link to="/pets">All Pets</Link>
            {/* <a href="/pets">All Pets</a> */}
          </li>
        </ul>
      </aside>
    </header>
  );
};

export default Nav;
