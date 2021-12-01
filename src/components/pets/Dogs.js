
// import Pet from "./Pet";
// import { pets } from "../../data/pets";
// import PetsListNav from "./PetsListNav";


// const Dogs =() => {
// const [cats, dogs] = pets.reduce(
//     (acc, pet) => {
//       const position = pet.kind === "Cat" ? 0 : 1;
//       acc[position].push(pet);
//       return acc;
//     },
//     [[], []]
//   );

//   const showDogs =dogs.map((dog) => (
//     <Pet key={dog.id} kind="dog" pet={dog} />
//   ))

//     return (
//             <>
//             <section className="pets-wrapper">
//             <PetsListNav cats={cats} dogs={dogs} />
//             <section className="pets-list">
//             {showDogs}
//             </section>
//             </section>
//             </>
//     )

// }

// export default Dogs;