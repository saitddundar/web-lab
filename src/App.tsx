import { useState } from 'react'
import './tokens.css'
import './App.css'

/**
 * LAB-3: Modern CSS & Responsive Layout
 * Implementing Design Tokens, Fluid Typography, Flexbox, and CSS Grid.
 */
function App() {
  const [formStatus, setFormStatus] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('Thank you! Your message has been sent successfully.')
  }

  // Dummy projects for CSS Grid implementation
  const projects = [
    { title: 'Project One', desc: 'Developing an accessible portfolio with React.', category: 'Web App' },
    { title: 'Project Two', desc: 'Implementing a modern design system with CSS tokens.', category: 'Design' },
    { title: 'Project Three', desc: 'Exploring fluid typography and responsive grids.', category: 'Frontend' },
    { title: 'Project Four', desc: 'Creating a highly usable contact form with ARIA.', category: 'UX/UI' },
  ]

  return (
    <div className="app-layout">
      {/* SKIP LINK */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* SEMANTIC HEADER WITH FLEXBOX */}
      <header className="main-header" role="banner">
        <div className="container header-container">
          <div className="brand">
            <h1>MSD</h1>
          </div>
          <nav className="main-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main id="main-content">
        {/* HERO SECTION */}
        <section id="about" className="hero-section" aria-labelledby="about-title">
          <div className="container">
            <div className="hero-content">
              <h2 id="about-title">Mehmet Sait Dündar</h2>
              <p className="hero-subtitle">Student & Aspiring Frontend Developer | ID: 235541027</p>
              <article className="hero-card">
                <p>
                  Specializing in creating visually stunning and highly accessible digital experiences.
                  Currently completing Lab Assignments for <strong>Web Design and Programming</strong>.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION WITH CSS GRID */}
        <section id="projects" className="section projects-section" aria-labelledby="projects-title">
          <div className="container">
            <h2 id="projects-title" className="section-title">My Projects</h2>
            <div className="projects-grid">
              {projects.map((project, idx) => (
                <article key={idx} className="project-card">
                  <div className="project-header">
                    <span className="project-tag">{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS SECTION WITH FLEXBOX */}
        <section id="skills" className="section skills-section" aria-labelledby="skills-title">
          <div className="container">
            <h2 id="skills-title" className="section-title">Technical Expertise</h2>
            <div className="skills-container">
              <span className="skill-pill" role="listitem">React.js</span>
              <span className="skill-pill" role="listitem">TypeScript</span>
              <span className="skill-pill" role="listitem">CSS Grid</span>
              <span className="skill-pill" role="listitem">Modern Flexbox</span>
              <span className="skill-pill" role="listitem">Fluid UI</span>
              <span className="skill-pill" role="listitem">A11y (WCAG)</span>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section contact-section" aria-labelledby="contact-title">
          <div className="container narrow">
            <h2 id="contact-title" className="section-title">Get in Touch</h2>
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} noValidate className="styled-form">
                <div className="form-row">
                  <div className="field-group">
                    <label htmlFor="name-input">FULL NAME</label>
                    <input type="text" id="name-input" name="name" required minLength={3} placeholder="John Doe" />
                  </div>
                  <div className="field-group">
                    <label htmlFor="email-input">EMAIL</label>
                    <input type="email" id="email-input" name="email" required placeholder="john@example.com" />
                  </div>
                </div>
                <div className="field-group">
                  <label htmlFor="msg-text">MESSAGE</label>
                  <textarea id="msg-text" name="message" required rows={5} placeholder="How can I help you?"></textarea>
                </div>

                <button type="submit" className="primary-btn">SEND MESSAGE</button>

                {formStatus && (
                  <div className="form-feedback" role="alert">
                    {formStatus}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer-layout">
        <div className="container">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} MSD. Built for Academic Excellence.</p>
            <div className="badge-row">
              <span className="lab-badge">LAB-3 Complete</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
