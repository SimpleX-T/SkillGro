import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Courses from "./Pages/Course/Courses";
import LandingPage from "./Pages/Home/LandingPage";
import CourseDetail from "./Pages/Course/CourseDetail";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<AppLayout />}>
					<Route index element={<LandingPage />} />
					<Route path='courses' element={<Courses />}>
						<Route path='course/:id' element={<CourseDetail />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
	// <>
	// 	<AppLayout />
	// </>
}
