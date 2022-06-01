import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ pets, kind }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {/* All cats section */}
        {kind === "cat"
          ? cats.map((cat) => <Pet key={cat.id} kind="cat" pet={cat} />)
          : null}

        {/* All dogs section */}
        {kind === "dog"
          ? dogs.map((dog) => <Pet key={dog.id} kind="dog" pet={dog} />)
          : null}
      </section>
    </section>
  );
};

export default PetsList;
