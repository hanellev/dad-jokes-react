import './style.css';
import { useState, useEffect } from 'react';
import { Joke } from '../../components/Joke';

export const HomePage = () => {
	const [jokes, setJokes] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('http://localhost:4000/api/jokes');
			const data = await response.json();
			setJokes(data.result);
		};

		fetchData();
	}, []);

	return (
		<div className="container">
			{jokes.map((joke) => (
				<Joke
					key={joke.id}
					userAvatar={joke.userAvatar}
					user={joke.userName}
					text={joke.text}
					likes={joke.likes}
					dislikes={joke.dislikes}
				/>
			))}
		</div>
	);
};
