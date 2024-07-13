import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

function SemiHeader({ curLink, curTitle, prevLink, prevTitle, title }) {
	return (
		<div>
			<div className='w-5/6 mx-auto'>
				<h1>{title}</h1>
				<p className='flex'>
					<Link to={prevLink}>{prevTitle}</Link>
					<FaArrowRightArrowLeft />
				</p>
			</div>
		</div>
	);
}
export default SemiHeader;
