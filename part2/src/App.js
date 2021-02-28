import { useState, useEffect } from 'react';
import './styles.css';
import { Note } from './Note.js';
import axios from 'axios';

const App = () => {
	const [notes, setNotes] = useState([]);
	const [newNote, setNewNote] = useState('');
	const [loading, setLoading] = useState(false);

	// if (typeof data === 'undefined' || data.length === 0) {
	// 	return 'No tenemos notas que mostrar';
	// }

	useEffect(() => {
		console.log('useEffect');
		setLoading(true);
		axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
			const { data } = response;
			setNotes(data);
			setLoading(false);
		});
	}, []);

	const handleChange = (event) => {
		setNewNote(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const noteToAddToState = {
			id: notes.length + 1,
			title: newNote,
			body: newNote,
		};

		setNotes([...notes, noteToAddToState]);
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
		</div>
	);
};

export default App;
