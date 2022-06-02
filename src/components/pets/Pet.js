import "./Pet.css";

const iconMap = {
  cat: "🐈",
  dog: "🐕",
};

export const Pet = ({ kind, pet }) => {
  const icon = iconMap[kind];
  return (
    <article key={pet.id}>
      <h3>
        <i>{icon}</i> {pet.name}
      </h3>
    </article>
  );
};

export default Pet;