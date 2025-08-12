import { useState } from 'react';
import './Hero.css';
import AdmissionForm from '../AdmissionForm/AdmissionForm';

function Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Boston Global School</h1>
          <p>Nurturing Minds, Building Futures</p>
          <button className="cta-button" onClick={() => setIsFormOpen(true)}>
            Apply Now
          </button>
        </div>
      </section>
      <AdmissionForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}

export default Hero;
