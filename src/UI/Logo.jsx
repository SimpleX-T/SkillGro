function Logo({ type }) {
	return (
		<div>
			<img src={`${type}_logo.png`} alt='Logo' className='w-full' />
		</div>
	);
}
export default Logo;
