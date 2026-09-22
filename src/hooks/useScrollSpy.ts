import { useEffect } from 'react'

export function useScrollSpy() {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-links a')

    function updateActiveNav() {
      const scrollY = window.pageYOffset
      sections.forEach((current) => {
        const section = current as HTMLElement
        const sectionTop = section.offsetTop - 120
        if (scrollY > sectionTop && scrollY <= sectionTop + section.offsetHeight) {
          navLinks.forEach((link) => {
            link.classList.remove('active')
            if (link.getAttribute('href') === `#${section.id}`) {
              link.classList.add('active')
            }
          })
        }
      })
    }

    updateActiveNav()
    window.addEventListener('scroll', updateActiveNav, { passive: true })
    return () => window.removeEventListener('scroll', updateActiveNav)
  }, [])
}