import React from 'react'
import './MutualFundsBenefits.css'

import returnsImg from '../../../assets/block1.png'
import expertsImg from '../../../assets/block2.png'
import varietyImg from '../../../assets/block3.png'
import startSmallImg from '../../../assets/block4.png'

const features = [
  {
    img: returnsImg,
  },
  {
    img: expertsImg,
  },
  {
    img: varietyImg,
  },
  {
    img: startSmallImg,
  },
]

const MutualFundBenefits = () => {
  return (
    <section className="mutual-benefits-section">
      <h4 className="sub-heading">Why Mutual Funds Work?</h4>
      <h2 className="main-heading">
        Why Mutual Funds?
        <br />
        Because They’re Built to Grow.
      </h2>
      <p className="description">
        Forget trying to time the market. Mutual Funds are built for long-term,
        low-hassle, goal-friendly growth and they’re super flexible too.
      </p>

      <div className="feature-cards">
        {features.map((feature, index) => (
          <div className="card" key={index}>
            <img src={feature.img} alt={feature.title} className="card-ico" />
          </div>
        ))}
      </div>

      <button className="cta-button">Explore Fund Options →</button>
    </section>
  )
}

export default MutualFundBenefits
