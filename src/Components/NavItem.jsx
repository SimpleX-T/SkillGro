function NavItem({ to, title, icon }) {
	return (
		<li className='flex items-center gap-4/5 cursor-pointer  text-[#161439] hover:text-[#5751E1] capitalize'>
			<a href={to} className='text-semibold'>
				{title}
			</a>
			{icon && (
				<span className='flex items-center content-center relative'>
					{icon}
				</span>
			)}
		</li>
	);
}
export default NavItem;
