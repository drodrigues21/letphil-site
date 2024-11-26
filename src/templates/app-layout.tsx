import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components/global";

export default function AppLayout(): JSX.Element {
	return (
		<div>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
}
