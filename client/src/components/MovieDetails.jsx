import { useEffect, useState } from "react"
import axios from 'axios'
import {Link, useParams, useNavigate} from 'react-router-dom'


const MovieDetails = () => {
	const [movie, setMovie] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect( () => {
		axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
		.then(res => setMovie(res.data))
		.catch(e => setError(e.response?.data?.message));
	}, []);


	const handleDelete = () => {
		axios.delete(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
			.then(res => {
				console.log(res);
				navigate('/movies')
			})
			.catch(e => console.log(e));
	};

return (
	<div className="flex justify-center bg-gray-200 w-full py-20">
	{ error && <p style={{color:'red'}}>{error}</p>}
	{ movie && (
		<>
		<div key={movie.id} className="flex flex-col items-center bg-white border
		border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 mt-20">
			<img src={movie.poster} alt={movie.title} 
				className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'/> 
			<div className="flex flex-col justify-between p-4 leading-normal">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
				{movie.title}
				</h5>
		<p className=" mb-3 font-normal text-gray-700">Year: {movie.year}</p>
			<p className=" mb-3font-normal text-gray-700">Director: {movie.director}</p>
			<p className=" mb-3 font-normal text-gray-700">IMDb: {movie.rating}</p>
			<button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400
			to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 
			dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
			<Link to={`/movies/${id}/update`}>
						Update Movie</Link>	
			</button>
			<button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500
			to-red-600 hover:bg-gradient-to-br 
			focus:ring-4 focus:outline-none focus:ring-red-300
			font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
			onClick={handleDelete}>
				Delete Movie
			</button>
		</div>
	</div>
	</>
)}
	</div>
)}

export default MovieDetails