import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { Route, Redirect } from "react-router";

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
          <Route exact path='/pets'>
            <Redirect from='/pets' to='/pets/cats' /> {/* navigates to cats*/}
            </Route>

        {/* All cats section */}
        <Route path ='/pets/cats'>
        {cats.map((cat) => (
          <Pet key={cat.id} kind="cat" pet={cat} />
        ))}
        </Route>

        <Route path ='/pets/dogs'>
        {/* All dogs section */}
        {dogs.map((dog) => (
          <Pet key={dog.id} kind="dog" pet={dog} />
        ))}
        </Route>
      </section>
    </section>
  );
};

export default PetsList;
