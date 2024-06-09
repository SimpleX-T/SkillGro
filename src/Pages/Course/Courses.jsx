import { Outlet } from "react-router-dom";

function Courses() {
	return (
		<>
			<h1 className='text-lg'>Courses</h1>
			<Outlet />
		</>
	);
}
export default Courses;
