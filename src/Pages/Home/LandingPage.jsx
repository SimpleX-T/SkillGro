import { AcademicCapIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { PlayIcon } from "@heroicons/react/16/solid";
import { BookOpenIcon, SparklesIcon } from "@heroicons/react/24/outline";
import CourseViewer from "../../Components/Course Portal/CourseViewer";

function AboutCard({
	text,
	icon,
	title,
	backgroundColor,
	backdropColor,
	iconColor,
}) {
	return (
		<div
			style={{ boxShadow: `5px 5px 0px #${backdropColor}` }}
			className={`rounded-xl p-4 ${
				backgroundColor
					? `bg-[#${backgroundColor}] border border-solid border-[#${backgroundColor}]`
					: ""
			} relative p-8`}>
			<span className='absolute top-4 right-4'>
				<SparklesIcon
					width={40}
					strokeWidth={0.8}
					color='rgba(39,39,47,0.2)'
				/>
			</span>
			<div className='flex gap-2 items-center mb-3'>
				<span className={`rounded-full p-2 bg-[#${iconColor}]`}>
					{icon}
				</span>
				<h3 className='text-lg font-semibold text-[#161439]'>
					{title}
				</h3>
			</div>
			<p className='capitalize text-[13px] font-light'>{text}</p>
		</div>
	);
}

export function Tag({
	text,
	textColor = "indigo-600",
	backgroundColor = "indigo-100",
}) {
	return (
		<span
			className={`rounded-3xl text-xs py-1 px-2 capitalize font-semibold text-${textColor} bg-${backgroundColor}`}>
			{text}
		</span>
	);
}

// export function Tag({
// 	text,
// 	textColor = "5751E1",
// 	backgroundColor = "#efeefe",
// }) {
// 	return (
// 		<span
// 			className={`rounded-3xl text-xs text-[#${textColor}] bg-[${backgroundColor}] py-1 px-2  capitalize font-semibold`}>
// 			{text}
// 		</span>
// 	);
// }

function LandingPage() {
	return (
		<>
			<section className='flex flex-col md:flex-row items-center relative justify-between md:w-5/6 w-full px-4 md:p-0 mx-auto bg-fixed gap-10 bg-hero-bg bg-no-repeat bg-left my-12'>
				<div className='w-full p-1 md:w-1/2 md:p-4'>
					<h3 className='text-xl md:text-4xl font-semibold text-[#161439] select-none'>
						Learning is
						<span className='text-white bg-text-svg px-1 bg-no-repeat bg-cover bg-center mx-2'>
							what you
						</span>
						<br />
						Make of it. Make it Yours at SkillGro.
					</h3>
					<div className='flex items-center h-8 mt-8 gap-12'>
						<button className='bg-[#5751E1] text-white md:font-bold py-1 px-3 md:py-3 md:px-5 rounded-full transition-colors duration-300 drop-shadow-custom hover:bg-[#050071] active:drop-shadow-none active:bg-[#161439] active:text-[#f7eef9] flex items-center gap-2'>
							<span>Start Free Trial</span>
							<ArrowRightIcon width={20} />
						</button>
						<button className='rounded-full flex items-center justify-center border border-[#161439] p-2 md:p-[14px] bg-[#FFC224] text-[#161439] font-bold drop-shadow-custom active:drop-shadow-none active:text-[#f7eef9]'>
							<PlayIcon width={20} />
						</button>
					</div>
				</div>
				<div className='w-1/2'>
					<img
						src='/heroImg_1.png'
						className='w-full hidden md:block select-none'
						alt='Hero Image'
					/>
				</div>
			</section>

			<section className='slanted-bg relative bg-white mx-auto'>
				<div className='carousel w-[120%] -ml-3 h-8 md:h-16 overflow-hidden flex items-center origin-top-left transform -rotate-[6deg] bg-[#06042E] '>
					<div className='slide flex items-center gap-12 md:gap-32 w-full'>
						<img
							className='w-16 md:w-full'
							src='/brands/udemy.png'
							alt='Udemy'
						/>
						<img
							className='w-16 md:w-full'
							src='/brands/codecademy.png'
							alt='Codecademy'
						/>
						<img
							className='w-16 md:w-full'
							src='/brands/amd.png'
							alt='AMD'
						/>
						<img
							className='w-16 md:w-full'
							src='/brands/amazon.png'
							alt='Amazon'
						/>
						<img
							className='w-16 md:w-full'
							src='/brands/coursera.png'
							alt='Coursera'
						/>
						<img
							className='w-16 md:w-full'
							src='/brands/udemy.png'
							alt='Udemy'
						/>
						<img
							className='w-16 md:w-full'
							src='/brands/codecademy.png'
							alt='Codecademy'
						/>
						<img
							className='w-16 md:w-full'
							src='/brands/amd.png'
							alt='AMD'
						/>
						<img
							className='w-16 md:w-full'
							src='/brands/amazon.png'
							alt='Amazon'
						/>
						<img
							className='w-16 md:w-full'
							src='/brands/coursera.png'
							alt='Coursera'
						/>
						<img
							className='w-16 md:w-full'
							src='/brands/udemy.png'
							alt='Udemy'
						/>
						<img
							className='w-16 md:w-full'
							src='/brands/codecademy.png'
							alt='Codecademy'
						/>
						<img
							className='w-16 md:w-full'
							src='/brands/amd.png'
							alt='AMD'
						/>
						<img
							className='w-16 md:w-full'
							src='/brands/amazon.png'
							alt='Amazon'
						/>
						<img
							className='w-16 md:w-full'
							src='/brands/coursera.png'
							alt='Coursera'
						/>
					</div>
				</div>

				<div className='w-full md:w-5/6 mx-auto py-4'>
					<section className='w-2/4 mx-auto text-center my-6'>
						<Tag text='Our Top Features' />
						<h2 className='text-[#161439] text-2xl font-bold my-3'>
							Achieve Your Goal With SkillGrow
						</h2>
						<span className='text-xs text-[#6D6C80]  md:w-[60ch] inline-block text-center'>
							when an unknown printer took a galley of type and
							scrambled make specimen book has survived not only
							five centuries
						</span>
					</section>
					<section className='flex flex-col md:flex-row items-center gap-8 w-5/6 mx-auto mt-6'>
						<AboutCard
							iconColor='1BCBE3'
							backgroundColor='F1FDFF'
							backdropColor='C9E4E9'
							title='Expert Tutors'
							text='When an unknown printer took a gallery offer type and scrambled makes.'
							icon={<AcademicCapIcon width={30} color='white' />}
						/>
						<AboutCard
							iconColor='5751E1'
							backdropColor='C8C1ED'
							backgroundColor='f7eef9'
							title='Effective Courses'
							text='When an unknown printer took a gallery offer type and scrambled makes.'
							icon={<BookOpenIcon width={30} color='white' />}
						/>
						<AboutCard
							backgroundColor='FFD53F'
							title='Earn Certificate'
							text='When an unknown printer took a gallery offer type and scrambled makes.'
							iconColor='FFC224'
							backdropColor='ebe0c4'
							icon={<img src='/cert_svg.svg' width={30} />}
						/>
					</section>

					<section className='flex flex-col md:flex-row items-center gap-4 mt-12 px-4 md:p-0 w-full md:w-5/6 mx-auto'>
						<div className='w-1/2 hidden md:block'>
							<img
								width={400}
								src='/heroImg_2.png'
								alt='Man Smiling with books in hand'
							/>
						</div>

						<div className='w-full md:w-1/2'>
							<Tag text='get more about us' />
							<h2 className='text-[#161439] text-2xl font-bold my-3 capitalize'>
								thousand of{" "}
								<span className='bg-text-svg bg-no-repeat bg-cover bg-center p-1'>
									courses
								</span>
								<br />
								now in one place
							</h2>
							<p className='text-xs md:w-[60ch] leading-loose mb-4'>
								Groove’s intuitive shared inbox makes it easy
								for team members to organize, prioritize and.In
								this episode of the Smashing Pod we’re talking
								about Web Platform Baseline.
							</p>
							<ul className='mb-8'>
								<li className='capitalize text-[#161439] text-[18px] font-semibold flex items-center gap-2 my-2'>
									<img
										src='/bulletType.png'
										alt='Bullet'
										width={25}
									/>
									the most world class instructors
								</li>
								<li className='capitalize text-[#161439] text-[18px] font-semibold flex items-center gap-2 my-2'>
									<img
										src='/bulletType.png'
										alt='Bullet'
										width={25}
									/>
									access your class anywhere
								</li>
								<li className='capitalize text-[#161439] text-[18px] font-semibold flex items-center gap-2 my-2'>
									<img
										src='/bulletType.png'
										alt='Bullet'
										width={25}
									/>
									flexible course plan
								</li>
							</ul>
							<button className='bg-[#5751E1] text-white md:font-bold md:py-3 md:px-5 px-3 py-1 rounded-full transition-colors duration-300 drop-shadow-custom hover:bg-[#050071] active:drop-shadow-none active:bg-[#161439] active:text-[#f7eef9] flex items-center gap-2'>
								<span>Start Free Trial</span>
								<ArrowRightIcon width={20} />
							</button>
						</div>
					</section>
				</div>
			</section>

			<section className='pt-12'>
				<section className='md:w-2/4 mx-auto px-2 text-center my-6'>
					<Tag text='top class courses' />
					<h2 className='text-[#161439] text-2xl font-bold my-3'>
						Explore Our World's Best Courses
					</h2>
					<span className='text-xs text-[#6D6C80] md:w-[60ch] md:inline-block text-center'>
						When known printer took a galley of type scrambl edmake
					</span>
				</section>

				<CourseViewer />
			</section>
		</>
	);
}
export default LandingPage;
