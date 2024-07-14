function BrandCarousel() {
	const brands = [
		{ name: "Udemy", src: "/brands/udemy.png" },
		{ name: "Codecademy", src: "/brands/codecademy.png" },
		{ name: "AMD", src: "/brands/amd.png" },
		{ name: "Amazon", src: "/brands/amazon.png" },
		{ name: "Coursera", src: "/brands/coursera.png" },
	];

	return (
		<div className='carousel w-[120%] -ml-2 h-8 md:h-16 flex items-center origin-left transform -rotate-[6deg] bg-[#06042E] overflow-x-hidden'>
			<div className='slide flex items-center gap-12 md:gap-32 w-full z-10'>
				{[...brands, ...brands, ...brands].map((brand, index) => (
					<img
						key={`${brand.name}-${index}`}
						className='w-16 md:w-full'
						src={brand.src}
						alt={brand.name}
					/>
				))}
			</div>
		</div>
	);
}
export default BrandCarousel;
