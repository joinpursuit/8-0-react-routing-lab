import { Link } from 'react-router-dom';
import PetsListNav from './PetsListNav';
import Pet from './Pet';
import './PetsList.css';

export const PetsList = ({ pets }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === 'Cat' ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  return (
    <section className='pets-wrapper'>
      <PetsListNav cats={cats} dogs={dogs} />
      <section className='pets-list'>
        {/* <Routes> */}
        {/* All cats section */}
        <Link to='/cats'>
          {cats.map((cat) => (
            <Pet key={cat.id} kind='cat' pet={cat} />
          ))}
        </Link>
        {/* All dogs section */}
        <Link to='/dogs'>
          {dogs.map((dog) => (
            <Pet key={dog.id} kind='dog' pet={dog} />
          ))}
        </Link>
        {/* </Routes> */}
      </section>
    </section>
  );
};

export default PetsList;
