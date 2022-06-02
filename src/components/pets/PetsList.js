import { Routes, Route } from "react-router-dom";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

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
      {/* Aside Navigation */}
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {/* Creating routes for all pets */}
        <Routes>
          <Route path="/cats" element={
            <>
              <h2>Our Cats list</h2>
              {/* All cats section */}
              {cats.map((cat) => (
                <Pet key={cat.id} kind="cat" pet={cat} />
              ))}
            </>
          }/>
          <Route path="/dogs" element={
            <>
            <h2>Our Dogs list</h2>
              {/* All dogs section */}
              {dogs.map((dog) => (
                <Pet key={dog.id} kind="dog" pet={dog} />
              ))}
            </>
          }/>
        </Routes>
      </section>
    </section>
  );
};

export default PetsList;