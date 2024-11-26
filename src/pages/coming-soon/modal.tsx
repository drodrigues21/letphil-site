import React from "react";
import "./modal.css";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message }) => {
	if (!isOpen) return null; // Don't render if the modal is closed

	return (
		<div className="modal-overlay">
			<div className="modal-content">
				<h2 className="letphil-logo" id="modal-logo">
					<span className="curly">&#123;</span>
					<span className="letphil">
						let <span className="phil">phil</span>
					</span>
					<span className="curly">&#125;</span>
				</h2>
				<h3>{title}</h3>
				<p>{message}</p>
				<button onClick={onClose}>Close</button>
			</div>
		</div>
	);
};

export default Modal;
