import Pet from "./Pet";
import { pets } from "../../data/pets"
import PetsListNav from "./PetsListNav";


export const Cats = ({ pets, isCat }) => {
    const [cats, dogs] = pets.reduce(
    (acc, pet) => {
        const position = pet.kind === "Cat" ? 0 : 1;
        acc[position].push(pet);
        return acc;
    },
    [[], []]
    );
    
    const showCats = cats.map((cat) => (
        <Pet key={cat.id} kind="cat" pet={cat} />
        ))

    return (
        <>
        <section className="pets-wrapper">
        <PetsListNav cats={cats} dogs={dogs} />
        <section className="pets-list">
            { showCats }
        </section>
        </section>
        </>

    ) 
    
}

export default Cats;
