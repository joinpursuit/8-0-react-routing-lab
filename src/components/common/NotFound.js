import { Link } from "react-router-dom";
import "../common/NotFound.css";
import pic from "../../assets/doggy-and-kitty.png"

export const NotFound = () => {
  return (
    <section className="not-found-page">
      <h2>404</h2>
      <p>Content Not found</p>
      <div className="link-wrapper">
        <Link to="index">Take me home</Link>
        <img src={pic} />
      </div>
    </section>
  );
};

export default NotFound;