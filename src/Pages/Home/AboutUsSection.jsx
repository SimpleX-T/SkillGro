import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Button from "../../UI/Button";
import Tag from "../../UI/Tag";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function AboutUsSection() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true });
	const imageVariants = {
		hidden: { opacity: 0, x: -100 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};
	const containerVariants = {
		hidden: { opacity: 0, x: 100 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};

	return (
		<section className='flex flex-col py-6 md:flex-row items-center gap-4 mt-12 px-4 md:p-0 w-full sm:w-5/6 mx-auto'>
			<div className='w-1/2 hidden md:block mb-8'>
				<motion.img
					ref={sectionRef}
					variants={imageVariants}
					initial='hidden'
					animate={isInView ? "visible" : "hidden"}
					width={400}
					src='/heroImg_2.png'
					alt='Man Smiling with books in hand'
				/>
			</div>

			<motion.div
				variants={containerVariants}
				initial='hidden'
				animate={isInView ? "visible" : "hidden"}
				className='w-full mx-auto px-4 md:w-1/2 my-8'
				ref={sectionRef}>
				<Tag text='get more about us' />
				<h2 className='text-[#161439] text-2xl font-bold my-3 capitalize'>
					thousand of{" "}
					<span className='bg-text-svg bg-no-repeat bg-cover bg-center p-1'>
						courses
					</span>
					<br />
					now in one place
				</h2>

				<p className='text-xs  leading-loose mb-4'>
					Groove's intuitive shared inbox makes it easy for team
					members to organize, prioritize and.In this episode of the
					Smashing Pod we're talking about Web Platform Baseline.
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

				<Button>
					<span>Start Free Trial</span>
					<ArrowRightIcon width={20} />
				</Button>
			</motion.div>
		</section>
	);
}
export default AboutUsSection;
