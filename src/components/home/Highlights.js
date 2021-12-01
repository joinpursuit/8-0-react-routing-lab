import "./Highlights.css";
const employees = require("../../data/employees");
const owners = require("../../data/owners");
const pets = "../../data/pets";

const Highlights = () => {
  return (
    <section className="highlights">
      <article>
        <p class="numerical">{employees.length}</p>
        <p>Pawesome staff members!</p>
      </article>
      <article>
        <p class="numerical">{pets.length}</p>
        <p>Furry children supported!</p>
      </article>
      <article>
        <p class="numerical">{owners.length}</p>
        <p>Absolutely purrfect clients!</p>
      </article>
    </section>
  );
};

export default Highlights;
