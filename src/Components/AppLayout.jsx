import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
	return (
		<div>
			<Header />
			<main className='main w-full min-h-[91vh] overflow-y-scroll bg-[#f7eef9]'>
				<Outlet />
			</main>
		</div>
	);
}
export default AppLayout;
