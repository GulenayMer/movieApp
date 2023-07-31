import {NavLink} from 'react-router-dom'
import Intro from "./Intro"

const Header = () => {
return (
	<div>
		<nav className='bg-slate-900 p-3 flex-col rounded-sm flex md:flex-row justify-between'>
			<span className='text-gray-200'>WatchMovies</span>
			<ul className="flex justify-center items-center md:flex-row ">
				{[
					['Home', '/'],
					['Movies', '/movies'],
					['Add Movie', 'movies/new'],
					['Contact', '/contact']
				].map(([title, url]) => (
					<li key={url} className="font-medium  px-3 py-2 text-slate-200 rounded-md
					hover:bg-slate-300 hover:text-slate-900">
						<NavLink to={url}>{title}</NavLink>
					</li>	
				))}
			</ul>
		</nav>
		<Intro></Intro>
	</div>
)
}

export default Header


