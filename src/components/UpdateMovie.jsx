import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";



const UpdateMovie = () => {

	const [movie, setMovie] = useState('');
	const [error, setError] = useState('');
	const { id } = useParams;
	const navigate = useNavigate();

	useEffect( () => {
		axios
			.get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
			.then(res => setMovie(res.data))
			.catch(e => setError(e.response?.data?.message));
	}, [id]);

	const handleSubmit = e => {
		e.preventDefault();
		axios
			.put(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
			.then(res => {
				console.log(res.data);
				navigate('/')
			})
			.catch(e=> console.log(e));
	}

	const handleChange = e => {
		const {name, value } = e.target;
		setMovie({...movie, [name]:value})
		// const updatedMovie = {...movie}
		// updatedMovie[name]= value
		// setMovie(updatedMovie)
	}

return (
	<div>
		{error && <p>Error</p>}
		{movie && (
			<>
			<h2>Update The Movie</h2>
		<form onSubmit={handleSubmit}>
			<label htmlFor="">Title</label>
			<input 
				type="text"
				name="title"
				value={movie?.title || ''}
				onChange={handleChange}
				required
			/>
			<input 
				type="text"
				name="director"
				value={movie?.director || ''}
				onChange={handleChange}
			/>
			<input 
				type="number"
				name="year"
				value={movie?.year || ''}
				onChange={handleChange}
			/>
			<button>Update Movie</button>
		</form>
			</>
		)}
		
	</div>
)
}

export default UpdateMovie