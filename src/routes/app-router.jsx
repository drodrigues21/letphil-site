import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage, Store } from "../pages";
import ScrollToTop from "../components/global/scrollToTop";
import AppLayout from "../templates/app-layout";

export default function AppRouter() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route path="/" element={<LandingPage />} />
					<Route path="/store" element={<Store />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
