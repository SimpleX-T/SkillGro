import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import { FaArrowUp } from "react-icons/fa6";
import { useState, useEffect } from "react";

function AppLayout() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 100);
			console.log(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div>
			<Header />
			<main className='main w-full min-h-[91vh] overflow-y-scroll bg-[#f7eef9]'>
				<Outlet />
				{isScrolled && (
					<button
						onClick={scrollToTop}
						className='fixed bottom-32 right-12 z-[99] rounded-lg p-2 bg-[#5751E1] hover:bg-[#06042E] transition-colors duration-200 border-none'>
						<FaArrowUp color='white' />
					</button>
				)}
			</main>
		</div>
	);
}

export default AppLayout;
