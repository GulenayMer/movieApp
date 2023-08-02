
const Footer = () => {
return (
<footer className="bg-gray-800 rounded-sm shadow absolute first-letter:bottom-0 left-0 right-0">
	<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
		<span className="text-sm text-gray-200 sm:text-center">© 2023 
			<a href="#" className="hover:underline">MG™</a>. All Rights Reserved.
		</span>
		<ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-200 sm:mt-0">
			<li><a href="#" className="mr-4 hover:underline md:mr-6 ">About</a></li>
			<li><a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a></li>
			<li><a href="#" className="hover:underline">Contact</a></li>
		</ul>
    </div>
</footer>
)
}

export default Footer


