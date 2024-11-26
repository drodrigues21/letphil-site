import { useState } from "react";
import { testimonialData } from "../../data/testimonialData";
import "./Carousel.css";

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
		);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
		);
	};

	const getCardPosition = (index) => {
		// The difference (index - currentIndex) gives the initial relative position:
		// A result of 0 means the card is at the center (active card).
		// Positive results (1, 2, etc.) indicate the card is to the right of the active card.
		// Negative results (-1, -2, etc.) indicate the card is to the left.
		const position = index - currentIndex;

		const totalCards = testimonialData.length;

		// Handle wrapping for smooth infinite scroll
		// Wrapping to the Right
		if (position < -Math.floor(totalCards / 2)) return position + totalCards;
		// Wrapping to the Left
		if (position > Math.floor(totalCards / 2)) return position - totalCards;

		// No Wrapping Needed
		return position;
	};

	return (
		<div id="testimonials" className="carousel-container">
			<div className="carousel">
				{testimonialData.map((testimonial, index) => {
					const position = getCardPosition(index);
					const isActive = position === 0;
					const isVisible = Math.abs(position) <= 1;

					return (
						<div
							key={index}
							className={`carousel-card ${isActive ? "active" : ""}`}
							style={{
								transform: `translateX(${position * 300}px) scale(${
									isActive ? 1.2 : 0.8
								})`,
								opacity: isVisible ? (isActive ? 1 : 0.3) : 0,
								zIndex: isActive ? 2 : 1,
								pointerEvents: isVisible ? "auto" : "none",
							}}
						>
							<img src={testimonial.image} alt={testimonial.author} />
							<h3 className="author">{testimonial.author}</h3>
							<p className="role">{testimonial.role}</p>
							<p className="text">{testimonial.text}</p>
						</div>
					);
				})}

				<button className="carousel-button prev" onClick={handlePrev}>
					&lt;
				</button>
				<button className="carousel-button next" onClick={handleNext}>
					&gt;
				</button>

				<div className="carousel-dots">
					{testimonialData.map((_, index) => {
						const isActive = index === currentIndex;
						return (
							<button
								key={index}
								className={`carousel-dot ${isActive ? "active" : ""}`}
								onClick={() => setCurrentIndex(index)}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
