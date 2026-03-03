import { useState } from 'react'
import './App.css'

/**
 * LAB-2: Semantic HTML, Accessibility (a11y), and Forms
 * Implementing a professional portfolio structure.
 */
function App() {
  const [formStatus, setFormStatus] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('Thank you! Your message has been sent successfully.')
  }

  return (
    <div className="app-layout">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      {/* SEMANTIC HEADER */}
      <header className="main-header" role="banner">
        <div className="container">
          <h1>Mehmet Sait Dündar</h1>
          <nav className="main-nav" aria-label="Main Navigation">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* SEMANTIC MAIN CONTENT */}
      <main id="main-content">
        {/* ABOUT SECTION */}
        <section id="about" className="section" aria-labelledby="about-title">
          <div className="container">
            <h2 id="about-title">About Me</h2>
            <article className="content-card">
              <p>
                I am a passionate developer focused on creating accessible and user-friendly web experiences.
                Currently working on Laboratory Assignments for the Web Design and Programming course.
              </p>
              <p><strong>Student ID:</strong> 235541027</p>
            </article>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section" aria-labelledby="skills-title">
          <div className="container">
            <h2 id="skills-title">My Skills</h2>
            <div className="skills-grid">
              <span className="skill-badge" role="listitem">React</span>
              <span className="skill-badge" role="listitem">TypeScript</span>
              <span className="skill-badge" role="listitem">Modern CSS</span>
              <span className="skill-badge" role="listitem">Web Accessibility</span>
            </div>
          </div>
        </section>

        {/* ACCESSIBLE FORM SECTION */}
        <section id="contact" className="section contact-section" aria-labelledby="contact-title">
          <div className="container">
            <h2 id="contact-title">Contact Me</h2>
            <div className="form-card">
              <form onSubmit={handleSubmit} noValidate aria-labelledby="contact-title">
                <div className="form-group">
                  <label htmlFor="user-name">Full Name</label>
                  <input
                    type="text"
                    id="user-name"
                    name="name"
                    required
                    minLength={3}
                    placeholder="Enter your name"
                    aria-required="true"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="user-email">Email Address</label>
                  <input
                    type="email"
                    id="user-email"
                    name="email"
                    required
                    placeholder="example@domain.com"
                    aria-required="true"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="user-message">Message</label>
                  <textarea
                    id="user-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Your message here..."
                    aria-required="true"
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" aria-label="Send Message">
                  Send Message
                </button>

                {formStatus && (
                  <div className="form-alert" role="alert" id="form-success">
                    {formStatus}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* SEMANTIC FOOTER */}
      <footer className="main-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Mehmet Sait Dündar. All rights reserved.</p>
          <p className="footer-meta">LAB-2: Semantic HTML & Accessibility</p>
        </div>
      </footer>
    </div>
  )
}

export default App
