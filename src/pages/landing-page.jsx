import { Hero, Newsletter, Carousel, Courses, Features } from "../components";
import "./landing-page.css";

// Component
export default function LandingPage() {
	return (
		<div className="landing-page-container">
			<Hero />
			<Carousel />
			<Features />
			<Courses />
			<Newsletter />
		</div>
	);
}
