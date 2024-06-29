import { SparklesIcon } from "@heroicons/react/16/solid";

function AboutCard({
	text,
	icon,
	title,
	backgroundColor,
	backdropColor,
	iconColor,
}) {
	return (
		<div
			style={{
				boxShadow: `5px 5px 0px #${backdropColor}`,
				backgroundColor,
			}}
			className={`rounded-xl relative p-8`}>
			<span className='absolute top-4 right-4'>
				<SparklesIcon
					width={40}
					strokeWidth={0.8}
					color='rgba(39,39,47,0.2)'
				/>
			</span>
			<div className='flex gap-2 items-center mb-3'>
				<span
					className='rounded-full p-2'
					style={{ background: iconColor }}>
					{icon}
				</span>
				<h3 className='text-lg font-semibold text-[#161439]'>
					{title}
				</h3>
			</div>
			<p className='capitalize text-[13px] font-light'>{text}</p>
		</div>
	);
}
export default AboutCard;
