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

import Logo from "./Logo";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className='bg-dark text-text pt-12 pb-4'>
			<div className='container mx-auto w-5/6 px-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20'>
					<div>
						<div className='flex items-center mb-8'>
							<Link to='/'>
								<Logo type='footer' />
							</Link>
						</div>
						<p className='text-sm mb-4 leading-normal font-light'>
							when an unknown printer took galley of type and
							scrambled it to make pspecimen bookt has.
						</p>
						<p className='text-sm mb-2'>
							463 7th Ave, NY 10018, USA
						</p>
						<p className='text-sm'>+123 88 9900 456</p>
					</div>

					<div>
						<h3 className='text-lg after:content-[""] after:absolute after:-bottom-2 after:w-8 after:h-[3px] after:rounded-full after:left-0 after:bg-[#5751E1] relative mb-4 text-white'>
							Useful Links
						</h3>
						<ul className='space-y-2 text-[14px]'>
							<li className='py-1'>
								<Link to='/'>Our values</Link>
							</li>
							<li className='py-1'>
								<Link to='/'>Our advisory board</Link>
							</li>
							<li className='py-1'>
								<Link to='/'>Our partners</Link>
							</li>
							<li className='py-1'>
								<Link to='/'>Become a partner</Link>
							</li>
							<li className='py-1'>
								<Link to='/'>Work at Future Learn</Link>
							</li>
							<li className='py-1'>
								<Link to='/'>Quizlet Plus</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className='text-lg after:content-[""] after:absolute after:-bottom-2 after:w-8 after:h-[3px] after:rounded-full after:left-0 after:bg-[#5751E1] relative mb-4 text-white'>
							Our Company
						</h3>
						<ul className='space-y-2 text-[14px]'>
							<li className='py-1'>
								<Link to='/contact'>Contact Us</Link>
							</li>
							<li className='py-1'>
								<Link to='/become-teacher'>Become Teacher</Link>
							</li>
							<li className='py-1'>
								<Link to='/blog'>Blog</Link>
							</li>
							<li className='py-1'>
								<Link to='/instructor'>Instructor</Link>
							</li>
							<li className='py-1'>
								<Link to='/events'>Events</Link>
							</li>
						</ul>
					</div>

					<div className='w-[300px]'>
						<h3 className='text-lg after:content-[""] after:absolute after:-bottom-2 after:w-8 after:h-[3px] after:rounded-full after:left-0 after:bg-[#5751E1] relative mb-4 text-white'>
							Get In Touch
						</h3>
						<p className='text-sm mb-4'>
							when an unknown printer took galley type and
							scrambled
						</p>
						<div className='flex space-x-4 mb-4'>
							<Link
								to='#'
								className='text-xl hover:text-white transition-colors duration-200'>
								<FaFacebookF />
							</Link>
							<Link
								to='#'
								className='text-xl hover:text-white transition-colors duration-200'>
								<FaTwitter />
							</Link>
							<Link
								to='#'
								className='text-xl hover:text-white transition-colors duration-200'>
								<FaInstagram />
							</Link>
							<Link
								to='#'
								className='text-xl hover:text-white transition-colors duration-200'>
								<FaYoutube />
							</Link>
						</div>
						<div className='flex items-center gap-2'>
							<Link
								to='#'
								className='bg-[#2A2A3A] text-white p-1 rounded-md text-xs flex items-center w-1/2'>
								<span className='text-4xl'>
									<BiLogoPlayStore />
								</span>
								<div className='flex flex-col items-start'>
									<span className='text-x'>Get It On</span>

									<span>Google Play</span>
								</div>
							</Link>
							<Link
								to='#'
								className='bg-[#2A2A3A] text-white p-1 rounded-md text-xs flex items-center'>
								<span className='text-4xl'>
									<FaApple />
								</span>
								Download On The App Store
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='border-t border-gray-700 mt-8 pt-4 text-center text-sm'>
				<p>&copy; 2024 skillGro.com. All rights reserved.</p>
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
