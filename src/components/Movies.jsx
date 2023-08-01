import axios  from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'flowbite-react';
import { formatYear } from '../utils/utils'

/*
	TODO: 
	1) create a state to hold all movies
	2) once the component is loaded, create axios GET request to the backend ( /api/movies )
	3) map through the movies & show the movies cards
*/
const Movies = () => {
	const [movies, setMovies] = useState([]);

	useEffect( ()=> {
		axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/moviesdb`)
		.then(res => setMovies(res.data))
		.catch(e => console.error(e));
	}, []);

	const posterURL = 'https://image.tmdb.org/t/p/original';

//console.log(movies);
return (
	<div className='flex justify-center flex-wrap bg-gray-900 py-10 text-center'>
	
	{movies.map((movie)=> (
		<Card key={movie.id} className="w-80 p-1 m-3 bg-slate-200 border border-gray-900 rounded-lg shadow">
			<Link to={`/movies/${movie.id}`}>
			<img src={`${posterURL}${movie.poster}`} alt={movie.title} className='w-full'></img>
				<h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white mt-3">
					{movie.title}
				</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400"> {formatYear(movie.year)}</p>
			</Link>
		</Card>
	))}


	</div>
)
}

export default Movies




