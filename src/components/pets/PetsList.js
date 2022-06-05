/** @format */

import PetsListNav from './PetsListNav';
import Pet from './Pet';
import './PetsList.css';
import { useParams } from 'react-router-dom';

export const PetsList = ({ pets }) => {
	console.log(pets);
	let params = useParams();

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
				{params.cats === 'dogs'
					? dogs.map((dog) => <Pet key={dog.id} kind='dog' pet={dog} />)
					: cats.map((cat) => <Pet key={cat.id} kind='cat' pet={cat} />)}
			</section>
		</section>
	);
};

export default PetsList;
