import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Home() {
  return (
    <div className="container">
      <Navbar />

      <header className="hero">
        <div className="hero-content">
          <h1>Disaster Recovery & Migration as a Service</h1>
          <p>Leverage lift-and-shift or lift-from-scratch cloud strategies for reliable, scalable transformation.</p>
          <button className="get-started-btn">Get Started</button>
        </div>
      </header>

      <section id="features" className="section">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="card">
            <h3>Automated Backups</h3>
            <p>Keep your data safe with intelligent, scheduled backups across regions.</p>
          </div>
          <div className="card">
            <h3>Zero-Downtime Migration</h3>
            <p>Move workloads without interruptions using our advanced migration engine.</p>
          </div>
          <div className="card">
            <h3>Custom OSS Tools</h3>
            <p>Backed by custom open-source tooling designed for enterprise-grade resilience.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
