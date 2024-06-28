import { Link } from "react-router-dom";

function Button({ children, to, onclick }) {
	if (to)
		return (
			<Link
				className='bg-[#5751E1] text-white md:font-bold py-1 px-3 md:py-3 md:px-5 rounded-full transition-colors duration-300 drop-shadow-custom hover:bg-[#050071] active:drop-shadow-none active:bg-[#161439] active:text-[#f7eef9] '
				to={to}>
				{children}
			</Link>
		);

	if (onclick) return <button onClick={onclick}>{children}</button>;

	return (
		<button className='bg-[#5751E1] text-white md:font-bold py-1 px-3 md:py-3 md:px-5 rounded-full transition-colors duration-300 drop-shadow-custom hover:bg-[#050071] active:drop-shadow-none active:bg-[#161439] active:text-[#f7eef9] flex items-center gap-2 capitalize'>
			{children}
		</button>
	);
}
export default Button;
