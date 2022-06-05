import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { Routes, Route } from "react-router-dom";

export const PetsList = ({ pets }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  //prettier-ignore
  const Cats = () => cats.map((cat) => <Pet key={cat.id} kind="cat" pet={cat} />);
  //prettier-ignore
  const Dogs = () => dogs.map((dog) => <Pet key={dog.id} kind="dog" pet={dog} />);
  const AllPets = () => {
    return (
      <>
        <Cats />
        <Dogs />
      </>
    );
  };

  return (
    <div>
      <section className="pets-wrapper">
        <PetsListNav cats={cats} dogs={dogs} />
        <section className="pets-list">
          <Routes>
            <Route path="/" element={<AllPets />} />
            <Route path="cats" element={<Cats />} />
            <Route path="dogs" element={<Dogs />} />
          </Routes>
        </section>
      </section>
    </div>
  );
};

export default PetsList;
