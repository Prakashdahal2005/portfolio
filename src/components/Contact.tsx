import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import './Contact.css'
import { GitHubIcon, LinkedInIcon, SendIcon } from './icons'
import { useToast } from '../hooks/useToast'
import { isValidEmail } from '../utils/validation'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/prakashdahal2005@gmail.com'
const NATIVE_FORM_ENDPOINT = 'https://formsubmit.co/prakashdahal2005@gmail.com'
const EMAIL_ERROR = 'Please enter a valid email address like name@example.com.'

export default function Contact() {
  const showToast = useToast()
  const formRef = useRef<HTMLFormElement>(null)
  const replyToRef = useRef<HTMLInputElement>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [emailError, setEmailError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!isValidEmail(email)) {
      setEmailError(EMAIL_ERROR)
      return
    }
    setEmailError('')

    if (replyToRef.current) {
      replyToRef.current.value = email.trim()
    }

    setSubmitting(true)

    const payload: Record<string, string> = {}
    const formData = new FormData(formRef.current ?? undefined)
    formData.forEach((value, key) => {
      payload[key] = String(value)
    })

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (!response.ok) {
        throw new Error('FormSubmit returned an error')
      }
      setName('')
      setEmail('')
      setMessage('')
      if (replyToRef.current) replyToRef.current.value = ''
      showToast('Message sent successfully!', 3500)
    } catch {
      // Native POST fallback (not CORS-restricted) guarantees delivery.
      if (formRef.current) {
        formRef.current.action = NATIVE_FORM_ENDPOINT
        formRef.current.submit()
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">06 / Connect</span>
          <h2>Get in Touch</h2>
          <p className="section-subtext">
            Feel free to reach out for tech conversations, engineering discussions, or following my work.
          </p>
        </div>

        <div className="contact-bento">
          <div className="contact-cta-card">
            <div>
              <h3 className="contact-cta-title">Let’s connect and talk engineering.</h3>
              <p className="contact-cta-desc">
                Always glad to connect with fellow engineers and developers for technical discussions, knowledge
                sharing, and networking.
              </p>
            </div>

            <form className="contact-form" ref={formRef} action={FORM_ENDPOINT} method="POST" onSubmit={handleSubmit} noValidate>
              <input type="hidden" name="_subject" value="New portfolio message" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_replyto" ref={replyToRef} />
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />

              <div className="form-field form-field-half">
                <label htmlFor="contactName">Name</label>
                <input
                  type="text"
                  id="contactName"
                  name="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>

              <div className={`form-field form-field-half${emailError ? ' error' : ''}`}>
                <label htmlFor="contactEmail">Email</label>
                <input
                  type="email"
                  id="contactEmail"
                  name="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value)
                    if (emailError) setEmailError('')
                  }}
                  required
                />
                <span className="field-error" role="alert">
                  {emailError}
                </span>
              </div>

              <div className="form-field">
                <label htmlFor="contactMessage">Message</label>
                <textarea
                  id="contactMessage"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project or opportunity..."
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                />
              </div>

              <button type="submit" className="form-submit-btn" disabled={submitting}>
                <SendIcon width={16} height={16} />
                <span>{submitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

          <div className="contact-links-grid">
            <a
              href="https://github.com/Prakashdahal2005"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-card"
            >
              <div className="social-card-left">
                <div className="social-icon">
                  <GitHubIcon width={20} height={20} />
                </div>
                <div>
                  <div className="social-title">GitHub</div>
                  <div className="social-handle">@Prakashdahal2005</div>
                </div>
              </div>
              <div className="social-arrow">↗</div>
            </a>

            <a
              href="https://www.linkedin.com/in/prakash-dahal-018602341/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-card"
            >
              <div className="social-card-left">
                <div className="social-icon">
                  <LinkedInIcon width={20} height={20} />
                </div>
                <div>
                  <div className="social-title">LinkedIn</div>
                  <div className="social-handle">prakash-dahal-018602341</div>
                </div>
              </div>
              <div className="social-arrow">↗</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}