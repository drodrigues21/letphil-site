import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		// Add smooth scrolling behavior and ensure it runs after render
		setTimeout(() => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth",
			});
		}, 200);
	}, [pathname]);

	return null;
}

export default ScrollToTop;
