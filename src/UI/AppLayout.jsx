import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import Header from "./Header"; // Assuming you have this component

function AppLayout() {
	const [isScrolled, setIsScrolled] = useState(false);
	const mainRef = useRef(null);

	useEffect(() => {
		const mainElement = mainRef.current;
		if (!mainElement) return;

		const handleScroll = () => {
			// Show button when container is scrolled down 100px
			setIsScrolled(mainElement.scrollTop > 100);
		};

		mainElement.addEventListener("scroll", handleScroll);

		// Cleanup function
		return () => mainElement.removeEventListener("scroll", handleScroll);
	}, []); // Empty dependency array means this effect runs once on mount

	const scrollToTop = () => {
		if (mainRef.current) {
			mainRef.current.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className='flex flex-col h-screen'>
			<Header />
			<main ref={mainRef} className='flex-1 overflow-y-auto bg-[#f7eef9]'>
				<Outlet />
				{isScrolled && (
					<button
						title='Scroll to top'
						onClick={scrollToTop}
						className='fixed bottom-32 right-12 z-[99] rounded-lg p-2 bg-[#06042E] transition-colors duration-200 border-none'>
						<FaArrowUp color='white' />
					</button>
				)}
			</main>
		</div>
	);
}

export default AppLayout;

// import { Link, Outlet } from "react-router-dom";
// import Header from "./Header";
// import { FaArrowUp } from "react-icons/fa6";
// import { useState, useEffect } from "react";

// function AppLayout() {
// 	const [isScrolled, setIsScrolled] = useState(false);

// 	console.log(window.scrollY);
// 	useEffect(() => {
// 		const handleScroll = () => {
// 			setIsScrolled(window.scrollY > 100);
// 			console.log(window.scrollY);
// 		};

// 		window.addEventListener("scroll", handleScroll);

// 		return () => window.removeEventListener("scroll", handleScroll);
// 	}, []);

// 	const scrollToTop = () => {
// 		window.scrollTo({
// 			top: 0,
// 			behavior: "smooth",
// 		});
// 	};

// 	return (
// 		<div>
// 			<Header />
// 			<main className='main w-full min-h-[91vh] overflow-y-scroll bg-[#f7eef9]'>
// 				<Outlet />
// 				{isScrolled && (
// 					<button
// 						onClick={scrollToTop}
// 						className='fixed bottom-32 right-12 z-[99] rounded-lg p-2 bg-[#5751E1] hover:bg-[#06042E] transition-colors duration-200 border-none'>
// 						<FaArrowUp color='white' />
// 					</button>
// 				)}
// 			</main>
// 		</div>
// 	);
// }

// export default AppLayout;
