import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

export default function AppLayout(): JSX.Element {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}
