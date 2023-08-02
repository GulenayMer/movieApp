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
	<div className='flex justify-center flex-wrap bg-gradient-to-l from-slate-400 to-yellow-300 p-20 text-center'>
		<h2 className="text-xl font-bold uppercase mt-10 mb-6">Popular Movies in 2023</h2>
		<div className='flex justify-center flex-wrap'>
		{movies.map((movie)=> (
			<Card key={movie.id} className="w-80 p-2 m-3 bg-slate-200 rounded-lg shadow
					transition ease-in-out delay-120 hover:-translate-x-1 hover:scale-110">
				<Link to={`/movies/${movie.id}`}>
				<img src={`${posterURL}${movie.poster}`} alt={movie.title} className='w-full'></img>
					<h5 className="text-md font-bold tracking-tight text-gray-900 mt-3">
						{movie.title}
					</h5>
					<p className="font-normal text-gray-700"> {formatYear(movie.year)}</p>
				</Link>
			</Card>
		))}
		</div>
	</div>
)
}

export default Movies




