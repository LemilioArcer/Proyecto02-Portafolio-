import { Link } from "react-router";
import "./Projects.css";

const Projects = () => {
  return (
    <>
     <div className="projects-container">

      <h1 className="title">PROJECTS</h1>

      <div className="projects-grid">
        
        <div className="project-card">
          <h2>Smart CO Detector</h2>
          <p className="project-desc">
            Intelligent carbon monoxide detection system with real-time monitoring and emergency alerts.
          </p>

          <p className="project-tech">
            Raspberry Pi • Firebase • Twilio
          </p>

          <ul>
            <li>MQ-7 sensor gas monitoring</li>
            <li>Real-time database updates</li>
            <li>Automatic SMS alert system</li>
          </ul>
        </div>

        <div className="project-card">
          <h2>Königsberg Bridge</h2>
          <p className="project-desc">
            C++ project focused on solving maze-like structures using logical flow and structured conditions.
          </p>

          <p className="project-tech">
            C++ • Logic • Problem Solving
          </p>

          <ul>
            <li>Conditional navigation system</li>
            <li>Algorithm-based path exploration</li>
            <li>Structured decision-making logic</li>
          </ul>
        </div>

        <div className="project-card">
          <h2>Evolve Rush</h2>
          <p className="project-desc">
            2D retro-style game about character evolution across multiple environments and progressive challenges.
          </p>

          <p className="project-tech">
            Godot • GDScript • Game Design
          </p>

          <ul>
            <li>Multi-level progression system</li>
            <li>Enemies, obstacles, and collisions</li>
            <li>Character evolution mechanics</li>
          </ul>
        </div>

        <div className="project-card">
          <h2>Weekly Cost Analysis</h2>
          <p className="project-desc">
            Python data analysis project for exploring weekly expenses, budgets, activity patterns, and cost prediction.
          </p>

          <p className="project-tech">
            Python • Pandas • Scikit-learn
          </p>

          <ul>
            <li>Data cleaning and preprocessing</li>
            <li>Exploratory analysis and visualizations</li>
            <li>Linear regression cost prediction</li>
          </ul>
        </div>

        <div className="project-card">
          <h2>Residencias Tec Network</h2>
          <p className="project-desc">
            Smart network infrastructure design for Tec residences focused on security, scalability, and wireless coverage.
          </p>

          <p className="project-tech">
            Networking • Cisco • VLANs
          </p>

          <ul>
            <li>Support for 500+ connected devices</li>
            <li>Wi-Fi, CCTV, IoT, and IP telephony</li>
            <li>Secure segmented enterprise architecture</li>
          </ul>
        </div>

        <div className="project-card">
          <h2>Fortnite Creative Systems</h2>
          <p className="project-desc">
            Development of multiple interactive Fortnite islands using advanced logic systems and gameplay mechanics.
          </p>

          <p className="project-tech">
            Fortnite Creative • UEFN • Game Design
          </p>

          <ul>
            <li>30+ functional game maps</li>
            <li>Channel-based logic systems</li>
            <li>Custom gameplay mechanics</li>
          </ul>
        </div>

      </div>

      <br />
      <p className="links">
        <Link to="/">Go back</Link>
      </p>

    </div>
    </>
  );
};

export default Projects;