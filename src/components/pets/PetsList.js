import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
  const Cats = () =>
    cats.map((cat) => <Pet key={cat.id} kind="cat" pet={cat} />);
  const Dogs = () =>
    dogs.map((dog) => <Pet key={dog.id} kind="dog" pet={dog} />);
  const AllPets = () => {
    return (
      <div>
        <Cats />
        <Dogs />
      </div>
    );
  };
  return (
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
  );
};

export default PetsList;
