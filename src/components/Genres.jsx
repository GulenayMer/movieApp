import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Card } from 'flowbite-react';
import { formatYear } from '../utils/utils'

const Genres = () => {
	const [genres, setGenres] = useState([]);
	const [categoryMovies, setCategoryMovies] = useState({});

	useEffect(() => {
		axios
			.get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/genres`)
			.then((res) => setGenres(res.data))
			.catch((e) => console.error(e));
	}, []);

	useEffect(() => {
		const fetchMoviesForCategories = async () => {
			const categoryMoviesData = {};
			for (const genre of genres) 
			{
				const response = await axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/genres/${genre.id}`);
				categoryMoviesData[genre.name] = response.data.slice(0,4);
			}
			setCategoryMovies(categoryMoviesData);
		};
		fetchMoviesForCategories();
	}, [genres]);


const posterURL = 'https://image.tmdb.org/t/p/original';
//console.log(categoryMovies);
//console.log(genres);
return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-l from-slate-400 to-yellow-300 p-20">
    {Object.keys(categoryMovies).map((categoryTitle) => (
		<div key={categoryTitle} className="text-center p-20  m-3 rounded-md bg-gradient-to-l from-slate-400/40 to-yellow-100/40">
			<h2 className="text-xl font-bold uppercase mb-10">{categoryTitle}</h2>
			<div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
			{categoryMovies[categoryTitle].map((movie) => (
			<Card key={movie.id} className="bg-slate-200 border border-gray-900 rounded-lg 
			shadow transition ease-in-out delay-120 hover:-translate-x-1 hover:scale-110">
				<Link to={`/movies/${movie.id}`}>
				<img
					src={`${posterURL}${movie.poster_path}`}
					alt={movie.title}
					className=" w-full" 
				></img>
				</Link>
				<h5 className="text-md font-semibold tracking-tight text-gray-900 mt-1">
						{movie.title}
				</h5>
			</Card>
			))}
			</div>
		</div>
	))}
    </div>
	);
};

export default Genres;
