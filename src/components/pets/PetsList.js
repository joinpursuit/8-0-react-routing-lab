import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { Switch, Route, Redirect } from "react-router-dom";

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
      <Switch>
        <Redirect exact from="/pets" to="/pets/cats" />
        <Route exact path="/pets">
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
        </Route>
        <Route path="/pets/cats">
          <section className="pets-list">
            {/* All cats section */}
            {cats.map((cat) => (
              <Pet key={cat.id} kind="cat" pet={cat} />
            ))}
          </section>
        </Route>
      </Switch>

      {/* All dogs section */}
      <Route path="/pets/dogs">
        <section>
          {dogs.map((dog) => (
            <Pet key={dog.id} kind="dog" pet={dog} />
          ))}
        </section>
      </Route>
    </section>
  );
};

export default PetsList;
