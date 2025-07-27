import React from 'react'
import './MutualFundsSection.css'
import bgImg from '../../../assets/bg-blue.png'
import peopleImg from '../../../assets/people.jpg'

const MutualFundSection = () => {
  return (
    <section className="mutual-fund-section">
      <img src={bgImg} alt="Background" className="bg-image" />
      <div className="content-wrapper">
        <div className="image-column">
          <img
            src={peopleImg}
            alt="Two People with Laptop"
            className="people-img"
          />
          <div className="experience-badge">
            <div className="big">10+</div>
            <div className="small">Years of Experience</div>
          </div>
        </div>
        <div className="text-column">
          <span className="intro-text">Meet Us</span>
          <h2 className="heading">
            We Help You Choose the Right Mutual Funds — Without complexities.
          </h2>
          <p className="description">
            We’re not just another mutual fund platform. We’re a team of real
            people committed to helping real investors like you make smarter
            financial decisions. Whether you're new to investing or planning for
            long-term goals, we're here to guide you at every step.
          </p>
          <div className="why-us">
            <p>► AMFI Registered</p>
            <p>► Fund Comparisons with Advice</p>
            <p>► Personalized Plans & Regular Check-ins</p>
            <p>► Partnered with All Top AMCs</p>
          </div>
          <button className="cta-button">Know More About Our Approach →</button>
        </div>
      </div>
    </section>
  )
}

export default MutualFundSection