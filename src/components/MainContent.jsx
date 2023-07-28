import {Routes, Route } from 'react-router-dom'
import Movies from './Movies'
import NewMovie from './NewMovie'
import MovieDetails from './MovieDetails'
import UpdateMovie from './UpdateMovie'


const MainContent = () => {
return (
<main>
	<Routes>
		<Route path='/' element={<Movies/>}></Route>
		<Route path='/movies/new' element={<NewMovie/>}></Route>
		<Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/update" element={<UpdateMovie />} />
	</Routes>
</main>
)
}

export default MainContent