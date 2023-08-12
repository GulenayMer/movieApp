import axios  from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { formatYear } from '../utils/utils'
import { Card } from 'flowbite-react';
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
	<div className='flex flex-col justify-center flex-wrap bg-gradient-to-l from-slate-400 to-yellow-300 p-20 text-center'>
		<h2 className="text-xl font-bold uppercase my-10">Popular Movies in 2023</h2>
		<div className='grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4'>
		{movies.map((movie)=> (
			<Card key={movie.id} className="bg-slate-200 border border-gray-900 rounded-lg 
			shadow transition ease-in-out delay-110 hover:-translate-y-2 hover:scale-100">
				<Link to={`/movies/${movie.id}`}>
					<img src={`${posterURL}${movie.poster}`} alt={movie.title} width={200} height={200}
					className="rounded-t-md" />
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




