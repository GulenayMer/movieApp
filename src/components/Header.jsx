import {NavLink} from 'react-router-dom'
import Intro from "./Intro"

const Header = () => {
return (
	<div>
		<nav className='bg-slate-900 py-3 rounded-sm'>
			<ul className="flex justify-center items-center space-x-10">
				{[
					['Home', '/'],
					['Movies', '/movies'],
					['Add Movie', 'movies/new'],
					['Contact', '/contact']
				].map(([title, url]) => (
					<li key={url} className="font-medium p-3 text-slate-300 rounded-lg hover:bg-slate-300 hover:text-slate-900">
						<NavLink to={url}>{title}</NavLink>
					</li>	
				))}
			{/* 	<li className="font-medium p-3 text-slate-700 rounded-lg hover:bg-slate-300 hover:text-slate-900"><NavLink to='/movies'>Movies</NavLink></li>
				<li className="font-medium p-3 text-slate-700 rounded-md hover:bg-slate-300 hover:text-slate-900"><NavLink to='/addmovie'>Add Movie</NavLink></li>		
				<li className="font-medium p-3 text-slate-700 rounded-md hover:bg-slate-300 hover:text-slate-900"><NavLink to='/contact'>Contact</NavLink></li> */}
			</ul>
		</nav>
		<Intro></Intro>
	</div>
)
}

export default Header


