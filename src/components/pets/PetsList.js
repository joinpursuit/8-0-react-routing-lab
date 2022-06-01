import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import {Routes, Route, Navigate} from "react-router";

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
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        <Routes>
          <Route exact path="/pets/">
            <Navigate to="/pets/cats" />
          </Route>
          <Route path="/pets/cats">
            {cats.map((cat)=> (<Pet key={cat.id} kind="cat" pet={cat}/>))}
          </Route>
          <Route path="/pets/dogs">
          {dogs.map((dog) => (<Pet key={dog.id} kind="dog" pet={dog} />))}
          </Route>
        </Routes>
      </section>
    </section>
  );
};

export default PetsList;
