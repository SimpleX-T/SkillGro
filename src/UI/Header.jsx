import Logo from "./Logo";
import NavBar from "./NavBar";
import HeaderForm from "./HeaderForm";
import CartIcon from "./CartIcon";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
	{
		path: "/",
		title: "Home",
	},
	{
		path: "/courses",
		title: "Courses",
	},
	{
		path: "/pages",
		title: "Pages",
	},
	{
		path: "/shop",
		title: "Shop",
	},
	{
		path: "/blog",
		title: "Blog",
	},
];

function Header() {
	const [isOpen, setIsOpen] = useState(false);

	function handleSetIsOpen() {
		setIsOpen((open) => !open);
	}

	return (
		<header className='bg-[rgba(255,255,255,0.6)] backdrop-blur-sm px-3 py-2 sticky top-0 z-50'>
			<div className='w-full px-2 md:p-0 lg:w-5/6 container mx-auto flex relative items-center justify-between'>
				<nav
					id='mobile-nav'
					className={`absolute top-10 w-full h-64 bg-white ${
						!isOpen ? "hidden" : "flex"
					} flex-col justify-evenly items-center mx-auto rounded-md p-4`}>
					{navLinks.map((link) => (
						<Link
							className='w-full text-center p-2 hover:bg-blue-50 '
							onClick={() => setIsOpen(false)}
							to={link.path}
							key={link.title}>
							{link.title}
						</Link>
					))}
				</nav>

				<Link to='/'>
					<Logo type='main' />
				</Link>

				{/* <NavBar navLinks={navLinks} /> */}
				<HeaderForm />
				<CartIcon />

				<button className='bg-[#FFC224] py-1 px-2 text-sm hidden lg:block  text-[#161439] md:py-2 md:px-4 rounded-full drop-shadow-custom hover:bg-[#161439] hover:drop-shadow-hover hover:text-[#FFC224] active:drop-shadow-none active:bg-[#FFC224] active:text-[#161439]'>
					Get Started
				</button>
				<Bars3Icon
					onClick={handleSetIsOpen}
					width={30}
					className='cursor-pointer'
					color='black'
				/>
			</div>
		</header>
	);
}
export default Header;
