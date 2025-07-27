import React, { useState } from 'react'
import './FDComparison.css'

import savingIcon from '../../../assets/savings1.png'
import depositIcon from '../../../assets/deposit1.png'
import goldIcon from '../../../assets/savings2.png'
import fundIcon from '../../../assets/fundraiser1.png'

const FDComparison = () => {
  const [amount, setAmount] = useState(5000)
  const [years, setYears] = useState(10)

  const calculateReturn = (rate) => {
    const n = 12
    const r = rate / 100 / n
    const t = years
    const futureValue = amount * (((1 + r) ** (n * t) - 1) / r) * (1 + r)
    return Math.round(futureValue).toLocaleString('en-IN')
  }

  return (
    <section className="fd-section">
      <div className="fd-header">
        <p className="highlight">Compare Assets</p>
        <h2>Still Thinking FD or Gold? Let’s Compare</h2>
      </div>

      <div className="input-controls">
        <div className="input-group">
          <div className="myyy">
            <label>Monthly Invested Amount</label>
            <p>₹ 5000</p>
          </div>
          <input
            type="range"
            min="1000"
            max="20000"
            step="500"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
          />
        </div>

        <div className="input-group">
          <div className="myyy">
            <label>Time Period (in years)</label>
            <p>10</p>
          </div>
          <input
            type="range"
            min="1"
            max="30"
            value={years}
            onChange={(e) => setYears(+e.target.value)}
          />
        </div>
      </div>

      <div className="returns-row">
        <div className="return-card">
          <h4>Saving Account</h4>
          <div className="card-conten">
            <div>
              <h3>₹ {calculateReturn(3.5)}</h3>
              <p>(with 3.5% return)</p>
            </div>
            <img src={savingIcon} alt="Savings Icon" className="card-icon" />
          </div>
        </div>

        <div className="return-card">
          <h4>Fixed Deposit</h4>
          <div className="card-conten">
            <div>
              <h3>₹ {calculateReturn(6)}</h3>
              <p>(with 6% return)</p>
            </div>
            <img src={depositIcon} alt="FD Icon" className="card-icon" />
          </div>
        </div>

        <div className="return-card">
          <h4>Gold</h4>
          <div className="card-conten">
            <div>
              <h3>₹ {calculateReturn(9)}</h3>
              <p>(with 9% return)</p>
            </div>
            <img src={goldIcon} alt="Gold Icon" className="card-icon" />
          </div>
        </div>

        <div className="return-card">
          <h4>Mutual Fund</h4>
          <div className="card-conten">
            <div>
              <h3>₹ {calculateReturn(12)}</h3>
              <p>(with 12% return)</p>
            </div>
            <img src={fundIcon} alt="Fund Icon" className="card-icon" />
          </div>
        </div>
      </div>

      <button className="cta-btn">Switch to Smarter Investments</button>
    </section>
  )
}

export default FDComparison
