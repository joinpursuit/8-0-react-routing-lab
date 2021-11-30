import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import {Route, Routes} from "react-router-dom";


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
    <section className="pets-wrapper">
      <Routes>
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {/* All cats section */}
        <Route path="/pets/cats" render={cats.map((cat) => (
          <Pet key={cat.id} kind="cat" pet={cat} />
        ))} />

        {/* {cats.map((cat) => (
          <Pet key={cat.id} kind="cat" pet={cat} />
        ))} */}

        {/* All dogs section */}
        {dogs.map((dog) => (
          <Pet key={dog.id} kind="dog" pet={dog} />
        ))}
      </section>
      </Routes>
    </section>
  );
};

export default PetsList;
