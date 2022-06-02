import PetsListNav from './PetsListNav';

import Pet from './Pet';
import './PetsList.css';
import { useParams } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';
import NotFoundPage from '../common/NotFoundPage';
import NewPetForm from './NewPetForm';

export const PetsList = ({ pets }) => {
  const { kind } = useParams();
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === 'Cat' ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );
 
  return (
    <div>
      <section className='pets-wrapper'>
        <PetsListNav cats={cats} dogs={dogs} />

        <section className='pets-list'>
          <Routes>
            <Route
              index
              element={
                <>
                  {/* All pets section */}
                   {cats.map((cat) => (
                    <Pet key={cat.id} kind='cat' pet={cat} />
                  ))} 

                    {dogs.map((dog) => (
                    <Pet key={dog.id} kind='dog' pet={dog} />
                  ))} 
                </> 
              }
            />
            <Route
              path='/cats'
              element={
                <div>
                  {/* All cats section */}
                  {cats.map((cat) => (
                    <Pet key={cat.id} kind='cat' pet={cat} />
                  ))}
                </div>
              }
            />
            {/* All dogs section */}

            <Route
              path='/dogs'
              element={
                <div>
                  {dogs.map((dog) => (
                    <Pet key={dog.id} kind='dog' pet={dog} />
                  ))}
                </div>
              }
            />
            <Route path='/newpetform' element={<NewPetForm />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </section>
      </section>
    </div>
  );
};

export default PetsList;
