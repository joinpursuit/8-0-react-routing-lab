import Highlights from "./Highlights";
import NewsletterForm from "./NewsletterForm";
import splashImage from "./andrew-s-unsplash.jpg";
import Nav from "../common/Nav";
import "./Home.css";
import Footer from "../common/Footer";

export const Home = ({ employees, owners, pets }) => {
  return (
    <main>
      <section className="splash-image">
        <img src={splashImage} alt="Splash." />
        <Highlights employees={employees} owners={owners} pets={pets} />
        <NewsletterForm />
      </section>
      <Footer/>
    </main>
  );
};

export default Home;
