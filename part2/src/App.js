import { useState, useEffect } from 'react';
import './styles.css';

import { Note } from './Note.js';
import { getAllNotes } from './services/notes/getAllNotes';
import { createNote } from './services/notes/createNote';

const App = () => {
	const [notes, setNotes] = useState([]);
	const [newNote, setNewNote] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	// if (typeof data === 'undefined' || data.length === 0) {
	// 	return 'No tenemos notas que mostrar';
	// }

	useEffect(() => {
		console.log('useEffect');
		setLoading(true);
		getAllNotes().then((notes) => {
			setNotes(notes);
			setLoading(false);
		});
	}, []);

	const handleChange = (event) => {
		setNewNote(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const noteToAddToState = {
			title: newNote,
			body: newNote,
			userId: 1,
		};

		setError('');

		createNote(noteToAddToState)
			.then((newNote) => {
				setNotes([...notes, newNote]);
			})
			.catch((error) => {
				console.log(error);
				setError('La API ha petado');
			});
		setNewNote('');
	};

	return (
		<div>
			<h1>Notes</h1>
			{loading && 'Cargando....'}
			<ol>
				{notes.map((note) => (
					<Note key={note.id} title={note.title} body={note.body} />
					// <Note key={note.id} {...note} />
				))}
			</ol>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={handleChange} value={newNote} />
				<button>Create note</button>
			</form>
			{error && <span style={{ color: 'red' }}>{error}</span>}
		</div>
	);
};

export default App;
