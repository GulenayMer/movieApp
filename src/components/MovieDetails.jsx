import { useEffect, useState } from "react"
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'
import { formatYear } from '../utils/utils'
import UpdateMovie from "./UpdateMovie"

//
const btnClass = `
text-white 
bg-gradient-to-r from-red-400 via-red-500 to-red-600 
hover:bg-gradient-to-br 
focus:ring-4 focus:outline-none focus:ring-red-300
font-medium rounded-lg 
text-sm px-5 py-2.5 
text-center md:w-[20%]
mx-3`

const btnClass2 = `
text-gray-900 
bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 
hover:bg-gradient-to-br 
focus:ring-4 
focus:outline-none focus:ring-lime-300
font-medium rounded-lg text-sm
text-center md:w-[20%]
px-5 py-2.5 
mx-3`

//

const MovieDetails = () => {
	const [movie, setMovie] = useState('');
	const [error, setError] = useState('');
	const [showModal, setShowModal] = useState(false);
	const [updateModal, setUpdateModal] = useState(false);
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect( () => {
		axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/moviesdb/${id}`)
		.then(res => setMovie(res.data))
		.catch(e => setError(e.response?.data?.message));
	}, [id]);

	const posterURL = 'https://image.tmdb.org/t/p/original';

	const handleDelete = () => {
		axios.delete(`${import.meta.env.VITE_SERVER_BASE_URL}/api/moviesdb/${id}`)
			.then(res => {
				console.log(res);
				navigate('/movies')
			})
			.catch(e => console.log(e));
	};

	const handleToggleModal = () => {
		setShowModal(!showModal);
	};

	const handleConfirmDelete = () =>{
		setShowModal(false);
		handleDelete();
	}

	const handleUpdateModal = () => {
		setUpdateModal(!updateModal);
	}

return (
	<div className="flex justify-center bg-gray-200 w-full py-20 px-10">
	{ error && <p style={{color:'red'}}>{error}</p>}
	{ movie && (
	<div key={movie.id} className="flex flex-col items-center bg-slate-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xxl hover:bg-slate-300">
		<img src={`${posterURL}${movie.poster}`} alt={movie.title} 
			className='object-cover w-full rounded-t-lg h-100 md:h-auto md:w-60 md:rounded-none md:rounded-l-lg'
		/>
		<div className="flex flex-col justify-between p-5 leading-normal">
			<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
				{movie.title}
			</h5>
			{[
				['Year: ', `${formatYear(movie.year)}`],
				['Director: ', `${movie.director}`],
				['IMDb: ',  `${movie.rating}`],
				[' ',  `${movie.description}`]
			].map( ([text, value]) => (
				<p key={value} className=" mb-3 font-normal text-gray-700">
					<span className="font-bold">{text}</span> 
					{value}
				</p>
			))}
			<div className="flex justify-center mt-8">
				<button type="button" className={btnClass2} onClick={handleUpdateModal}>
				Update Movie
				</button>
				<button type="button" className={btnClass} onClick={handleToggleModal}>
					Delete Movie
				</button>
		
			{showModal && (
			<div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
				<div className="relative bg-white rounded-lg shadow">
				<button type="button" 
					className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 
					rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
					<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
					</svg>
					<span className="sr-only">Close modal</span>
				</button>
				<div className="p-6 text-center">
					<svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
					</svg>
					<h3 className="mb-5 text-lg font-normal text-gray-500">
						Are you sure you want to delete this product?
					</h3>
					<button type="button" onClick={handleConfirmDelete} 
						className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300
									font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
						Yes, Im sure
					</button>
					<button type="button"  onClick={handleToggleModal}
						className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-nonefocus:ring-gray-200 
						rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5hover:text-gray-900 focus:z-10 ">
						No, cancel
					</button>
				</div>
			</div>
		</div>)}

		{ updateModal && (
			<div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
			<UpdateMovie handleUpdateModal={handleUpdateModal}></UpdateMovie>
			</div>
		)}
		</div>
		</div>
	</div>)}
		
</div>
)}

export default MovieDetails