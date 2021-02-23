import { useState } from 'react';
import './styles.css';
import { Note } from './Note.js';

const App = ({ data = [] }) => {
	const [notes, setNotes] = useState(data);
	const [newNote, setNewNote] = useState('');
	const [showAll, setShowAll] = useState(true);

	if (typeof data === 'undefined' || data.length === 0) {
		return 'No tenemos notas que mostrar';
	}

	const handleChange = (event) => {
		setNewNote(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const noteToAddToState = {
			id: notes.length + 1,
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random() < 0.5,
		};

		setNotes([...notes, noteToAddToState]);
		setNewNote('');
	};

	const handleShowAll = () => {
		setShowAll(() => !showAll);
	};

	return (
		<div>
			<h1>Notes</h1>
			<button onClick={handleShowAll}>
				{showAll ? 'Show only important' : 'Show all'}
			</button>
			<ul>
				{notes
					.filter((note) => (showAll ? true : note.important === true))
					.map((note) => (
						<Note key={note.id} content={note.content} date={note.date} />
					))}
			</ul>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={handleChange} value={newNote} />
				<button>Create note</button>
			</form>
		</div>
	);
};

export default App;
