import React from 'react'
import './Invest.css'

const data = [
  { x: 0, mf: 0, fd: 0 },
  { x: 1, mf: 6000, fd: 3000 },
  { x: 2, mf: 12000, fd: 6000 },
  { x: 3, mf: 18000, fd: 8000 },
  { x: 4, mf: 24000, fd: 10000 },
  { x: 5, mf: 30000, fd: 12000 },
  { x: 6, mf: 34000, fd: 14000 },
]

const maxY = 40000
const chartHeight = 350
const chartWidth = 520
const xStep = chartWidth / (data.length - 1)

const getY = (val) => 360 - (val / maxY) * chartHeight

const SectionInvest = () => {
  const mfPath = data
    .map((point, i) => {
      const x = 40 + i * xStep
      const y = getY(point.mf)
      return `${i === 0 ? 'M' : 'L'}${x},${y}`
    })
    .join(' ')

  const fdPath = data
    .map((point, i) => {
      const x = 40 + i * xStep
      const y = getY(point.fd)
      return `${i === 0 ? 'M' : 'L'}${x},${y}`
    })
    .join(' ')

  const mfAreaPath = `${mfPath} L${
    40 + (data.length - 1) * xStep
  },360 L40,360 Z`

  return (
    <section className="invest-section">
      <div className="invest-text">
        <h4>Rise With MF</h4>
        <h2>
          Why Let Inflation Win?
          <br /> Start Investing Smart with <u>Mutual Funds</u>.
        </h2>
        <p>
          <strong>FDs aren’t keeping up. Gold’s not enough.</strong> It’s time
          to make your money actually grow. Inflation is eating into your
          savings, and traditional investments just aren’t cutting it anymore.
          Fixed Deposits offer safety, but the returns barely beat rising costs.
          Gold may shine, but it doesn’t always deliver consistent growth.
        </p>

        <div className="invest-labels">
          <span>
            <strong>SEBI</strong> Compliant
          </span>
          <span>
            <strong>AMFI</strong> Registered
          </span>
          <span>
            <strong>₹500 Cr+</strong> AUM Handled
          </span>
        </div>

        <button className="invest-btn">Start Investing Now</button>
      </div>

      <div className="invest-graph">
        <svg
          viewBox="0 0 580 400"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Graph Part */}
          
          {/* Gradient for MF */}
          <defs>
            <linearGradient id="mfGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFA336" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFA336" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Axes */}
          <line x1="40" y1="10" x2="40" y2="360" stroke="#000" />
          <line x1="40" y1="360" x2="560" y2="360" stroke="#000" />

          {/* Y-Axis*/}
          {[0, 10000, 20000, 30000, 40000].map((val, i) => {
            const y = getY(val)
            return (
              <g key={i}>
                <line x1="35" x2="40" y1={y} y2={y} stroke="#000" />
                <text x="5" y={y + 4} fontSize="10">
                  {val}
                </text>
              </g>
            )
          })}

          {/* X-Axis*/}
          {data.map((point, i) => {
            const x = 40 + i * xStep
            return (
              <g key={i}>
                <line x1={x} x2={x} y1="360" y2="365" stroke="#000" />
                <text x={x - 5} y="380" fontSize="10">
                  {point.x}
                </text>
              </g>
            )
          })}

          {/* Area under Mutual Fund */}
          <path d={mfAreaPath} fill="url(#mfGradient)" />

          {/* Lines */}
          <path d={mfPath} stroke="#FFA336" strokeWidth="3" fill="none" />
          <path d={fdPath} stroke="#000" strokeWidth="2" fill="none" />

          {/* Labels */}
          <text x="50" y="30" fontSize="14" fill="#000">
            Mutual Fund vs FD
          </text>
          <circle cx="400" cy="20" r="5" fill="#FFA336" />
          <text x="410" y="25" fontSize="12" fill="#000">
            Mutual Funds
          </text>
          <circle cx="400" cy="40" r="5" fill="#000" />
          <text x="410" y="45" fontSize="12" fill="#000">
            Fixed Deposits
          </text>
        </svg>
      </div>
    </section>
  )
}

export default SectionInvest
