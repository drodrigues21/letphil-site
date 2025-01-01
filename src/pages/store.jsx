import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./store.css";

const Store = () => {
	const [openFaq, setOpenFaq] = useState(null);

	const courseOptions = [
		{
			title: "Limited Time Offer - Early Access",
			price: 499,
			description: "One-time payment for full course access when it is released",
			features: [
				"Lifetime access",
				"All course materials",
				"Community access",
				"Certificate of completion",
			],
		},
		{
			title: "VIP Access",
			price: 999,
			description: "Premium experience with exclusive benefits",
			features: [
				"All standard features",
				"1-on-1 mentoring sessions",
				"Priority support",
				"Exclusive workshops",
			],
		},
	];

	const faqItems = [
		{
			question: "What is included in the course?",
			answer:
				"Our course includes comprehensive video lessons, downloadable resources, practical exercises, and access to our community forum.",
		},
		{
			question: "How long do I have access to the course?",
			answer:
				"You have lifetime access to all course materials once purchased.",
		},
		{
			question: "Can I switch between payment plans?",
			answer:
				"Unfortunately, you cannot switch between payment plans after making your initial choice.",
		},
		{
			question: "What makes the VIP option special?",
			answer:
				"The VIP option includes exclusive 1-on-1 mentoring sessions, priority support, and access to special workshops not available in other plans.",
		},
	];

	const toggleFaq = (index) => {
		setOpenFaq(openFaq === index ? null : index);
	};

	return (
		<div className="store-container">
			{/* Header Section */}
			<div className="header-section">
				<h1>Choose Your Learning Path</h1>
				<p>
					Transform your skills with our comprehensive course. Select the plan
					that best fits your needs and start your journey today.
				</p>
			</div>

			{/* Course Options */}
			<div className="course-options">
				{courseOptions.map((option, index) => (
					<div key={index} className="course-card">
						<h2>{option.title}</h2>
						<p className="price"><span>$999</span> ${option.price}</p>
						<p className="description">{option.description}</p>
						<ul className="features-list">
							{option.features.map((feature, i) => (
								<li key={i}>
									<span className="checkmark">✓</span>
									{feature}
								</li>
							))}
						</ul>
						<a
							href="https://whop.com/checkout/plan_Vdlz9Ere9lKIL/?d2c=true"
							className="cta-button get-started-btn"
							target="_blank"
						>
							Get Started
						</a>
					</div>
				))}
			</div>

			{/* FAQ Section */}
			<div className="faq-section">
				<h2>Frequently Asked Questions</h2>
				<div className="faq-list">
					{faqItems.map((item, index) => (
						<div key={index} className="faq-item">
							<button className="faq-question" onClick={() => toggleFaq(index)}>
								<span>{item.question}</span>
								{openFaq === index ? <FiChevronUp /> : <FiChevronDown />}
							</button>
							{openFaq === index && (
								<div className="faq-answer">
									<p>{item.answer}</p>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Store;
