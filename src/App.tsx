import './App.css'

/**
 * Main Application Component
 * Displays student information and project meta-data for LAB-1.
 */
function App() {
  return (
    <div className="app-wrapper">
      <main className="container">
        <header className="header">
          <h1>Web Design & Programming</h1>
          <p className="subtitle">Laboratory Assignment Series</p>
        </header>

        <section className="profile-card">
          <h2>Student Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="label">Full Name</span>
              <span className="value">Mehmet Sait Dündar</span>
            </div>
            <div className="info-item">
              <span className="label">Student ID</span>
              <span className="value">235541027</span>
            </div>
            <div className="info-item">
              <span className="label">Assignment</span>
              <span className="value">LAB-1</span>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p className="status-text">Environment Setup & Project Initialization</p>
          <div className="status-badge">Completed</div>
        </footer>
      </main>
    </div>
  )
}

export default App
