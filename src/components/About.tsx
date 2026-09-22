import './About.css'

const METRICS = [
  {
    label: 'Backend Architecture',
    value: 'Laravel & REST APIs',
    desc: 'Robust request validation, service layers, and schema migrations.',
  },
  {
    label: 'Frontend Engineering',
    value: 'Angular & TypeScript',
    desc: 'Strict type safety, reactive state, and reusable component architectures.',
  },
  {
    label: 'Data Persistence',
    value: 'PostgreSQL Relational DB',
    desc: 'Normalized schemas, index optimization, and relational integrity.',
  },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">01 / About</span>
          <h2>Focus &amp; Discipline</h2>
          <p className="section-subtext">
            Building web software with architectural clarity, verified correctness, and human readability.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-main-card">
            <p className="about-quote">
              "I bridge structured backend logic and reactive frontend workflows to deliver software that scales
              predictably."
            </p>
            <p className="about-text">
              I am a full-stack software developer centered on engineering web applications from business domain
              specifications to polished, dependable interfaces. My day-to-day focus revolves around Laravel for
              backend architecture, REST API design, and relational database modeling, paired with Angular and
              TypeScript for clean, component-driven client experiences.
            </p>
            <p className="about-text">
              I believe good software is built by asking the right questions early, defining solid database
              boundaries, and applying disciplined testing and review before shipping.
            </p>
          </div>

          <div className="about-sidebar">
            {METRICS.map((metric) => (
              <div className="metric-card" key={metric.label}>
                <div className="metric-label">{metric.label}</div>
                <div className="metric-val">{metric.value}</div>
                <p className="metric-desc">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}