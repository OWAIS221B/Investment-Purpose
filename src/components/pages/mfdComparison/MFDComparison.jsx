import './MFDComparison.css'
import bgImage from '../../../assets/mfd.png'

const MFDComparison = () => {
  return (
    <section
      className="mfd-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="content-wrappe">
        <h3 className="highlight-title">DIY Platforms vs Guided Investing</h3>
        <h2 className="main-headin">Why Choose an MFD?</h2>
        <p className="descriptio">
          You can choose funds on your own. Or you can work with someone who
          does this every day — and helps you avoid big mistakes.
        </p>

        <div className="table-wrappe">
          <div className="comparison-table">
            <div className="table-row header">
              <div>Parameter</div>
              <div>DIY Platforms</div>
              <div>With a MFD Like Us</div>
            </div>

            <div className="table-row">
              <div data-label="Parameter">Fund Selection</div>
              <div data-label="DIY Platforms">Self-research</div>
              <div data-label="With a MFD Like Us">Guided by experts</div>
            </div>

            <div className="table-row">
              <div data-label="Parameter">Risk Profiling</div>
              <div data-label="DIY Platforms">Basic quiz</div>
              <div data-label="With a MFD Like Us">Personalized advice</div>
            </div>

            <div className="table-row">
              <div data-label="Parameter">After-sales Support</div>
              <div data-label="DIY Platforms">Chatbot</div>
              <div data-label="With a MFD Like Us">1:1 human advisor</div>
            </div>

            <div className="table-row">
              <div data-label="Parameter">Discipline</div>
              <div data-label="DIY Platforms">On your own</div>
              <div data-label="With a MFD Like Us">Regular check-ins</div>
            </div>

            <div className="table-row">
              <div data-label="Parameter">Portfolio Checkups</div>
              <div data-label="DIY Platforms">Manual</div>
              <div data-label="With a MFD Like Us">Done for you</div>
            </div>
          </div>
        </div>

        {/* Optional CTA */}
        {/* <button className="cta-button">Get Real Help →</button> */}
      </div>
    </section>
  )
}

export default MFDComparison
