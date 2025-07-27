import React from 'react'
import './ConnectForm.css'
import agentImage from '../../../assets/contact.png' // adjust path if needed

const ConnectForm = () => {
  return (
    <section className="connect-section">
      <div className="connect-wrapper">
        {/* Left Form Block */}
        <div className="connect-form">
          <p className="connect-subtitle">Start Investing</p>
          <h2 className="connect-title">Let’s Connect</h2>
          <p className="connect-description">
            From personalized advice to smart tools, our team is ready to help
            you move forward with clarity and confidence.
          </p>

          <form className="formm input">
            <input
              type="text"
              placeholder="Name"
              required
             
            />
            <input type="text" placeholder="Phone" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows="4" required></textarea>
            <button type="submit">Begin My Investment Journey</button>
          </form>
        </div>

        {/* Right Image Block */}
        <div className="connect-image">
          <img src={agentImage} alt="Connect Agent" />
        </div>
      </div>
    </section>
  )
}

export default ConnectForm
