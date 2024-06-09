import { ChevronDownIcon } from "@heroicons/react/16/solid";
import NavItem from "./NavItem";

function NavBar() {
	return (
		<nav>
			<ul className='flex space-x-6 items-center'>
				<NavItem title='home' />
				<NavItem
					title='courses'
					icon={<ChevronDownIcon width={20} />}
				/>
				<NavItem title='pages' icon={<ChevronDownIcon width={20} />} />
				<NavItem title='shop' icon={<ChevronDownIcon width={20} />} />
				<NavItem title='blog' />
			</ul>
		</nav>
	);
}
export default NavBar;
