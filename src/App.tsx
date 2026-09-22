import './index.css'
import { ToastProvider } from './components/Toast'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Stack from './components/Stack'
import Approach from './components/Approach'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useTheme } from './hooks/useTheme'
import { useScrollSpy } from './hooks/useScrollSpy'

export default function App() {
  useTheme()
  useScrollSpy()

  return (
    <ToastProvider>
      <div className="ambient-glow" aria-hidden="true" />

      <Header />

      <main id="top">
        <Hero />
        <About />
        <Experience />
        <Stack />
        <Approach />
        <Education />
        <Contact />
      </main>

      <Footer />
    </ToastProvider>
  )
}