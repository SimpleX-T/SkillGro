import Button from "../../UI/Button";
import CourseViewer from "../../UI/CourseViewer";
import Tag from "../../UI/Tag";

function CoursesSection() {
	return (
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
			<div className='mx-auto w-1/2 my-12 text-center'>
				<Button to='courses'>View all Courses</Button>
			</div>
		</section>
	);
}
export default CoursesSection;
