import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate} from "react-router-dom";

const btnUpdate = `
text-white bg-green-700
hover:bg-green-200 hover:text-black
focus:outline-none focus:ring-4 focus:ring-green-300 
font-medium rounded-lg 
text-sm px-5 py-2.5 mr-2 mb-2 w-80
`
const btnCancel = `
text-white bg-gray-900 
hover:bg-gray-100 hover:text-gray-900
focus:ring-4 focus:outline-none focus:ring-gray-200 
rounded-lg border border-gray-200
text-sm font-medium px-5 py-2.5 w-80
`

const inputClass = `
mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
focus:border-blue-500 block w-80 p-2.5`

const UpdateMovie = ( {id, handleUpdateModal, updateModal} ) => {

	const [movie, setMovie] = useState('');
	const navigate = useNavigate();

	useEffect( () => {
		axios
			.get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/moviesdb/${id}`)
			.then(res => setMovie(res.data))
			.catch(e => console.log(e.message));
	}, [id]);

	const handleSubmit = e => {
		e.preventDefault();
		axios
			.put(`${import.meta.env.VITE_SERVER_BASE_URL}/api/moviesdb/${id}`, movie)
			.then(res => {
				//console.log(res.data);
				handleUpdateModal(!updateModal);
				navigate(`/movies/${id}`)
			})
			.catch(e => console.log(e));
	}

	const handleChange = e => {
		const {name, value } = e.target;
		setMovie({...movie, [name]:value})
		// const updatedMovie = {...movie}
		// updatedMovie[name]= value
		// setMovie(updatedMovie)
	}

return (
<div  className="relative bg-white rounded-lg shadow p-6">
		<h2 className="font-bold text-lg tracking-wide uppercase text-center">
			Update the Movie 
		</h2>
		<form onSubmit={handleSubmit} className="flex justify-center flex-col mt-4">
			<input 
				type="text"
				name="image"
				value={movie?.poster}
				placeholder="image link"
				onChange={handleChange}
				className={inputClass}
			></input>
			<input 
				type="text" 
				name="title" 
				placeholder="title"
				value={movie?.title}
				required
				onChange={handleChange}
				className={inputClass}
			></input>
			<input 
				type="text" 
				name="director" 
				placeholder="director"
				value={movie?.director}
				onChange={handleChange}
				className={inputClass}
			></input>
			<input 
				type="number" 
				name="year" 
				placeholder="year"
				value={movie?.year}
				onChange={handleChange}
				className={inputClass}
			></input>
			<input 
				type="number" 
				name="rating" 
				placeholder="imdb rating"
				value={movie?.rating}
				onChange={handleChange}
				className={inputClass}
			></input>
				<input 
				type="text" 
				name="description" 
				placeholder="description"
				value={movie?.description}
				required
				onChange={handleChange}
				className={inputClass}
			></input>
			<button className={btnUpdate}>
				Update the Movie
			</button>
			<button  onClick={handleUpdateModal} className={btnCancel}>
				Cancel
			</button>
		</form>
	</div>
)
}

export default UpdateMovie