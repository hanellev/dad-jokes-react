import { useState } from 'react';
import './style.css';

export const Joke = ({ user, text, userAvatar, upLikes, downLikes }) => {
	const [upLikes, setUpLikes] = useState(0);
	const [downLikes, setDownLikes] = useState(0);

	const handleUpClick = () => {
		setUpLikes(upLikes + 1);
	};

	const handleDownClick = () => {
		setDownLikes(downLikes + 1);
	};

	return (
		<div className="joke">
			<div className="joke__body">
				<div className="joke__user">
					<img className="user-avatar" src={userAvatar} alt="user avatar" />
					<p className="user-name">{user}</p>
				</div>
				<p className="joke__text">{text}</p>
			</div>
			<div className="joke__likes">
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
	);
};
