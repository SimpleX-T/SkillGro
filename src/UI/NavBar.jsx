import { ChevronDownIcon } from "@heroicons/react/16/solid";
import NavItem from "./NavItem";

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

function NavBar() {
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
