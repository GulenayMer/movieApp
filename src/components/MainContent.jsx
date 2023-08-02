import {Routes, Route } from 'react-router-dom'
import Movies from './Movies'
import NewMovie from './NewMovie'
import MovieDetails from './MovieDetails'
import Intro from './Intro'
import Genres from './Genres'

const MainContent = () => {
return (
<main>
	<Routes>
		<Route path='/' element={<Intro/>}></Route>
		<Route path='/movies' element={<Movies/>}></Route>
		<Route path='/genres' element={<Genres/>}></Route>
		<Route path='/movies/new' element={<NewMovie/>}></Route>
		<Route path='/movies/:id' element={<MovieDetails />}></Route>
	</Routes>
</main>
)
}

export default MainContent