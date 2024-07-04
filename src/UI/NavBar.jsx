import { ChevronDownIcon } from "@heroicons/react/16/solid";
import NavItem from "./NavItem";

function NavBar({ navLinks }) {
	return (
		<nav className='md:flex items-center hidden'>
			<ul className='flex space-x-6 items-center'>
				{navLinks.map((link) => (
					<NavItem
						title={link.title}
						to={link.path}
						key={link.title}
					/>
				))}
			</ul>
		</nav>
	);
}
export default NavBar;
