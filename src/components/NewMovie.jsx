import { useState } from "react";
import axios  from 'axios';
import { useNavigate } from 'react-router-dom'

/*
	TODO: 
	1) create state to keep track of form input change
	2) on submit create axios POST request to backend ( /api/movies )
	3) if the request was successful, navigate back to the movie page

*/
const NewMovie = () => {

	const [title, setTitle] = useState('');
	const [director, setDirector ] = useState('');
	const [year, setYear] = useState('');
	const [rating, setRating] = useState('');
	const [poster, setPoster] = useState('');
	const [description, setDescription] = useState('');
	const navigate = useNavigate();

const handleSubmit = (e) =>{
	e.preventDefault();
	
	axios
	.post(`${import.meta.env.VITE_SERVER_BASE_URL}/api/moviesdb`, {title, director, year, rating, poster, description})
	.then(res => {
		console.log(res.data);
		navigate('/');
	})
	.catch(e => console.log(e));
}


return (
	<div  className="flex flex-col justify-center bg-amber-800 items-center py-20">
		<h2 className="font-bold text-lg tracking-wide text-gray-100 uppercase">Add a New Movie</h2> 
		<form onSubmit={handleSubmit} className="flex justify-center flex-col mt-4">
		{/* 	<label htmlFor="image">Image Link</label> */}
			<input 
				type="text"
				name="image"
				value={poster}
				placeholder="image link"
				onChange={e => setPoster(e.target.value)}
				className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
			focus:border-blue-500 block w-80 p-2.5"
			></input>
		{/* 	<label htmlFor="title">Title</label> */}
			<input 
				type="text" 
				name="title" 
				placeholder="title"
				value={title}
				required
				onChange={e => setTitle(e.target.value)}
				className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
			focus:border-blue-500 block w-80 p-2.5"
			></input>
{/* 			<label htmlFor="director">Director</label>
 */}			<input 
				type="text" 
				name="director" 
				placeholder="director"
				value={director}
				onChange={e => setDirector(e.target.value)}
				className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
			focus:border-blue-500 block w-80 p-2.5"
			></input>
			{/* <label htmlFor="year">Year</label> */}
			<input 
				type="number" 
				name="year" 
				placeholder="year"
				value={year}
				onChange={e => setYear(e.target.value)}
				className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
			focus:border-blue-500 block w-80 p-2.5"
			></input>
			{/* <label htmlFor="rating">Rating</label> */}
			<input 
				type="number" 
				name="rating" 
				placeholder="imdb rating"
				value={rating}
				onChange={e => setRating(e.target.value)}
				className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
			focus:border-blue-500 block w-80 p-2.5"
			></input>
				<input 
				type="text" 
				name="description" 
				placeholder="description"
				value={description}
				required
				onChange={e => setDescription(e.target.value)}
				className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
			focus:border-blue-500 block w-80 p-2.5"
			></input>
			<button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 
			focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-80">
				Add Movie
			</button>
		</form>
	</div>
)
}

export default NewMovie