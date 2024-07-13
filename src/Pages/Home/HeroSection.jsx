import { ArrowRightIcon, PlayIcon } from "@heroicons/react/16/solid";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";

function HeroSection() {
	return (
		<section
			id='hero'
			className='flex flex-col md:flex-row items-center relative justify-between md:w-5/6 w-full px-4 md:p-0 mx-auto bg-fixed gap-10 bg-hero-bg bg-no-repeat bg-left my-12'>
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
					<Link to='login'>
						<Button>
							<span>Start Free Trial</span>
							<ArrowRightIcon width={20} />
						</Button>
					</Link>
					{/* <button className='rounded-full flex items-center justify-center border border-[#161439] p-2 md:p-[14px] bg-[#FFC224] text-[#161439] font-bold drop-shadow-custom active:drop-shadow-none active:text-[#f7eef9]'>
						<PlayIcon width={20} />
					</button> */}
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
	);
}
export default HeroSection;
