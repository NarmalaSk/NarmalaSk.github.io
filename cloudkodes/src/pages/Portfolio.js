import React from 'react';
import '../styles/Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio-page">
      <header className="portfolio-header">
        <h1 className="cloudkodes-title">CloudKodes</h1>
        <p className="subtitle">A Minimal Portfolio Snapshot</p>
      </header>

      <section className="portfolio-content">
        <p>This section contains a brief overview of the tools, projects, and contributions I've worked on in the cloud and DevOps ecosystem.</p>

        <ul>
          <li>🔧 Built and deployed CI/CD pipelines for various SaaS tools</li>
          <li>☁️ Worked with AWS, GCP, and Docker-based infrastructures</li>
          <li>📊 Created dashboards, monitoring, and automation scripts</li>
          <li>🔗 See full portfolio on the homepage for interactive details</li>
        </ul>
      </section>
    </div>
  );
}

export default Portfolio;
