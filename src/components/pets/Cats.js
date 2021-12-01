import pets from "../../data/pets";
import Pet from "./Pet"

const Cats = () => {
    const [cats, dogs] = pets.reduce(
        (acc, pet) => {
          const position = pet.kind === "Cat" ? 0 : 1;
          acc[position].push(pet);
          return acc;
        },
        [[], []]
      );

    const catList = cats.map((cat) => (
        <Pet key={cat.id} kind="cat" pet={cat} />
    ))

    return (
      <>
        {catList}
      </>
    )
}

export default Cats;

