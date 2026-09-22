import './Education.css'
import { GraduationCapIcon } from './icons'

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">05 / Education</span>
          <h2>Academic Background</h2>
          <p className="section-subtext">Foundational computer science theory and applied computing systems.</p>
        </div>

        <div className="edu-card">
          <div className="edu-main">
            <div className="edu-icon-wrap">
              <GraduationCapIcon width={26} height={26} />
            </div>
            <div>
              <h3 className="edu-degree">
                BSc. Computer Science and Information Technology (CSIT)
              </h3>
              <div className="edu-inst">Tribhuvan University • Institute of Science and Technology</div>
            </div>
          </div>

          <div className="edu-right">
            <div className="edu-years">2022 – 2026</div>
            <span className="edu-standing">First Division</span>
          </div>
        </div>
      </div>
    </section>
  )
}