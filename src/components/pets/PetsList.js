import React from "react";
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

  const AllPets = () => {
    return (
      <div>
        <Meow />
        <Dogg />
      </div>
    );
  };

  const Meow = () => {
    return cats.map((cat) => <Pet key={cat.id} kind="cat" pet={cat} />);
  };
  const Dogg = () => {
    return dogs.map((dog) => <Pet key={dog.id} kind="dog" pet={dog} />);
  };
  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        <Routes>
          <Route path="/" element={<AllPets />}></Route>
          <Route path="cats" element={<Meow />}></Route>
          <Route path="dogs" element={<Dogg/>}></Route>
        </Routes>
      </section>
    </section>
  );
};

export default PetsList;




