import { useState, useEffect } from "react";
import "./hero.css";

export default function Hero() {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const targetDate = new Date("2025-04-05T00:00:00");

		const timer = setInterval(() => {
			const now = new Date();
			const difference = targetDate - now;

			const days = Math.floor(difference / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((difference % (1000 * 60)) / 1000);

			const paddedTime = {
				days: days < 10 ? `0${days}` : days,
				hours: hours < 10 ? `0${hours}` : hours,
				minutes: minutes < 10 ? `0${minutes}` : minutes,
				seconds: seconds < 10 ? `0${seconds}` : seconds,
			};

			setTimeLeft(paddedTime);

			if (difference < 0) {
				clearInterval(timer);
				setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
			}
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<>
			<div className="countdown-container">
				<div className="countdown-wrapper">
					<h2 className="countdown-title">Countdown to our course launch</h2>
					<div className="countdown-item">
						<span className="days">{timeLeft.days}</span>
						<span className="hours">{timeLeft.hours}</span>
						<span className="minutes">{timeLeft.minutes}</span>
						<span className="seconds">{timeLeft.seconds}</span>
					</div>
				</div>
			</div>
			<div className="hero-section">
				<div className="hero-container">
					<div className="hero-description">
						<h1>Code Your Future with LetPhil</h1>
						<p>
							Master the essentials of full stack web development and build a
							career in tech — starting today!
						</p>
						<div className="video-description">
							<iframe
								src="https://www.youtube.com/embed/ZT9F81rdnT4?si=EaPbpAhAbsFcTlbC"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerpolicy="strict-origin-when-cross-origin"
								allowfullscreen
							></iframe>
						</div>
						<a className="cta-button" href="/store">
							Break into Tech — Enroll Now!
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
