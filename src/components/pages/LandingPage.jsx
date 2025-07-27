import React from 'react'
import Hero from './hero/Hero'
import SectionInvest from './invest/Invest'
import MutualFundSection from './funds/MutualFundsSection'
import MutualFundsBenefits from './mutualFundsBenefits/MutualFundsBenefits'
import MFDComparison from './mfdComparison/MFDComparison'
import SIPCalculator from './sipcalculators/SipCalculator'
import FDComparison from './fdComparison/FdComparison'
import TeamSection from './teamSection/TeamSection'
import BlogSection from './blogSection/BlogSection'
import FAQSection from './faqSection/FaqSection'
import ConnectForm from './connectForm/ConnectForm'

const LandingPage = () => {
  return (
    <div style={{ background: 'white' }}>
      <Hero />
      <SectionInvest />
      <MutualFundSection />
      <MutualFundsBenefits />
      <MFDComparison />
      <SIPCalculator />
      <FDComparison />
      <TeamSection />
      <BlogSection />
      <FAQSection />
      <ConnectForm />
    </div>
  )
}

export default LandingPage
