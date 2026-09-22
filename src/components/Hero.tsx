import './Hero.css'
import { ChevronDownIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MonitorIcon } from './icons'

const PRIMARY_STACK = ['Laravel', 'Angular', 'PostgreSQL', 'TypeScript']

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <div className="status-pill">
            <span className="status-indicator">
              <span className="status-ping" />
              <span className="status-dot" />
            </span>
            <span>Full-Time Junior Full Stack Developer at Lele Ventures Pvt. Ltd.</span>
          </div>

          <h1>
            Thoughtful software.
            <br />
            <span className="highlight-gradient">Dependably built.</span>
          </h1>

          <p className="hero-lead">
            Hi, I’m <strong>Prakash Dahal</strong>. I build reliable web applications, structured backend
            architectures, and clean, typed user interfaces using <strong>Laravel</strong>,{' '}
            <strong>Angular</strong>, <strong>PHP</strong>, and <strong>TypeScript</strong>. Based in Kathmandu,
            Nepal.
          </p>

          <div className="hero-actions">
            <a href="#experience" className="btn btn-primary">
              <span>Explore Experience</span>
              <ChevronDownIcon width={16} height={16} />
            </a>
            <a href="/resume.pdf" download className="btn btn-outline">
              <DownloadIcon width={16} height={16} />
              <span>Download CV</span>
            </a>
            <a
              href="https://github.com/Prakashdahal2005"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              aria-label="GitHub Profile"
            >
              <GitHubIcon width={16} height={16} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/prakash-dahal-018602341/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon width={16} height={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="hero-spec-card">
          <div className="spec-header">
            <span className="spec-title">
              <MonitorIcon width={14} height={14} />
              Developer Profile
            </span>
            <span className="spec-location-badge">Kathmandu, Nepal</span>
          </div>

          <div className="spec-list">
            <div className="spec-item">
              <span className="spec-key">Current Role</span>
              <span className="spec-val">Junior Full Stack Developer (Full-Time)</span>
            </div>
            <div className="spec-item">
              <span className="spec-key">Organization</span>
              <span className="spec-val">Lele Ventures Pvt. Ltd.</span>
            </div>
            <div className="spec-item">
              <span className="spec-key">Primary Stack</span>
              <div className="spec-tech-pills">
                {PRIMARY_STACK.map((tech) => (
                  <span className="spec-pill" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="spec-item">
              <span className="spec-key">Education</span>
              <span className="spec-val">BSc. CSIT (Tribhuvan Univ.)</span>
            </div>
            <div className="spec-item">
              <span className="spec-key">Engineering Style</span>
              <span className="spec-val">Modular MVC &amp; Clean REST APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}