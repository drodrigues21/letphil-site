import { useMemo, useState, useEffect } from "react";

// components
// @ts-expect-error is jsx file not tsx
import Timer from "../../components/timer";
import Layout from "../../components/layout";
import ParticlesComponent from "../../components/particles";
import SocialLinkButton from "../../components/social-link-button";

import "./coming-soon.css";

// services
import saveEmailingListEmail from "../../services/firebase/db/save-emailing-list-emails";

// hooks
// import useGetYoutubeRecentVideo from "../hooks/use-get-youtube-recent-video";

// contents
import socialLinks from "../../social-links";
// import { logEvent } from "firebase/analytics";

// Get the Email list from firebase db
import fetchEmailsFromFirestore from "../../services/firebase/db/fetch-firebase-emails";

// MODAL UI
import Modal from "./modal";

export default function ComingSoon() {
	// state variables
	const [email, setEmail] = useState("");

	const [existingEmails, setExistingEmails] = useState("");

	const [modalOpen, setModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState(
		{
			title: "",
			message: "",
		},
		{
			title: "",
			message: "",
		}
	);

	useEffect(() => {
		const fetchEmails = async () => {
			try {
				// console.log("Fetching emails...");
				const emails = await fetchEmailsFromFirestore();
				// console.log("Fetched emails:", emails);
				setExistingEmails(emails);
			} catch (error) {
				console.error("Error fetching emails:", error);
			}
		};

		fetchEmails();
	}, []);

	// hooks
	// const EmbedVideo = useGetYoutubeRecentVideo();

	// console.log(existingEmails);

	// handlers
	const handleEmailSubmit = async () => {
		if (!email || /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) === false) {
			setModalContent({
				title: "Invalid Email",
				message: "Please enter a valid email address.",
			});
			setModalOpen(true);
			return;
		}

		if (existingEmails.includes(email)) {
			setModalContent({
				title: "Email Exists",
				message: "This email address is already in our list.",
			});
			setModalOpen(true);
			return;
		}

		try {
			await saveEmailingListEmail(email); // Save the new email
			setExistingEmails((prev) => [...prev, email]); // Add to state
			setModalContent({
				title: "Success",
				message: "Your email was added. Thank you!",
			});
			setModalOpen(true);
		} catch (error) {
			console.error("Error saving email:", error);
			setModalContent({
				title: "Error",
				message: "Something went wrong. Please try again later.",
			});
			setModalOpen(true);
		}
	};

	const MemoParticles = useMemo(() => <ParticlesComponent />, []);

	return (
		<>
			<Layout>
				{MemoParticles}
				<div className="bgimg">
					<div className="bg-layout">
						<div className="middle">
							<div className="content">
								<a href="/">
									<h1 className="letphil-logo">
										<span className="curly">&#123;</span>
										<span className="letphil">
											let <span className="phil">phil</span>
										</span>
										<span className="curly">&#125;</span>
									</h1>
								</a>
								<h2 className="coming-soon">COMING SOON</h2>
								<Timer />
								<p>
									We will be launch soon, enter your email address and get our
									early notification.
								</p>
								<input
									name="email"
									type="text"
									placeholder="email address"
									// pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
									required
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									onKeyDown={async (e) => {
										if (e.key === "Enter") {
											e.preventDefault();
											await handleEmailSubmit();
										}
									}}
								/>
								<button className="button" onClick={handleEmailSubmit}>
									Submit
								</button>
								{/* Modal Component */}
								<Modal
									isOpen={modalOpen}
									onClose={() => setModalOpen(false)}
									title={modalContent.title}
									message={modalContent.message}
								/>

								<div id="mc_embed_signup" />
								<div className="btn-group">
									{socialLinks.map((socialLink, index) => (
										<SocialLinkButton
											key={index}
											href={socialLink.href}
											icon={socialLink.icon}
										/>
									))}
								</div>
							</div>
						</div>
						{/* <div className="bottomleft" /> */}
					</div>
				</div>
			</Layout>
		</>
	);
}
