import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Button from "../../UI/Button";
import Tag from "../../UI/Tag";

function AboutUsSection() {
	return (
		<section className='flex flex-col md:flex-row items-center gap-4 mt-12 px-4 md:p-0 w-full md:w-5/6 mx-auto'>
			<div className='w-1/2 hidden md:block'>
				<img
					width={400}
					src='/heroImg_2.png'
					alt='Man Smiling with books in hand'
				/>
			</div>

			<div className='w-full mx-auto px-4 md:w-1/2'>
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
					Groove's intuitive shared inbox makes it easy for team
					members to organize, prioritize and.In this episode of the
					Smashing Pod we're talking about Web Platform Baseline.
				</p>
				<ul className='mb-8'>
					<li className='capitalize text-[#161439] text-[18px] font-semibold flex items-center gap-2 my-2'>
						<img src='/bulletType.png' alt='Bullet' width={25} />
						the most world class instructors
					</li>
					<li className='capitalize text-[#161439] text-[18px] font-semibold flex items-center gap-2 my-2'>
						<img src='/bulletType.png' alt='Bullet' width={25} />
						access your class anywhere
					</li>
					<li className='capitalize text-[#161439] text-[18px] font-semibold flex items-center gap-2 my-2'>
						<img src='/bulletType.png' alt='Bullet' width={25} />
						flexible course plan
					</li>
				</ul>
				<Button>
					<span>Start Free Trial</span>
					<ArrowRightIcon width={20} />
				</Button>
			</div>
		</section>
	);
}
export default AboutUsSection;
