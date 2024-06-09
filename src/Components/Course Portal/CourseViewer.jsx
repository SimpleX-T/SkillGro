import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { Tag } from "../../Pages/Home/LandingPage";
import { StarIcon } from "@heroicons/react/16/solid";

const courses = [
	{
		id: 1,
		imgUrl: "/Courses/laravel_pro_expert_development.png",
		title: "Learning JavaScript With Imagination",
		tag: "development",
		prevPrice: 20,
		curPrice: 9,
		tutorTitle: "David Miller",
		tutorImg: "/Courses/tutor1.jpg",
		reviews: 4.8,
		duration: 40800,
		numWatched: 5,
		numCompleted: 22,
	},
	{
		id: 2,
		imgUrl: "/Courses/ai_beginner_design.png",
		title: "the complete graphic design for beginners",
		tag: "design",
		prevPrice: 20,
		curPrice: 10,
		tutorTitle: "wilson",
		tutorImg: "/Courses/tutor2.jpg",
		reviews: 4.5,
		duration: 254700,
		numWatched: 60,
		numCompleted: 202,
	},
	{
		id: 3,
		imgUrl: "/Courses/js_pro_business.png",
		title: "learning javascript with imagination",
		tag: "data science",
		prevPrice: 0,
		curPrice: 20,
		tutorTitle: "warren",
		tutorImg: "/Courses/tutor3.jpg",
		reviews: 4.8,
		duration: 65400,
		numWatched: 8,
		numCompleted: 66,
	},
	{
		id: 4,
		imgUrl: "/Courses/financial_business.png",
		title: "financial analyst training & investing course",
		tag: "business",
		prevPrice: 20,
		curPrice: 15,
		tutorTitle: "robert fox",
		tutorImg: "/Courses/tutor4.jpg",
		reviews: 4.2,
		duration: 40800,
		numWatched: 5,
		numCompleted: 22,
	},
];

function CourseCard({ course }) {
	return (
		<>
			<div className='w-[25%] rounded-lg bg-white overflow-hidden border-2 border-solid'>
				<div className='px-6 py-4 flex items-center rounded-lg overflow-hidden'>
					<img
						src={course.imgUrl}
						className='w-full object-cover'
						alt={course.title}
					/>
				</div>

				<div className='flex items-center px-6 justify-between'>
					<Tag text={course.tag} />
					<div className='flex items-center gap-2'>
						{course.prevPrice > 0 && (
							<p className='text-[14px] line-through text-gray-300'>
								{formatCurrency(course.prevPrice)}
							</p>
						)}
						<p className='text-[16px] text-[#5751E1] font-semibold'>
							{formatCurrency(course.curPrice)}
						</p>
					</div>
				</div>

				<div className='px-6 py-4'>
					<h3 className='font-semibold leading-tight capitalize text-lg mb-2 text-[#161439]'>
						{course?.title}
					</h3>

					<div className='flex items-center mb-4'>
						<img
							className='w-8 h-8 rounded-full mr-2 object-cover'
							src={course.tutorImg}
							alt={course.tutorTitle}
						/>
						<span className='text-sm text-[#6D6C80] capitalize mr-auto'>
							{course.tutorTitle}
						</span>
						<div className='ml-2 flex items-center'>
							<StarIcon className='w-5 h-5 inline-block text-yellow-500' />
							<span className='text-xs text-[#7F7E97]'>
								({course.reviews} Reviews)
							</span>
						</div>
					</div>

					<div className='flex items-center text-gray-500 text-sm first-letter:border-t-2 border-solid'>
						{/* continuing here next time */}
						<div className='flex gap-1'>
							<img
								src='/Icons/book.png'
								alt=''
								className='w-4 h-4 object-contain'
							/>
							<span>
								{course.numWatched > 9
									? course.numWatched
									: `0${course.numWatched}`}
							</span>
						</div>
						<svg
							className='w-4 h-4 mx-2'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>
						<span>11h 20m</span>
						<svg
							className='w-4 h-4 mx-2'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
							/>
						</svg>
						<span>22</span>
					</div>
				</div>
			</div>
		</>
	);
}

function CourseView({ name }) {
	const [curCourses, setCurCourses] = useState(courses);

	return (
		<div name={name}>
			<div className='w-5/6 mx-auto flex items-center gap-6'>
				{curCourses.map((course) => (
					<CourseCard course={course} key={course.id} />
				))}
			</div>
		</div>
	);
}

function CourseViewer() {
	const [activeState, setActiveState] = useState("allCourses");

	function handleClick(e) {
		setActiveState(e.target.getAttribute("for"));
	}

	return (
		<section>
			<ul className='flex items-center gap-12 w-1/2 mb-12 p-2 justify-center mx-auto border-[#D9D9F3] border-b-2 border-solid'>
				<p onClick={() => handleClick(e)} opens='allCourses'>
					All courses
				</p>
				<p onClick={() => handleClick(e)} opens='design'>
					Design
				</p>
				<p onClick={() => handleClick(e)} opens='business'>
					Business
				</p>
				<p onClick={() => handleClick(e)} opens='development'>
					Development
				</p>
			</ul>
			<CourseView />
		</section>
	);
}
export default CourseViewer;
