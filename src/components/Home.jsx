import React from 'react';
import './Home.css';
import FormSection from './FormSection';
import illustration from '../assets/image1.png'; // Vite: use import for images

const Home = () => {
  return (
    <main className="main-container">
      <section className="left-section">
        <h1 className="main-heading">
          Partner with real estate agents in
          <br />
          your city{' '}
          <span className="highlighted-text ">
            and accelerate your <br />
            residential project sales
          </span>
        </h1>
        <p className="description ">
          A plug-and-play platform designed to help real estate developers
          discover channel partners, manage communication, track site visits,
          and automate commission calculation - all in one place
        </p>
        <img
          src={illustration}
          alt="Illustration"
          className="illustration"
        />
      </section>

      <FormSection />
    </main>
  );
};

export default Home;
