import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ComingSoon, Playground } from "../pages";

import AppLayout from "../templates/app-layout";

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ComingSoon />} />
				<Route path="/" element={<AppLayout />}>
					<Route path="/playground" element={<Playground />} />
					<Route
						path="/million-dollar-minnie"
						element={
							<div
								style={{
									height: 400,
								}}
							>
								<h1>million</h1>
								<h1>dollar</h1>
								<h4>minnie</h4>
								<button onClick={() => alert("YOU PRESSED ON IT")}>
									click
								</button>
							</div>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
