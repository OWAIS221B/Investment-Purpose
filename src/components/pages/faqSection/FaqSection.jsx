import React, { useState } from 'react'
import './FAQSection.css'
import faqImage from '../../../assets/employees.png' // adjust path as needed

const faqs = [
  {
    question: 'What’s the minimum to start a SIP?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.',
  },
  { question: 'Can I withdraw early?' },
  { question: 'How are mutual funds taxed?' },
  { question: 'Can I change funds later?' },
  { question: 'Is my money safe with AMCs?' },
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0) // first one expanded

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-image-wrapper">
          <img src={faqImage} alt="FAQ Visual" />
        </div>

        <div className="faq-content">
          <p className="faq-label">FAQs</p>
          <h2 className="faq-heading">What People Ask Before Starting</h2>

          <div className="faq-list">
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <span>{item.question}</span>
                  <span className="faq-toggle">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
                {openIndex === index && item.answer && (
                  <p className="faq-answer">{item.answer}</p>
                )}
              </div>
            ))}
          </div>

          <button className="faq-cta">Still Confused? Chat With Us →</button>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
