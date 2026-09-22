import './Experience.css'
import { BriefcaseIcon } from './icons'

const DUTIES = [
  'Full-stack feature development using Laravel, Angular, PHP, and TypeScript across production environments.',
  'Designing robust backend business logic, request validation rules, authentication, and REST API endpoints.',
  'Structuring and optimizing PostgreSQL relational schemas, migrations, and query execution paths.',
  'Crafting modular, strictly typed Angular components, services, and reactive user interfaces.',
  'Diagnosing runtime issues, bug troubleshooting, legacy refactoring, and peer code reviews.',
  'Coordinating sprint milestones and version control workflows using Git and GitHub.',
]

const SKILLS = ['Laravel', 'Angular', 'PHP 8+', 'TypeScript', 'PostgreSQL', 'REST APIs', 'Git / GitHub']

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">02 / Experience</span>
          <h2>Work History</h2>
          <p className="section-subtext">
            Production experience delivering web features in cross-functional agile teams.
          </p>
        </div>

        <div className="experience-card">
          <div className="experience-top">
            <div className="exp-role-wrap">
              <div className="exp-badge-icon">
                <BriefcaseIcon width={24} height={24} />
              </div>
              <div>
                <h3 className="exp-title">Junior Full Stack Developer</h3>
                <div className="exp-company">
                  <span>Lele Ventures Pvt. Ltd.</span>
                  <span className="exp-company-tag">Full-Time</span>
                </div>
              </div>
            </div>

            <div className="exp-meta">
              <div className="exp-location">Kathmandu, Nepal</div>
              <span className="exp-date-badge">Present</span>
            </div>
          </div>

          <p className="exp-summary">
            Driving full-stack web application engineering across scalable backend services, RESTful API
            integrations, relational PostgreSQL databases, and reactive Angular interfaces.
          </p>

          <ul className="exp-duties">
            {DUTIES.map((duty) => (
              <li className="exp-duty-item" key={duty}>
                {duty}
              </li>
            ))}
          </ul>

          <div className="exp-skills-row">
            <span className="exp-skills-label">Applied Technologies:</span>
            {SKILLS.map((skill) => (
              <span className="spec-pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}