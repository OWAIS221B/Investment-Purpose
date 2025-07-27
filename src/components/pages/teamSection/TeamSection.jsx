import React from 'react'
import './TeamSection.css'
import img1 from '../../../assets/member1.png'
import img2 from '../../../assets/member2.png'
import img3 from '../../../assets/member3.png'
import img4 from '../../../assets/member4.png'

const teamMembers = [
  { name: 'Member’s Name', role: 'Designation', img: img1 },
  { name: 'Member’s Name', role: 'Designation', img: img2 },
  { name: 'Member’s Name', role: 'Designation', img: img3 },
  { name: 'Member’s Name', role: 'Designation', img: img4 },
]

const TeamSection = () => {
  return (
    <section className="team-section">
      <p className="team-subheading">Our Team</p>
      <h2 className="team-heading">Meet the Humans Behind the Strategy</h2>
      <p className="team-description">
        We’re a team of SEBI-registered experts who help you plan, track, and
        tweak your investments.
      </p>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} className="team-img" />
            <div className="team-info">
              <p className="team-name">{member.name}</p>
              <p className="team-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TeamSection
