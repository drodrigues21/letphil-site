// Images
import feature01 from "../assets/feature01.png";
import feature02 from "../assets/feature02.png";
import feature03 from "../assets/feature03.png";
import feature04 from "../assets/feature04.png";
import feature05 from "../assets/feature05.png";

const Features = () => {
	return (
		<div className="features-container">
			{/* Featured Projects Header */}
			<div className="flex flex-col items-center justify-center featured-header">
				<h2 className="featured-projects-header">
					We're dedicated to helping you level up in your
					<span> personal and professional journey.</span>
				</h2>
			</div>
			{/* first row */}
			<div className="featured featured-reverse">
				<div className="w-full lg:w-1/2 featured-project slide-right">
					<h3 className="featured-project-title">
						1: Build Stunning User Interfaces
					</h3>
					<p className="featured-project-description">
						Learn how to create visually appealing and intuitive web interfaces
						using HTML, CSS, and modern design principles. Transform your ideas
						into responsive, pixel-perfect designs that captivate users.
					</p>
				</div>
				<div className="featured-project-img slide-left">
					<img src={feature01} alt="letphil youtube" />
				</div>
			</div>
			{/* second row */}
			<div className="featured">
				<div className="w-full lg:w-1/2 featured-project slide-left">
					<h3 className="featured-project-title">
						2: Master JavaScript for Dynamic Websites
					</h3>
					<p className="featured-project-description">
						Dive into the world of interactivity by mastering JavaScript. You'll
						learn how to create seamless user experiences with dynamic
						components, animations, and real-time functionality.
					</p>
				</div>
				<div className="featured-project-img slide-right">
					<img src={feature02} alt="letphil discord" />
				</div>
			</div>
			{/* third row */}
			<div className="featured featured-reverse">
				<div className="w-full lg:w-1/2 featured-project slide-right">
					<h3 className="featured-project-title">
						3: Responsive Design for Every Device
					</h3>
					<p className="featured-project-description">
						Ensure your websites look great on any screen size. Explore the best
						practices of responsive web design, making your projects accessible
						and functional on mobile, tablet, and desktop devices.
					</p>
				</div>
				<div className="featured-project-img slide-left">
					<img src={feature03} alt="letphil mentorship" />
				</div>
			</div>
			{/* fourth row */}
			<div className="featured">
				<div className="w-full lg:w-1/2 featured-project slide-left">
					<h3 className="featured-project-title">
						4: Embrace Modern Frameworks
					</h3>
					<p className="featured-project-description">
						Gain hands-on experience with cutting-edge frontend frameworks like
						React. Build powerful, reusable components and fast-loading,
						interactive web applications that stand out in today's digital
						world.
					</p>
				</div>
				<div className="featured-project-img slide-right">
					<img src={feature04} alt="letphil events" />
				</div>
			</div>
			{/* fifth row */}
			<div className="featured featured-reverse">
				<div className="w-full lg:w-1/2 featured-project slide-right">
					<h3 className="featured-project-title">
						5: Break Into the Tech World
					</h3>
					<p className="featured-project-description">
						This course is your gateway to a thriving career in tech. Gain the
						skills and confidence needed to land your first role as a frontend
						developer. With real-world projects, industry insights, and a
						supportive learning environment, you'll be equipped to take on the
						competitive job market and make your mark in the tech world.
					</p>
				</div>
				<div className="featured-project-img slide-left">
					<img src={feature05} alt="letphil events" />
				</div>
			</div>
		</div>
	);
};

export default Features;
