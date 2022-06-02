import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import Nav from "../common/Nav";
import Footer from "../common/Footer";

export const PetsList = ({ pets }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  return (
    <div>
      <Nav />
      <section className="pets-wrapper">
        <PetsListNav cats={cats} dogs={dogs} />
        <section className="pets-list">
          {/* All cats section */}
          {cats.map((cat) => (
            <Pet key={cat.id} kind="cat" pet={cat} />
          ))}

          {/* All dogs section */}
          {dogs.map((dog) => (
            <Pet key={dog.id} kind="dog" pet={dog} />
          ))}
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default PetsList;
