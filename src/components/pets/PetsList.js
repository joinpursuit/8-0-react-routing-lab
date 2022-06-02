import PetsListNav from './PetsListNav';
import Pet from './Pet';
import './PetsList.css';
import { Route, Routes } from 'react-router-dom';

export const PetsList = ({ pets }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === 'Cat' ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  {
    /* All cats section */
  }
  const allCats = cats.map((cat) => <Pet key={cat.id} kind="cat" pet={cat} />);

  const allDogs = dogs.map((dog) => <Pet key={dog.id} kind="dog" pet={dog} />);

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {/* All cats section */}
                {allCats}
                {/* All dogs section */}
                {allDogs}
              </div>
            }
          />
          <Route
            path="/cats"
            element={
              <div>
                {/* All cats section */}
                {allCats}
              </div>
            }
          />
          <Route
            path="/dogs"
            element={
              <div>
                {/* All dogs section */}
                {allDogs}
              </div>
            }
          />
        </Routes>
      </section>
    </section>
  );
};

export default PetsList;
