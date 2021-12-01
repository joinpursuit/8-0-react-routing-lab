import Highlights from "./Highlights";
import NewsletterForm from "./NewsletterForm";
import splashImage from "./andrew-s-unsplash.jpg";
import "./Home.css";
import { employees } from "../../data/employees.js";
import { owners } from "../../data/owners";
import { pets } from "../../data/pets";
import { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      employees,
      owners,
      pets,
    };
  }

render(){
  return (
    <main>
      <section className="splash-image">
        <img src={splashImage} alt="Splash." />
        <Highlights employees={employees} owners={owners} pets={pets} />
        <NewsletterForm />
      </section>
    </main>
  );
};
}
export default Home;
