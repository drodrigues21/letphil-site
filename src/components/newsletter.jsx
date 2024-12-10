import React, { useState, useEffect } from "react";
import phil from "../assets/letphil.jpeg";
import "./newsletter.css";

// services
import saveEmailingListEmail from "../services/firebase/db/save-emailing-list-emails";

// Get the Email list from firebase db
import fetchEmailsFromFirestore from "../services/firebase/db/fetch-firebase-emails";

const Newsletter = () => {
	// state variables
	const [email, setEmail] = useState("");

	const [existingEmails, setExistingEmails] = useState("");

	const [notification, setNotification] = useState({
		show: false,
		title: "",
		message: "",
		type: "", // can be 'error' or 'success'
	});

	useEffect(() => {
		const fetchEmails = async () => {
			try {
				const emails = await fetchEmailsFromFirestore();
				setExistingEmails(emails);
			} catch (error) {
				console.error("Error fetching emails:", error);
			}
		};

		fetchEmails();
	}, []);

	// Add useEffect for notification timeout
	useEffect(() => {
		let timeout;
		if (notification.show) {
			timeout = setTimeout(() => {
				setNotification((prev) => ({ ...prev, show: false }));
			}, 3000);
		}
		return () => clearTimeout(timeout);
	}, [notification.show]);

	// handlers
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!email || /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) === false) {
			setNotification({
				show: true,
				title: "Invalid Email",
				message: "Please enter a valid email address.",
				type: "error",
			});
			return;
		}

		if (existingEmails.includes(email)) {
			setNotification({
				show: true,
				title: "Email Exists",
				message: "This email address is already in our list.",
				type: "error",
			});
			return;
		}

		try {
			await saveEmailingListEmail(email);
			setExistingEmails((prev) => [...prev, email]);
			setNotification({
				show: true,
				title: "Success",
				message: "Your email was added. Thank you!",
				type: "success",
			});
			setEmail(""); // Clear the input after successful submission
		} catch (error) {
			console.error("Error saving email:", error);
			setNotification({
				show: true,
				title: "Error",
				message: "Something went wrong. Please try again later.",
				type: "error",
			});
		}
	};

	return (
		<div
			id="newsletter"
			className="newsletter-container w-full min-h-[400px] flex items-center justify-center p-4"
		>
			<div className="newsletter-card bg-white rounded-lg max-w-6xl w-full flex flex-col md:flex-row">
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
					<form onSubmit={handleSubmit} className="space-y-4 relative">
						<div className="flex flex-col sm:flex-row gap-2">
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Enter your email"
								className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
								onKeyDown={async (e) => {
									if (e.key === "Enter") {
										e.preventDefault();
										await handleSubmit();
									}
								}}
							/>
							<button
								type="submit"
								className="submit-btn glow-effect"
								onClick={handleSubmit}
							>
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
							{/* Replaced Modal with sliding notification */}
							<div
								className={`notification absolute left-0 right-0 top-full mb-2 transition-all duration-300 ${
									notification.show
										? "opacity-100 transform translate-y-2"
										: "opacity-0 transform translate-y-0"
								}`}
							>
								<div
									className={`p-3 rounded-md ${
										notification.type === "error"
											? "notification-error"
											: "notification-success"
									}`}
								>
									<p className="font-bold">{notification.title}</p>
									<p>{notification.message}</p>
								</div>
							</div>
						</div>
					</form>
				</div>

				{/* Right Container */}
				<div className="flex-1 phil-img">
					<img
						src={phil}
						alt="Newsletter illustration"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
