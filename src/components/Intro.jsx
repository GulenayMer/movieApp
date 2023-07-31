import { Link } from 'react-router-dom';

const Intro = () => {
return (

<section className="bg-center
	bg-[url('https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')]
	bg-purple-200 bg-blend-multiply">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
			Discover the Best Movies
		</h1>
        <p className="mb-8 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-48">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias consequuntur dolorem vitae similique aliquam,
			eaque magnam quam tenetur quasi cumque neque laudantium exercitationem? Fugit nesciunt sequi accusamus ipsam cumque blanditiis.
		</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
		<button
			className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center
			text-white rounded-lg bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-blue-300">
			<Link to={`/movies`}>
				Check Out Movies
				</Link>
				<svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" 
				viewBox="0 0 14 10">
					<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
					d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
            <button className="inline-flex justify-center hover:text-gray-900 items-center 
			py-3 px-5 text-base font-medium text-center text-white rounded-lg border
			border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </button>  
        </div>
		
    </div>
</section>

)
}

export default Intro