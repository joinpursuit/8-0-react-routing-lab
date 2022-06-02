import "../common/NotFound.css";
import pic from "../../assets/doggy-and-kitty.png"

export const NotFound = () => {
  return (
    <section className="not-found-page">
      <h2>404</h2>
      <p>Content Not found</p>
      <img src={pic} />
    </section>
  );
};

export default NotFound;