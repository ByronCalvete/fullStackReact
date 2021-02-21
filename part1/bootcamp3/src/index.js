import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const WarningNotUsed = () => {
	return <h1>Todavía no se ha usado el contador</h1>;
};

const ListOfClicks = ({ clicks }) => {
	return <p>{clicks.join(', ')}</p>;
};

const App = () => {
	// const [left, setLeft] = useState(10);
	// const [right, setRight] = useState(20);
	const [clicks, setClicks] = useState([]);

	const handleClickLeft = () => {
		setClicks((prevClicks) => [...prevClicks, 'L']);
	};

	const handleClickRight = () => {
		setClicks((prevClicks) => [...prevClicks, 'R']);
	};

	const handleReset = () => {
		setClicks([]);
	};

	const left = clicks.filter((click) => click === 'L');
	const right = clicks.filter((click) => click === 'R');

	return (
		<div>
			{left.length}
			<button onClick={handleClickLeft}>Left</button>
			<button onClick={handleClickRight}>Right</button>
			{right.length}
			<p>
				<button onClick={handleReset}>reset</button>
			</p>
			<p>Clicks totales: {clicks.length}</p>
			{clicks.length === 0 ? (
				<WarningNotUsed />
			) : (
				<ListOfClicks clicks={clicks} />
			)}
		</div>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
