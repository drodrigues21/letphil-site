import { Carousel, Hero } from "../components/global";
import Newsletter from "../components/newsletter";
import "./landing-page.css";

// Images
import youtubeImage from "../assets/youtube.jpeg";
import discordImage from "../assets/discord.jpeg";
import mentorshipImage from "../assets/mentorship.jpeg";
import eventsImage from "../assets/events.jpeg";

// Component
export default function Playground() {
	return (
		<div>
			<Hero />
			<Newsletter />
			<Carousel />
			{/* Featured Projects Header */}
			<div className="flex flex-col items-center justify-center featured-header">
				<h2 className="featured-projects-header">
					We're dedicated to helping you level up in your
					<span> personal and professional journey.</span>
				</h2>
			</div>
			{/* first row */}
			<div className="featured featured-reverse">
				<div className="w-full lg:w-1/2 featured-project">
					<h3 className="featured-project-title">1. YouTube Channel</h3>
					<p className="featured-project-description">
						Dive into a wealth of tutorials, tips, and content that helps you
						learn and grow at your own pace.{" "}
						<a href="https://www.youtube.com/@letphil">Come check it out!</a>
					</p>
				</div>
				<div className="featured-project-img">
					<img src={youtubeImage} alt="letphil youtube" />
				</div>
			</div>
			{/* second row */}
			<div className="featured">
				<div className="w-full lg:w-1/2 featured-project">
					<h3 className="featured-project-title">2. Discord Community</h3>
					<p className="featured-project-description">
						Join our vibrant community of 800+ members, where you can network,
						ask questions, and share your knowledge.{" "}
						<a
							href="https://discord.gg/SsWF6cWDRw"
							target="_blank"
							rel="noopener noreferrer"
						>
							Join Our Discord Community!
						</a>
					</p>
				</div>
				<div className="featured-project-img">
					<img src={discordImage} alt="letphil discord" />
				</div>
			</div>
			{/* third row */}
			<div className="featured featured-reverse">
				<div className="w-full lg:w-1/2 featured-project">
					<h3 className="featured-project-title">3. One-on-One Mentorship</h3>
					<p className="featured-project-description">
						Get personalized coaching to fast-track your growth, whether you're
						tackling a new project or overcoming challenges.
					</p>
				</div>
				<div className="featured-project-img">
					<img src={mentorshipImage} alt="letphil mentorship" />
				</div>
			</div>
			{/* fourth row */}
			<div className="featured">
				<div className="w-full lg:w-1/2 featured-project">
					<h3 className="featured-project-title">4. Community Events</h3>
					<p className="featured-project-description">
						Participate in engaging events that bring the community
						together—workshops, challenges, and more!
					</p>
				</div>
				<div className="featured-project-img">
					<img src={eventsImage} alt="letphil events" />
				</div>
			</div>
		</div>
	);
}
