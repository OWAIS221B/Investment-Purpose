import React from 'react'
import './BlogSection.css'

import blog1 from '../../../assets/discourse.png'
import blog2 from '../../../assets/coins.png'

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-left">
          <p className="section-label">Learning Center</p>
          <h2 className="blog-heading">
            Not a Finance Person?
            <br />
            No Problem.
          </h2>
          <p className="blog-description">
            We break down finance into easy reads that actually make sense. From
            choosing the right fund to understanding inflation, our blog helps
            you invest smarter
          </p>
          <button className="blog-btn">View All Blogs →</button>
        </div>

        <div className="blog-right">
          <div className="blog-card">
            <img src={blog1} alt="blog-1" />
            <div className="card-content">
              <h4>Lorem ipsum dolor sit amet, consectetur....</h4>
              <div className="card-footer">
                <span className="read-more">Read More →</span>
                <span className="date">08 July 2025</span>
              </div>
            </div>
          </div>

          <div className="blog-card">
            <img src={blog2} alt="blog-2" />
            <div className="card-content">
              <h4>Lorem ipsum dolor sit amet, consectetur....</h4>
              <div className="card-footer">
                <span className="read-more">Read More →</span>
                <span className="date">08 July 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
