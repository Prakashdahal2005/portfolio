import './Footer.css'

const FOOTER_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div className="footer-left">
          <p>© 2026 Prakash Dahal. Crafted with focus and discipline.</p>
        </div>

        <ul className="footer-nav">
          {FOOTER_LINKS.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a href="#top" className="back-to-top" aria-label="Back to top">
          <span>Back to top</span>
          <span>↑</span>
        </a>
      </div>
    </footer>
  )
}