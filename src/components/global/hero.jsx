import { useRef } from "react";

export default function Hero({ title, description, buttonText }) {
	const heroModalRef = useRef(null);

	return (
		<>
			<div className="hero bg-base-200 min-h-screen">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<div id="letphil-logo" className="text-5xl font-bold">
							{title}
						</div>
						<p className="py-6">{description}</p>
						<button
							className="btn btn-primary"
							onClick={() => {
								heroModalRef.current?.showModal();
							}}
						>
							{buttonText}
						</button>
					</div>
				</div>
			</div>
			<dialog
				id="hero-modal"
				className="modal modal-bottom sm:modal-middle"
				ref={heroModalRef}
			>
				<div className="modal-box">
					<h3 className="font-bold text-lg">Hello!</h3>
					<p className="py-4">
						Press ESC key or click the button below to close
					</p>
					<div className="modal-action">
						<form method="dialog">
							{/* If there is a button in the form, it will close the modal */}
							<button className="btn">Close</button>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
}
