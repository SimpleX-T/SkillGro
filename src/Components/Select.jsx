import { useState } from "react";

function Select() {
	const [iconName, setIconName] = useState("category");

	function handleSetIconName(e) {
		setIconName(e.target.value);
	}

	return (
		<div className='flex items-center gap-1 px-1 cursor-pointer border-solid border-r mr-2'>
			<img src={`Icons/${iconName}_icon.svg`} alt='icon' />
			<select
				name='searchOptions'
				value={iconName}
				onChange={handleSetIconName}
				className='cursor-pointer outline-none'>
				<option value='category' className='text-[14px]'>
					Category
				</option>
				<option value='home' className='text-[14px]'>
					Home
				</option>
			</select>
		</div>
	);
}
export default Select;
