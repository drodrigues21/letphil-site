import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ComingSoon, LandingPage } from "../pages";

import AppLayout from "../templates/app-layout";

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route path="/" element={<LandingPage />} />
				</Route>
				<Route path="/coming-soon" element={<ComingSoon />} />
			</Routes>
		</BrowserRouter>
	);
}
