import pieChart from '../../../assets/chart.png'
import './SIPCalculator.css'

const SIPCalculator = () => {
  return (
    <section className="sip-section">
      <h4 className="sub-heading">Calculator Tools</h4>
      <h2 className="main-heading">
        Want to Know How Much You Need to Invest?
      </h2>
      <p className="description">
        Explore powerful, free tools built to help you plan your investments,
        cut down taxes, and stay on track with your financial goals. No
        complexity—just results.
      </p>

      <div className="calculator-container">
        {/* Left box */}
        <div className="calculator-box">
          <div className="mode-toggle">
            <button className="active">SIP</button>
            <button>Lumpsum</button>
          </div>

          <div className="input-group">
            <p>
              If you had invested <strong>₹10,000</strong> every month
            </p>
            <input type="range" />
          </div>

          <div className="input-group">
            <p>
              Over a period of <strong>5Yrs</strong>
            </p>
            <input type="range" />
          </div>

          <div className="input-group">
            <p>
              With the rate of return of <strong>12%</strong>
            </p>
            <input type="range" />
          </div>

          <div className="earning-result">
            You would have earned <span>₹ 8,24,864</span>
          </div>
        </div>

        {/* Right box */}
        <div className="result-box">
          <img src={pieChart} alt="Pie chart" className="pie-image" />

          <div className="amount-details">
            <p>
              Your Invested Amount will be{' '}
              <span className="amount invested">₹ 6,00,000</span>
            </p>
            <p>
              Your Estimated Return will be{' '}
              <span className="amount return">₹ 2,24,864</span>
            </p>
            <button className="invest-button">Invest Now</button>
          </div>
        </div>
      </div>

      <button className="view-all-button">View all Calculators</button>
    </section>
  )
}

export default SIPCalculator
