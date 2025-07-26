import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>
            5000+ Investors, ₹500 Cr+ Invested,<br />
            1 Common Result <span className="highlight">“GROWTH”</span>
          </h1>
          <p>
            Whether it’s salaried employees, NRIs or entrepreneurs – people trust us
            to help them make smart money moves.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">I Want This Too →</button>
            <button className="btn-outline">
              <i className="fas fa-play-circle"></i> Watch Video
            </button>
          </div>

          <div className="hero-rating">
            <div className="avatars">
              <img src="/avatars/avatar1.png" alt="User 1" />
              <img src="/avatars/avatar2.png" alt="User 2" />
              <img src="/avatars/avatar3.png" alt="User 3" />
            </div>
            <div className="rating-text">
              ⭐⭐⭐⭐⭐<br />
              <span>300+ Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
