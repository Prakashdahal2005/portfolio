import './Approach.css'

const PHASES = [
  {
    number: '01',
    name: 'Understand',
    info: 'Clarify business requirements, edge cases, and architectural constraints before touching code.',
  },
  {
    number: '02',
    name: 'Design',
    info: 'Establish straightforward data schemas, normalized tables, and clean, decoupled API contracts.',
  },
  {
    number: '03',
    name: 'Build',
    info: 'Write clean, typed, readable code using modern tooling responsibly to accelerate implementation.',
  },
  {
    number: '04',
    name: 'Verify',
    info: 'Validate inputs, test boundary conditions, and debug thoroughly until the system is rock solid.',
  },
]

export default function Approach() {
  return (
    <section id="approach">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">04 / Approach</span>
          <h2>How I Work</h2>
          <p className="section-subtext">
            AI-assisted exploration paired firmly with engineering judgment and disciplined verification.
          </p>
        </div>

        <div className="approach-grid">
          {PHASES.map((phase) => (
            <div className="approach-card" key={phase.number}>
              <div className="approach-num">
                <span>Phase</span>
                <div className="approach-num-badge">{phase.number}</div>
              </div>
              <h3 className="approach-name">{phase.name}</h3>
              <p className="approach-info">{phase.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}