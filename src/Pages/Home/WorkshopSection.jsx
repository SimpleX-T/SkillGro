import {
	AcademicCapIcon,
	PresentationChartLineIcon,
} from "@heroicons/react/16/solid";
import Button from "../../UI/Button";
import Tag from "../../UI/Tag";

function WorkshopSection() {
	return (
		<section className='bg-white mx-auto px-4 h-[700px] overflow-scroll pt-12 relative'>
			<div className='w-full mx-auto flex mb-16 flex-col justify-between sm:flex-row md:w-5/6'>
				<img
					src='/about_img.png'
					alt='Boy and girl reading'
					className='hidden sm:block w-[550px]'
				/>
				<div className='w-1/2 my-auto'>
					<Tag text='Free Workshop' />
					<h2 className='text-[#161439] text-2xl font-bold my-4'>
						Join Our Free Workshops
					</h2>
					<p className='text-sm text-[#6D6C80] text-left w-1/2 mb-5'>
						An unknown printer took a gallery of type and scrambled
						it to make a type specimen books survived not only five
						centuries.
					</p>
					<div className='flex gap-4 w-2/3 mb-4'>
						<div>
							<div className='flex items-center gap-4 mb-2'>
								<span className='text-xl rounded-full flex items-center justify-center bg-red-500 border border-solid border-red-700 p-2 shadow-btr'>
									<PresentationChartLineIcon
										width={30}
										color='white'
									/>
								</span>

								<h3 className='capitalize font-semibold text-md'>
									smooth virtual live classes
								</h3>
							</div>
							<p className='text-sm leading-6 text-gray-600'>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit.
							</p>
						</div>

						<div>
							<div className='flex items-center gap-4 mb-2'>
								<span className='text-xl rounded-full flex items-center justify-center bg-[#1BCBE3] border border-solid border-cyan-600 p-2 shadow-btr'>
									<AcademicCapIcon width={30} color='white' />
								</span>

								<h3 className='capitalize font-semibold text-md'>
									99% graduation complete
								</h3>
							</div>
							<p className='text-sm leading-6 text-gray-600'>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit.
							</p>
						</div>
					</div>
					<Button>get started</Button>
				</div>
			</div>

			<div className='bg-[#282568] rounded-xl text-white pl-16 pt-4  mb-12 w-5/6 mx-auto flex items-center gap-6'>
				<h2 className='capitalize text-4xl w-5/12 font-semibold'>
					Thousands of
					<span className='bg-text-svg'> courses </span>
					authored by industry experts
				</h2>
				<div className='flex mr-auto gap-8'>
					<div className='border-r-2 pr-8 border-solid gradient-border'>
						<h2 className='text-4xl font-semibold'>44k+</h2>
						<p className='capitalize font-normal text-sm'>
							active students
						</p>
					</div>
					<div>
						<h2 className='text-4xl font-semibold'>328+</h2>
						<p className='capitalize font-normal text-sm'>
							best instructors
						</p>
					</div>
				</div>
				<img src='industry_img.png' width={300} alt='man and woman' />
			</div>
		</section>
	);
}
export default WorkshopSection;
