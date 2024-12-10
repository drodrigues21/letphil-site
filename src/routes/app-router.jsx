import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages";

import AppLayout from "../templates/app-layout";

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route path="/" element={<LandingPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
