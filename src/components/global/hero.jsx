import { useRef } from "react";
import "./hero.css";

export default function Hero({ title, description, buttonText }) {
  const heroModalRef = useRef(null);

  return (
    <>
      <div className="min-h-[82vh] bg-[#f0f4f8] justify-center items-center flex">
        <div className="hero-container">
          <div className="hero-description">
            <h1>LetPhil Community</h1>
            <p>
              Connect with passionate programmers, learn together, and build a
              brighter coding future!
            </p>
            <button className="cta-button">Join Now</button>
          </div>

          <div className="video-description">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ZT9F81rdnT4?si=EaPbpAhAbsFcTlbC"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
