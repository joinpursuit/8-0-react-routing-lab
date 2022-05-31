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

	return (
		<section className='pets-wrapper'>
			<PetsListNav cats={cats} dogs={dogs} />
			<section className='pets-list'>
				<Routes>
					<Route
						path='/cats'
						element={
							// wonder if putting a div here would make a difference?
							<div>
								{/* All cats section */}
								{cats.map((cat) => (
									<Pet key={cat.id} kind='cat' pet={cat} />
								))}
							</div>
						}
					/>
					<Route
						path='/dogs'
						element={
							<div>
								{/* All dogs section */}
								{dogs.map((dog) => (
									<Pet key={dog.id} kind='dog' pet={dog} />
								))}
							</div>
						}
					/>
				</Routes>
			</section>
		</section>
	);
};

export default PetsList;
