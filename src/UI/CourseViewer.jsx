import { useState } from "react";
import { convertSecondsToTime, formatCurrency } from "../utils/helpers";
import { Tag } from "../Pages/Home/LandingPage";
import { StarIcon } from "@heroicons/react/16/solid";
import { AcademicCapIcon, ClockIcon } from "@heroicons/react/24/outline";

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
			<div className='mx-auto w-4/5 md:max-w-72 rounded-lg bg-white overflow-hidden border-2 border-solid'>
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

					<div className='flex items-center mb-4 justify-between'>
						<img
							className='w-8 h-8 rounded-full mr-2 object-cover'
							src={course.tutorImg}
							alt={course.tutorTitle}
						/>
						<span className='text-xs md:text-sm text-[#6D6C80] capitalize mr-auto'>
							{course.tutorTitle.split(" ")[0]}
						</span>
						<div className='ml-2 flex items-center'>
							<StarIcon className='w-4 h-4 inline-block text-yellow-500' />
							<span className='text-xs md:text-sm text-[#7F7E97]'>
								({course.reviews} Reviews)
							</span>
						</div>
					</div>

					<div className='flex items-center justify-between text-gray-500 text-sm first-letter:border-t-2 border-solid'>
						{/* continuing here tomorrow */}
						<div className='flex gap-1 items-center'>
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
						<div className='flex gap-1 items-center'>
							<ClockIcon width={16} />
							<span>{convertSecondsToTime(course.duration)}</span>
						</div>
						<div className='flex gap-1 items-center'>
							<AcademicCapIcon width={16} />
							<span>{course.numCompleted}</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

function CourseView({ courses }) {
	return (
		<div>
			<div className='w-full md:w-5/6 mx-auto px-4 md:p-0 flex flex-wrap flex-row items-center gap-6'>
				{courses.length > 0 ? (
					courses.map((course) => (
						<CourseCard course={course} key={course.id} />
					))
				) : (
					<p className='text-sm mx-auto'>
						No courses with that tag for the moment, please come
						back later
					</p>
				)}
			</div>
		</div>
	);
}

function CourseLink({ opens, onclick, text, selectedCourse }) {
	return (
		<p
			className={`text-xs md:text-lg cursor-pointer pb-2 text-gray-500 ${
				opens === selectedCourse
					? "border-b-4 border-solid border-[#5751E1] text-black"
					: ""
			}`}
			onClick={() => onclick(opens)}
			opens={opens}>
			{text}
		</p>
	);
}

function CourseViewer() {
	const [selectedCourse, setSelectedCourse] = useState("allCourses");
	const [filteredCourses, setFilteredCourses] = useState(courses);

	function handleSetFilteredCourses(tag) {
		if (tag === "allCourses") setFilteredCourses(courses);
		else setFilteredCourses(courses.filter((course) => course.tag === tag));
	}

	function handleClick(val) {
		handleSetFilteredCourses(val);
		setSelectedCourse(val);
	}

	return (
		<section>
			<ul className='flex items-center gap-6 px-4 md:gap-12 w-full md:w-1/2 mb-12 justify-center mx-auto border-[#D9D9F3] border-b-2 border-solid'>
				<CourseLink
					opens='allCourses'
					text='All Courses'
					onclick={handleClick}
					selectedCourse={selectedCourse}
				/>
				<CourseLink
					opens='design'
					text='Design'
					onclick={handleClick}
					selectedCourse={selectedCourse}
				/>
				<CourseLink
					opens='business'
					text='Business'
					onclick={handleClick}
					selectedCourse={selectedCourse}
				/>
				<CourseLink
					opens='development'
					text='Development'
					onclick={handleClick}
					selectedCourse={selectedCourse}
				/>
			</ul>
			<CourseView courses={filteredCourses} />
		</section>
	);
}
export default CourseViewer;
