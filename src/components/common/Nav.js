import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  return (
    <header>
      <article>
        <h1>
          {/* <a href="/">
            Northwest <span>Animal Hospital</span>
          </a> */}
          <Link to="index">Northwest <span>Animal Hospital</span></Link>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            {/* <a href="/staff">All Staff</a> */}
            <Link to="/staff">All Staff</Link>
          </li>
          <li>
            {/* <a href="/pets">All Pets</a> */}
            <Link to="/pets/cats">All Pets</Link>
          </li>
        </ul>
      </aside>
    </header>
  );
};

export default Nav;
