import { Link } from "react-router-dom";
import Logo from "./Logo";
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaWhatsapp,
	FaYoutube,
} from "react-icons/fa6";
import FooterCard from "./FooterCard";

function Footer() {
	return (
		<footer className='bg-primary w-full h-[300px]'>
			<div className='w-5/6 flex items-center justify-between mx-auto py-12'>
				<FooterCard className='hidden lg:flex flex-col'>
					<div className='w-36'>
						<Logo type='footer' />
					</div>
					<p className='text-xs w'>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Adipisci corrupti assumenda necessitatibus harum
						soluta pariatur minima molestiae quas beatae excepturi.
					</p>
					<address className='text-sm'>Nsukka, Enugu Nigeria</address>
					<p>+234 811 608 7743</p>
				</FooterCard>
				<FooterCard className='hidden sm:flex'>
					<h3>useful links</h3>
					<Link>Our Values</Link>
					<Link>Our Values</Link>
					<Link>Our Values</Link>
					<Link>Our Values</Link>
				</FooterCard>
				<FooterCard>
					<h3>our company</h3>
					<Link>contact us</Link>
					<Link>Our Values</Link>
					<Link>Our Values</Link>
					<Link>Our Values</Link>
				</FooterCard>
				<FooterCard>
					<h3>get in touch</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Obcaecati at hic expedita?
					</p>
					<div className='flex items-center gap-4'>
						<Link>
							<FaFacebookF color='#B2BBCC' />
						</Link>
						<Link>
							<FaTwitter color='#B2BBCC' />
						</Link>
						<Link>
							<FaWhatsapp color='#B2BBCC' />
						</Link>
						<Link>
							<FaInstagram color='#B2BBCC' />
						</Link>
						<Link>
							<FaYoutube color='#B2BBCC' />
						</Link>
					</div>
					<Link>Our Values</Link>
				</FooterCard>
			</div>
		</footer>
	);
}

export default Footer;
