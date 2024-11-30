import { useRef } from "react";
import "./hero.css";

export default function Hero({ title, description, buttonText }) {
  const heroModalRef = useRef(null);

  return (
    <>
      <div className="min-h-screen bg-slate-50 justify-center items-center flex">
        <div className="hero-container">
          <div className="hero-description">
            <h1>Welcome to the LetPhil Community</h1>
            <p>
              Connect with passionate programmers, learn together, and build a
              brighter coding future!
            </p>
            <button>Join Now</button>
          </div>

          <div className="video-description">
            <iframe
              width="550"
              height="315"
              src="https://www.youtube.com/embed/z7Ggq5Mzcvw?si=FFwJeEF4XD4ekWD3"
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
