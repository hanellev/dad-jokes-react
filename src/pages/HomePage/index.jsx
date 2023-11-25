import './style.css';
import { useState } from 'react';
import { jokes } from '../..';

export const HomePage = () => {
	const [upLikes, setUpLikes] = useState(0);
	const [downLikes, setDownLikes] = useState(0);

	const handleUpClick = () => {
		setUpLikes(upLikes + 1);
	};

	const handleDownClick = () => {
		setDownLikes(downLikes + 1);
	};

	return (
		<div className="container">
			<div class="joke">
				<div class="joke__body">
					<div class="joke__user">
						<img
							class="user-avatar"
							src="../users_img/user01.png"
							alt="user avatar"
						/>
						<p class="user-name">Neroxx</p>
					</div>

					<p class="joke__text">
						The secret service isn't allowed to yell "Get down!" anymore when
						the president is about to be attacked. Now they have to yell
						"Donald, duck!"
					</p>
				</div>
				<div class="joke__likes">
					<button
						className="btn-like btn-like--up"
						onClick={handleUpClick}
					></button>
					<span
						className={`likes-count likes-count--up ${
							upLikes > 0 ? 'active' : ''
						}`}
					>
						{upLikes}
					</span>
					<button
						className="btn-like btn-like--down"
						onClick={handleDownClick}
					></button>
					<span
						className={`likes-count likes-count--down ${
							downLikes > 0 ? 'active' : ''
						}`}
					>
						{downLikes}
					</span>
				</div>
			</div>
		</div>
	);
};
