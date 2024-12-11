import socialLinks from "../../social-links";
import SocialLinkButton from "../social-link-button";
import "./footer.css";

export default function Footer() {
	return (
		<footer className="footer-container bg-neutral text-neutral-content p-10">
			<div className="footer">
				<aside>
					<h1 className="letphil-logo" id="letphil-logo-footer">
						<span className="curly">&#123;</span>
						<span className="letphil">
							let <span className="phil">phil</span>
						</span>
						<span className="curly">&#125;</span>
					</h1>
					<p>Coding Saves Lives</p>
				</aside>
				<nav>
					<h6 className="footer-title">Social</h6>
					<div className="grid grid-flow-col gap-4">
						{socialLinks.map((socialLink, index) => (
							<SocialLinkButton
								key={index}
								href={socialLink.href}
								icon={socialLink.icon}
							/>
						))}
					</div>
				</nav>
			</div>
		</footer>
	);
}
