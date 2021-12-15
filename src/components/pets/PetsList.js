import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { Switch, Route, Redirect } from "react-router-dom";

export const PetsList = ({ pets }) => {
  const [cats, dogs] = pets.reduce (
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

        <Switch>
          <Route exact path="/pets" >
            <Redirect to="/pets/cats" />
          </Route>
          <Route path="/pets/cats" >
            { cats.map((cat) => (
            <Pet key={cat.id} kind="cat" pet={cat} />
          ))}
          </Route>
        {/* All dogs section */}
          <Route path="/pets/dogs" >
              { dogs.map((dog) => (
              <Pet key={dog.id} kind="dog" pet={dog} />
              ))}
          </Route> 
        </Switch>
        </section>
      </section>
  )};

export default PetsList;
