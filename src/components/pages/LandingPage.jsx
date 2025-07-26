import React from 'react'
import Hero from './hero/Hero'
import SectionInvest from './invest/Invest'
import MutualFundSection from './funds/MutualFundsSection'
import MutualFundsBenefits from './mutualFundsBenefits/MutualFundsBenefits'
import MFDComparison from './mfdComparison/MFDComparison'
import SIPCalculator from './sipcalculators/SipCalculator'

const LandingPage = () => {
  return (
    <div style={{ background: 'white' }}>
      <Hero />
      <SectionInvest />
      <MutualFundSection />
      <MutualFundsBenefits />
      <MFDComparison />
      <SIPCalculator />-
    </div>
  )
}

export default LandingPage
