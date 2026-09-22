import './Header.css'
import { useTheme } from '../hooks/useTheme'
import { DownloadIcon, MoonIcon, SunIcon } from './icons'

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'approach', label: 'Approach' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <header>
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label="Prakash Dahal Home">
          <div className="brand-avatar">PD</div>
          <div className="brand-text">
            <span className="brand-name">Prakash Dahal</span>
            <span className="brand-role">Junior Full Stack Developer</span>
          </div>
        </a>

        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="nav-item">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a href="/resume.pdf" download className="theme-btn" aria-label="Download CV">
              <DownloadIcon className="theme-icon" />
              <span>CV</span>
            </a>
            <button type="button" className="theme-btn" onClick={toggle} aria-label="Toggle dark/light theme">
              {isDark ? <SunIcon className="theme-icon" /> : <MoonIcon className="theme-icon" />}
              <span>{isDark ? 'Light' : 'Dark'}</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}