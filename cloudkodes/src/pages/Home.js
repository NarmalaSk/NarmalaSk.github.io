import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../App.css';
import Lottie from 'lottie-react';

import vmAnimation from '../assets/vm.json';
import containerAnimation from '../assets/container.json';
import k8sAnimation from '../assets/k8s.png';

function Home() {
  return (
    <div className="container font-sans bg-gray-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <header className="hero pt-32 pb-20 text-center relative overflow-hidden">
        <div className="hero-content transition-all duration-300 ease-in-out max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Leverage lift-and-shift or cloud-native migrations <br className="hidden md:block" />
            with zero friction.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your cloud journey with us – zero downtime, fully automated, and built for scale.
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full text-lg transition duration-200 shadow-lg">
            Get Started
          </button>
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section id="features" className="py-20 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: 'Automated Backups',
              desc: 'Scheduled, intelligent backups that keep your data safe across regions.',
            },
            {
              title: 'Zero-Downtime Migration',
              desc: 'Migrate workloads without interruptions using our custom engine.',
            },
            {
              title: 'Custom OSS Tools',
              desc: 'Built with open-source tools for resilience and control.',
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-400">{card.title}</h3>
              <p className="text-gray-400">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lottie Animation Section */}
      <section className="py-24 px-6 text-center bg-gray-950">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Cloud-Native Infrastructure</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto items-center">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition-shadow">
            <Lottie animationData={vmAnimation} loop className="h-48 mx-auto" />
            <h3 className="mt-6 text-xl font-semibold">Virtual Machines</h3>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-green-400/30 transition-shadow">
            <Lottie animationData={containerAnimation} loop className="h-48 mx-auto" />
            <h3 className="mt-6 text-xl font-semibold">Containers</h3>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-shadow">
            <Lottie animationData={k8sAnimation} loop className="h-48 mx-auto" />
            <h3 className="mt-6 text-xl font-semibold">Kubernetes</h3>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
