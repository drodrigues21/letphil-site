import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
	const [isStorePage, setIsStorePage] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		setIsStorePage(location.pathname.includes("/store"));
	}, [location]);

	const handleNavClick = (e, sectionId) => {
		e.preventDefault();

		if (isStorePage) {
			// Navigate to home page with the hash
			navigate(`/#${sectionId}`);
			// Wait longer for the page to fully load
			setTimeout(() => {
				const element = document.getElementById(sectionId);

				if (element) {
					element.scrollIntoView({ behavior: "smooth" });
				}
			}, 500);
		} else {
			const element = document.getElementById(sectionId);

			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	};

	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
					>
						<li>
							<a
								href="#testimonials"
								onClick={(e) => handleNavClick(e, "testimonials")}
							>
								Testimonials
							</a>
						</li>
						<li>
							<a
								href="#newsletter"
								onClick={(e) => handleNavClick(e, "newsletter")}
							>
								Newsletter
							</a>
						</li>
					</ul>
				</div>
				<a href="/" className="btn btn-ghost text-xl">
					<h2 className="letphil-logo" id="letphil-logo-header">
						<span className="curly">&#123;</span>
						<span className="letphil">
							let <span className="phil">phil</span>
						</span>
						<span className="curly">&#125;</span>
					</h2>
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<a
							className="link glow-effect"
							href="#newsletter"
							onClick={(e) => handleNavClick(e, "testimonials")}
						>
							Testimonials
							<svg className="glow-effect-svg">
								<rect
									pathLength={100}
									stroke-linecap="round"
									className="glow-blur"
								/>
								<rect
									pathLength={100}
									stroke-linecap="round"
									className="glow-line"
								/>
							</svg>
						</a>
					</li>
					<li>
						<a
							className="link glow-effect"
							href="#testimonials"
							onClick={(e) => handleNavClick(e, "newsletter")}
						>
							Newsletter
							<svg className="glow-effect-svg">
								<rect
									pathLength={100}
									stroke-linecap="round"
									className="glow-blur"
								/>
								<rect
									pathLength={100}
									stroke-linecap="round"
									className="glow-line"
								/>
							</svg>
						</a>
					</li>
					<li>
						<a href="/store" className="cta-button-header">
							Enroll Now!
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
