import './Stack.css'
import { ServerIcon, TerminalIcon, WindowIcon } from './icons'

const CATEGORIES = [
  {
    title: 'Backend Services',
    desc: 'Constructing reliable server architectures, service patterns, and API contracts.',
    icon: ServerIcon,
    pills: ['Laravel', 'PHP', 'REST APIs', 'PostgreSQL', 'Database Modeling'],
  },
  {
    title: 'Frontend Architecture',
    desc: 'Crafting responsive, type-safe interfaces with modern component design.',
    icon: WindowIcon,
    pills: ['Angular', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Responsive Design'],
  },
  {
    title: 'Practices & Workflow',
    desc: 'Disciplined collaboration methods that keep projects maintainable.',
    icon: TerminalIcon,
    pills: ['Git', 'GitHub', 'MVC Architecture', 'Agile Collaboration', 'Code Reviews'],
  },
]

export default function Stack() {
  return (
    <section id="stack">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">03 / Technical Stack</span>
          <h2>Tools &amp; Technologies</h2>
          <p className="section-subtext">
            The core technologies and libraries I rely on to engineer modern digital systems.
          </p>
        </div>

        <div className="skills-grid">
          {CATEGORIES.map((category) => {
            const Icon = category.icon
            return (
              <div className="skill-card" key={category.title}>
                <div className="skill-card-top">
                  <div className="skill-icon-wrapper">
                    <Icon width={22} height={22} />
                  </div>
                  <h3 className="skill-card-title">{category.title}</h3>
                  <p className="skill-card-desc">{category.desc}</p>
                </div>
                <div className="skill-tag-group">
                  {category.pills.map((pill) => (
                    <span className="skill-pill" key={pill}>
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}