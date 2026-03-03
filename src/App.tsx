import { useState } from 'react'
import './tokens.css'
import './App.css'

function App() {
  const [formStatus, setFormStatus] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('Message Dispatched. Transmission Successful.')
  }

  return (
    <div className="app-shell">
      <div className="bg-glow" aria-hidden="true"></div>
      <a href="#main-content" className="skip-link">Skip to Content</a>

      <header className="header-primary" role="banner">
        <div className="container-fluid header-container">
          <div className="logo-text">saitddundar</div>
          <nav className="nav-primary" aria-label="Quick Access">
            <ul className="nav-ul">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header >

      <div className="ide-workspace">
        <aside className="ide-sidebar" aria-hidden="true">
          <div style={{ padding: '20px', fontSize: '10px', color: '#888' }}>
            <p>▼ EXPLORER</p>
            <ul style={{ listStyle: 'none', marginTop: '10px', paddingLeft: '10px' }}>
              <li style={{ color: '#fff' }}>📄 App.tsx</li>
              <li>📄 tokens.css</li>
              <li>📄 README.md</li>
            </ul>
          </div>
        </aside>

        <main id="main-content" className="editor-view">
          {/* ABOUT SECTION */}
          <section id="about" className="section hero-about" aria-labelledby="about-title">
            <div className="container-fluid">
              <header className="about-header">
                <h1 id="about-title">Mehmet Sait Dündar</h1>
                <p className="subtitle-mono">Part Time CS Student (ID: 235541027) / Full Time Muslim</p>
              </header>

              <article className="main-card">
                <div className="card-inner">
                  <p>
                    Specializing in the intersection of academic structure and digital precision.
                    Currently focusing on high-performance web systems and accessible architecture.
                  </p>
                </div>
              </article>
            </div>
          </section>

          {/* PROJECTS GRID (LAB REQUIREMENT) */}
          <section id="projects" className="section projects-section" aria-labelledby="projects-title">
            <div className="container-fluid">
              <h2 id="projects-title" className="sub-header-mono">active_projects</h2>
              <div className="projects-grid">
                <article className="project-node">
                  <div className="node-id">01</div>
                  <h3>Frontend System</h3>
                  <p>Grid-based responsive layouts.</p>
                </article>
                <article className="project-node">
                  <div className="node-id">02</div>
                  <h3>Logic Modules</h3>
                  <p>TypeScript based functional units.</p>
                </article>
              </div>
            </div>
          </section>

          {/* CONTACT SECTION */}
          <section id="contact" className="section contact-section" aria-labelledby="contact-title">
            <div className="container-fluid narrow">
              <h2 id="contact-title" className="section-title">Contact</h2>
              <div className="form-workspace">
                <form onSubmit={handleSubmit} noValidate className="mono-form">
                  <div className="form-grid">
                    <div className="field-box">
                      <label htmlFor="user-name">NAME_ID</label>
                      <input type="text" id="user-name" name="name" required minLength={3} placeholder="Sait Dündar" />
                    </div>
                    <div className="field-box">
                      <label htmlFor="user-email">EMAIL_ADDR</label>
                      <input type="email" id="user-email" name="email" required placeholder="name@domain.com" />
                    </div>
                  </div>

                  <div className="field-box">
                    <label htmlFor="user-msg">MESSAGE_PAYLOAD</label>
                    <textarea id="user-msg" name="message" required rows={4} placeholder="Type your inquiry..."></textarea>
                  </div>

                  <button type="submit" className="button-primary" aria-label="Send Inquiry">
                    SUBMIT_SEQUENCE
                  </button>

                  {formStatus && (
                    <div className="form-status" role="alert" id="success-alert">
                      [STATUS: {formStatus}]
                    </div>
                  )}
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="footer-status">
        <div className="container-fluid">
          <p className="copy">© {new Date().getFullYear()} Mehmet Sait Dündar</p>
        </div>
      </footer>
    </div >
  )
}

export default App
