// import { Link } from "react-router-dom";
// import Logo from "./Logo";
// import {
// 	FaFacebookF,
// 	FaInstagram,
// 	FaTwitter,
// 	FaWhatsapp,
// 	FaYoutube,
// } from "react-icons/fa6";

// function Footer() {
// 	return (
// 		<footer className='bg-primary w-full h-[300px]'>
// 			<div className='w-5/6 flex items-center mx-auto py-12 justify-between text-neutral-300'>
// 				<div className='hidden lg:flex flex-col w-1/4 gap-4'>
// 					<div className='w-36'>
// 						<Logo type='footer' />
// 					</div>
// 					<p className='text-sm w'>
// 						Lorem ipsum dolor sit, amet consectetur adipisicing
// 						elit. Adipisci corrupti assumenda necessitatibus harum
// 						soluta pariatur minima molestiae quas beatae excepturi.
// 					</p>
// 					<address className='text-sm'>Nsukka, Enugu Nigeria</address>
// 					<p>+123 456 7890</p>
// 				</div>
// 				<div className='flex flex-col w-1/4 text-center'>
// 					<h3 className='capitalize font-semibold text-yellow-500'>
// 						useful links
// 					</h3>
// 					<Link>Our Values</Link>
// 					<Link>Our Values</Link>
// 					<Link>Our Values</Link>
// 					<Link>Our Values</Link>
// 				</div>
// 				<div className='flex flex-col w-1/4 text-center'>
// 					<h3 className='capitalize font-semibold text-yellow-500'>
// 						our company
// 					</h3>
// 					<Link>contact us</Link>
// 					<Link>Our Values</Link>
// 					<Link>Our Values</Link>
// 					<Link>Our Values</Link>
// 				</div>
// 				<div className='flex flex-col w-1/4'>
// 					<h3 className='capitalize font-semibold text-yellow-500'>
// 						get in touch
// 					</h3>
// 					<p>
// 						Lorem ipsum dolor sit amet consectetur adipisicing elit.
// 						Obcaecati at hic expedita?
// 					</p>
// 					<div className='flex items-center gap-4'>
// 						<Link>
// 							<FaFacebookF color='#B2BBCC' />
// 						</Link>
// 						<Link>
// 							<FaTwitter color='#B2BBCC' />
// 						</Link>
// 						<Link>
// 							<FaWhatsapp color='#B2BBCC' />
// 						</Link>
// 						<Link>
// 							<FaInstagram color='#B2BBCC' />
// 						</Link>
// 						<Link>
// 							<FaYoutube color='#B2BBCC' />
// 						</Link>
// 					</div>
// 					<Link>Our Values</Link>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// }

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className='bg-dark text-white py-12'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{/* Company Info */}
					<div>
						<div className='flex items-center mb-4'>
							<div className='w-8 h-8 bg-purple-600 rounded-full mr-2'></div>
							<span className='text-xl font-bold'>SkillGro</span>
						</div>
						<p className='text-sm mb-4'>
							when an unknown printer took galley of type and
							scrambled it to make pspecimen bookt has.
						</p>
						<p className='text-sm mb-2'>
							463 7th Ave, NY 10018, USA
						</p>
						<p className='text-sm'>+123 88 9900 456</p>
					</div>

					{/* Useful Links */}
					<div>
						<h3 className='text-lg font-semibold mb-4'>
							Useful Links
						</h3>
						<ul className='space-y-2'>
							<li>
								<Link to='/'>Our values</Link>
							</li>
							<li>
								<Link to='/'>Our advisory board</Link>
							</li>
							<li>
								<Link to='/'>Our partners</Link>
							</li>
							<li>
								<Link to='/'>Become a partner</Link>
							</li>
							<li>
								<Link to='/'>Work at Future Learn</Link>
							</li>
							<li>
								<Link to='/'>Quizlet Plus</Link>
							</li>
						</ul>
					</div>

					{/* Our Company */}
					<div>
						<h3 className='text-lg font-semibold mb-4'>
							Our Company
						</h3>
						<ul className='space-y-2'>
							<li>
								<Link to='/contact'>Contact Us</Link>
							</li>
							<li>
								<Link to='/become-teacher'>Become Teacher</Link>
							</li>
							<li>
								<Link to='/blog'>Blog</Link>
							</li>
							<li>
								<Link to='/instructor'>Instructor</Link>
							</li>
							<li>
								<Link to='/events'>Events</Link>
							</li>
						</ul>
					</div>

					{/* Get In Touch */}
					<div>
						<h3 className='text-lg font-semibold mb-4'>
							Get In Touch
						</h3>
						<p className='text-sm mb-4'>
							when an unknown printer took galley type and
							scrambled
						</p>
						<div className='flex space-x-4 mb-4'>
							<Link to='#'>
								<FaFacebookF />
							</Link>
							<Link to='#'>
								<FaTwitter />
							</Link>
							<Link to='#'>
								<FaInstagram />
							</Link>
							<Link to='#'>
								<FaYoutube />
							</Link>
						</div>
						<div className='flex space-x-2'>
							<Link
								to='#'
								className='bg-[#2A2A3A] text-white px-3 py-2 rounded-md text-xs'>
								Get It On Google Play
							</Link>
							<Link
								to='#'
								className='bg-[#2A2A3A] text-white px-3 py-2 rounded-md text-xs'>
								Download On The App Store
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='border-t border-gray-700 mt-8 pt-8 text-center text-sm'>
				<p>© 2010-2024 skillgro.com. All rights reserved.</p>
				<div className='mt-2'>
					<Link to='/terms' className='mr-4'>
						Term of Use
					</Link>
					<Link to='/privacy'>Privacy Policy</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
