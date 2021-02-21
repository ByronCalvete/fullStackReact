import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const WarningNotUsed = () => {
	return <h1>Todavía no se ha usado el contador</h1>;
};

const ListOfClicks = ({ clicks }) => {
	return <p>{clicks.join(', ')}</p>;
};

const INITIAL_COUNTER_STATE = {
	left: 2,
	right: 4,
};

const App = () => {
	// const [left, setLeft] = useState(10);
	// const [right, setRight] = useState(20);

	const [counters, setCounters] = useState(INITIAL_COUNTER_STATE);

	const [clicks, setClicks] = useState([]);

	const handleClickLeft = () => {
		setCounters({
			...counters,
			left: counters.left + 1,
		});
		setClicks((prevClicks) => [...prevClicks, 'L']);
	};

	const handleClickRight = () => {
		setCounters({
			...counters,
			right: counters.right + 1,
		});
		setClicks((prevClicks) => [...prevClicks, 'R']);
	};

	const handleReset = () => {
		setCounters(INITIAL_COUNTER_STATE);

		setClicks([]);
	};

	return (
		<div>
			{counters.left}
			<button onClick={handleClickLeft}>Left</button>
			<button onClick={handleClickRight}>Right</button>
			{counters.right}
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
