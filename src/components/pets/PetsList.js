import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";


export const PetsList = ({ pets, isCat }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  const showCats =cats.map((cat) => (
    <Pet key={cat.id} kind="cat" pet={cat} />
  ))
  const showDogs =dogs.map((dog) => (
    <Pet key={dog.id} kind="dog" pet={dog} />
  ))

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {isCat ? showCats : showDogs}
      </section>

    </section>
  );
};

export default PetsList;
