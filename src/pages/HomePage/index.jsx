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
			<div className="joke">
				<div className="joke__body">
					<div className="joke__user">
						<div className="user-avatar"></div>
						<div className="user-name"></div>
					</div>
					<div className="joke__text">
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
		</div>
	);
};
