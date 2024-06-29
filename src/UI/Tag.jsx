function Tag({ text, textColor = "indigo-600", backgroundColor = "#EFEEFE" }) {
	return (
		<span
			className='rounded-3xl text-xs py-1 px-2 capitalize font-semibold'
			style={{ color: textColor, backgroundColor }}>
			{text}
		</span>
	);
}
export default Tag;
