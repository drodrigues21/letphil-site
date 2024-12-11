import { Link } from "react-router-dom";
import "./courses.css";
import coursesImage from "../assets/course.jpeg";

const Courses = () => {
	return (
		<section id="courses" class="courses-section">
			<h2>Our Courses</h2>
			<div class="course-card-landing-page">
				<div className="course-img-container">
					<img
						src={coursesImage}
						alt="Full Stack Web Development Course"
						class="course-image"
					/>
				</div>
				<div class="course-content">
					<h3>Full Stack Web Development</h3>
					<p>
						This course will take you from zero knowledge to a full stack web
						developer. Master HTML, CSS, JavaScript, Node.js, React, and more!
					</p>
					<div class="course-pricing">
						<span class="original-price">$899.00</span>
						<span class="discounted-price">$499.00</span>
					</div>
					<Link to="/store" className="cta-button cta-button-primary">
						Enroll Now
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Courses;
