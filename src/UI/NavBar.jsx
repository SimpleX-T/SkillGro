import { ChevronDownIcon } from "@heroicons/react/16/solid";
import NavItem from "./NavItem";

function NavBar({ navLinks }) {
	return (
		<nav className='md:flex items-center hidden'>
			<ul className='flex space-x-6 items-center'>
				{navLinks.map((link) => (
					<NavItem title={link.title} to={link.path} />
				))}
				{/* <NavItem title='home' />
				<NavItem
					title='courses'
					icon={<ChevronDownIcon width={20} />}
				/>
				<NavItem title='pages' icon={<ChevronDownIcon width={20} />} />
				<NavItem title='shop' icon={<ChevronDownIcon width={20} />} />
				<NavItem title='blog' /> */}
			</ul>
		</nav>
	);
}
export default NavBar;
