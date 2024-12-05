import React, { useState } from "react";
import phil from "../assets/letphil.jpeg";
import "./newsletter.css";

const Newsletter = () => {
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add your newsletter subscription logic here
		console.log("Submitted email:", email);
		setEmail("");
	};

	return (
		<div
			id="newsletter"
			className="newsletter-container w-full min-h-[400px] flex items-center justify-center p-4"
		>
			<div className="newsletter-card bg-white rounded-lg max-w-6xl w-full flex flex-col md:flex-row overflow-hidden">
				{/* Left Container */}
				<div className="flex-1 p-8 flex flex-col justify-center">
					<h2 className="text-3xl font-bold text-gray-800 mb-4">
						Stay Updated with Our Newsletter
					</h2>
					<h3 className="text-xl text-gray-600 mb-4">
						Get the latest news and updates delivered to your inbox
					</h3>
					<p className="text-gray-600 mb-6">
						Join our community and receive exclusive content, industry insights,
						and special offers. We promise not to spam your inbox!
					</p>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="flex flex-col sm:flex-row gap-2">
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Enter your email"
								className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
							/>
							<button type="submit" className="submit-btn glow-effect">
								Subscribe
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
							</button>
						</div>
					</form>
				</div>

				{/* Right Container */}
				<div className="flex-1 phil-img">
					<img
						src={phil} // Replace with your image path
						alt="Newsletter illustration"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
