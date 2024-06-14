import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

function ErrorPage() {
	return (
		<div className='w-full h-error-height bg-no-repeat bg-cover bg-center bg-error-bg relative'>
			<Link
				to={-1}
				className='text-lg flex items-center gap-4 bg-blue-800 py-2 px-4 rounded-xl text-blue-50 transition-colors duration-300 hover:bg-blue-300 hover:text-blue-800 absolute top-8 left-4'>
				Go Back <ArrowLeftIcon width={20} />
			</Link>
		</div>
	);
}
export default ErrorPage;
