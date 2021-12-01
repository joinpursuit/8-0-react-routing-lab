import pets from "../../data/pets";
import Pet from "./Pet"

const Dogs = () => {
    const [cats, dogs] = pets.reduce(
        (acc, pet) => {
          const position = pet.kind === "Cat" ? 0 : 1;
          acc[position].push(pet);
          return acc;
        },
        [[], []]
      );

    const dogList = dogs.map((dog) => (
        <Pet key={dog.id} kind="dog" pet={dog} />
    ))

    return (
        <>
        {dogList}
        </>
    )
}

export default Dogs;