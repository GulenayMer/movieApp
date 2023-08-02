import { Link } from 'react-router-dom';

const Intro = () => {
return (

<section className="relative bg-center h-[100vh]
	bg-[url('https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1156&q=80')]
	bg-cover opacity-90">
    <div className="absolute flex flex-col justify-center items-center top-[50%] right-[50%] translate-y-[-50%] max-w-[100%] translate-x-[100%] 
		text-center px-3 md:p-0">
        <h1 className=" mb-2 md:mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-5xl">
			Discover Movies
		</h1>
        <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias consequuntur dolorem vitae similique aliquam,
			eaque magnam quam tenetur quasi cumque neque laudantium exercitationem?
		</p>
        <div className="flex flex-col space-y-2 justify-center  md:flex-row md:space-x-4">
		<button
			className="inline-flex justify-center items-center py-3 px-4 text-base font-medium text-center
			text-white rounded-lg bg-purple-700 hover:bg-purple-900 transition ease-in-out delay-120 hover:-translate-x-1 hover:scale-110">
			<Link to={`/movies`}>
				Check Out Collection
				</Link>
				<svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" 
				viewBox="0 0 14 10">
					<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
					d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
            <button className="inline-flex justify-center bg-gray-100  items-center py-3 px-5 md:py-0
			text-base font-medium text-center text-gray-900 rounded-lg border transition ease-in-out delay-120 hover:-translate-x-1 hover:scale-110
			border-gray-900 hover:bg-gray-900 hover:text-gray-50">
            <Link to={`/genres`}>
				2023`s Favorites
			</Link>
            </button>  </div>
        
		
    </div>
</section>

)
}

export default Intro