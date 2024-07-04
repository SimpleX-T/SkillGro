import { AcademicCapIcon, BookOpenIcon } from "@heroicons/react/16/solid";
import AboutCard from "../../UI/AboutCard";
import Tag from "../../UI/Tag";

function FeaturesSection() {
	return (
		<section className='w-full md:w-5/6 mx-auto py-4 bg-'>
			<section className='w-2/4 mx-auto text-center my-6'>
				<Tag text='Our Top Features' />
				<h2 className='text-[#161439] text-2xl font-bold my-3'>
					Achieve Your Goal With SkillGrow
				</h2>
				<span className='text-xs text-[#6D6C80]  md:w-[60ch] inline-block text-center'>
					when an unknown printer took a galley of type and scrambled
					make specimen book has survived not only five centuries
				</span>
			</section>

			<section className='flex flex-col lg:flex-row items-center gap-8 w-5/6 mx-auto mt-6'>
				<AboutCard
					iconColor='#1BCBE3'
					backgroundColor='#F1FDFF'
					backdropColor='C9E4E9'
					title='Expert Tutors'
					text='When an unknown printer took a gallery offer type and scrambled makes.'
					icon={<AcademicCapIcon width={30} color='white' />}
				/>
				<AboutCard
					iconColor='#5751E1'
					backdropColor='C8C1ED'
					backgroundColor='#f7eef9'
					title='Effective Courses'
					text='When an unknown printer took a gallery offer type and scrambled makes.'
					icon={<BookOpenIcon width={30} color='white' />}
				/>
				<AboutCard
					backgroundColor='#FFF7E2'
					backdropColor='ebe0c4'
					iconColor='#FFC224'
					title='Earn Certificate'
					text='When an unknown printer took a gallery offer type and scrambled makes.'
					icon={<img src='/cert_svg.svg' width={30} />}
				/>
			</section>
		</section>
	);
}
export default FeaturesSection;
