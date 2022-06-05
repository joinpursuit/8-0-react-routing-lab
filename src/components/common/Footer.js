import "./Footer.css";
import {Link} from "react-router-dom"

export const Footer = () => {
  return (
    <footer>
      <p>Northwest Animal Hospital. 2022.</p>
      <ul>
        <li>
          <Link to="/staff">All Pets
          </Link>
        </li>
        <li>
          <Link to="/pets">All Staff
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
