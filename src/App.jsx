import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import Courses from "./Pages/Course/Courses";
import LandingPage from "./Pages/Home/LandingPage";
import CourseDetail from "./Pages/Course/CourseDetail";
import ErrorPage from "./Pages/ErrorPage";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<AppLayout />}>
					<Route index element={<LandingPage />} />
					<Route path='courses' element={<Courses />}>
						<Route path='course/:id' element={<CourseDetail />} />
					</Route>
					<Route path='*' element={<ErrorPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
	// <>
	// 	<AppLayout />
	// </>
}
