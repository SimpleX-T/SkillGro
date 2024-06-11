import Logo from "./Logo";
import NavBar from "./NavBar";
import HeaderForm from "./HeaderForm";
import CartIcon from "./CartIcon";

function Header() {
	return (
		<header className='bg-[rgba(255,255,255,0.6)] backdrop-blur-sm p-2 sticky top-0 z-50'>
			<div className='w-full px-2 md:p-0 md:w-5/6 container mx-auto flex items-center justify-between'>
				<Logo />
				<NavBar />
				<HeaderForm />
				<CartIcon />

				<button className='bg-[#FFC224] py-1 px-2 text-sm md:text-lg text-[#161439] md:font-bold md:py-2 md:px-4 rounded-full drop-shadow-custom hover:bg-[#161439] hover:drop-shadow-hover hover:text-[#FFC224] active:drop-shadow-none active:bg-[#FFC224] active:text-[#161439]'>
					Get Started
				</button>
			</div>
		</header>
	);
}
export default Header;
