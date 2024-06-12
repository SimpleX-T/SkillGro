import Select from "./Select";
import { PaperAirplaneIcon } from "@heroicons/react/16/solid";

function HeaderForm() {
	return (
		<form className='hidden md:flex relative items-center p-[6px] rounded-3xl border border-solid border-[#D3D2DF]'>
			<Select />
			<input
				type='search'
				className='outline-none focus:outline-none p-2 bg-[rgba(255,255,255,0.5)] rounded-3xl border-[rgba(255,255,255,0.8)] border-2 border-inse border-solid'
				placeholder='Search for Course'
			/>
			<button
				type='submit'
				className='rounded-full bg-[#5751E1] p-2 absolute right-2 top-1/2 -translate-y-1/2'>
				<PaperAirplaneIcon color='white' width={20} />{" "}
			</button>
		</form>
	);
}
export default HeaderForm;
