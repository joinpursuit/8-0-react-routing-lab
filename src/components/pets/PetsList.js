import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { useParams } from "react-router-dom";

export const PetsList = ({ pets }) => {
  const { kind } = useParams();
  console.log(kind);
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
      {(kind === "cats" || kind === undefined) &&
          cats.map((cat) => <Pet key={cat.id} kind="cat" pet={cat} />)}
      
          
    
                {(kind === "dogs" || kind === undefined) &&
          dogs.map((dog) => <Pet key={dog.id} kind="dog" pet={dog} />)}

        {/*Not Found section */}
        {(kind !== "cats" || kind !== "dogs" || kind !== undefined) && (
          <h2>Not Found</h2>
        )}
              
          
      </section>
    </section>
  );
};

export default PetsList;
