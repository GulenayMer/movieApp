import {NavLink} from 'react-router-dom'
import { useState, useRef, useEffect } from 'react';
import Intro from "./Intro"

const toggleBtn = `
inline-flex items-center p-2 w-10 h-10 
justify-center 
text-sm text-gray-500 rounded-lg md:hidden
hover:bg-gray-100
focus:outline-none focus:ring-2 
focus:ring-gray-200`

const Header = () => {

	const [hamburgerMenu, setHamburgerMenu] = useState(false);
	const menuRef = useRef(null);

	const handleHamburgerMenu = () => {
		setHamburgerMenu(!hamburgerMenu);
	}

	const handleOutsideClick = (e) => {
		if (hamburgerMenu && menuRef.current && !menuRef.current.contains(e.target)) {
			setHamburgerMenu(false);
		}
	};

	useEffect( () => {
		document.addEventListener('click', handleOutsideClick);
    // Clean up event listener when the component unmounts
    return () => {
    	document.removeEventListener('click', handleOutsideClick);
    };
	}, [])

return (
	<>
	<nav className="border-gray-200 bg-gray-100">
	<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
		<a href="#" className="flex items-center">
			<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MovieTime</span>
		</a>
		<button type="button" aria-expanded={hamburgerMenu}  onClick={handleHamburgerMenu} className={toggleBtn}>
			<svg className="w-5 h-5 relative" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
					<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
			</svg>
		</button>
		
		{ !hamburgerMenu ? (
		<div ref={menuRef} className="hidden w-full md:block md:w-auto">
			<ul className="flex flex-col font-medium mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
			{[
				['Home', '/'],
				['Movies', '/movies'],
				['Add Movie', 'movies/new'],
				['Contact', '/contact']
			].map(([title, url]) => (
				<li key={url} >
					<a href="#" className="block hover:bg-gray-200 text-gray-700 md:p-1" 
					aria-current="page"><NavLink to={url}>{title}</NavLink></a>
				</li>	
			))}
			</ul>
		</div>
		) : (
			<div ref={menuRef} className="absolute z-50 top-16 right-0 px-4 w-60 text-center list-none divide-y divide-gray-100 rounded-lg shadow">
			<ul className="flex flex-col font-medium  rounded-lg bg-gray-50">
			{[
				['Home', '/'],
				['Movies', '/movies'],
				['Add Movie', 'movies/new'],
				['Contact', '/contact']
			].map(([title, url]) => (
				<li key={url} >
					<a href="#" className="block py-3 pl-3 pr-4  ounded text-red-700 md:p-0" 
					aria-current="page"><NavLink to={url}>{title}</NavLink></a>
				</li>	
			))}
			</ul>
		</div>
		)}
	</div>
	</nav>

	<Intro></Intro>
	</>
)
}

export default Header


