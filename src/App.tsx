import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Stats from './components/Stats';
import Differentiators from './components/Differentiators';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-dark-base text-slate-100 font-sans selection:bg-gold selection:text-black antialiased overflow-x-hidden">
      
      {/* Absolute top glowing header accent ambient flare */}
      <div className="absolute top-0 inset-x-0 h-[350px] bg-gradient-to-b from-gold/5 via-gold/1 to-transparent pointer-events-none z-0" />

      {/* Floating Header */}
      <Header onOpenConsultation={handleOpenModal} />

      {/* Main Container */}
      <main className="relative z-10">
        
        {/* Core Hero Banner */}
        <Hero onOpenConsultation={handleOpenModal} />

        {/* Dynamic Practice Areas Slider / Matrix */}
        <Services onOpenConsultation={handleOpenModal} />

        {/* Detailed Co-founders and firm history Bio Section */}
        <AboutUs />

        {/* Key Indicators Stats section */}
        <Stats />

        {/* Differentiation Key Pillars Bento Block */}
        <Differentiators onOpenConsultation={handleOpenModal} />

        {/* Dedicated Legal Tech Experts slideshow showcase */}
        <Team onOpenConsultation={handleOpenModal} />

        {/* Dynamic responsive FAQ accordions */}
        <FAQ />

        {/* Structured maps with online/onsite reservation panels */}
        <Contact />

      </main>

      {/* Global generic footer info */}
      <Footer />

      {/* Embedded universal floating bookings modal overlay */}
      <ConsultationModal isOpen={isModalOpen} onClose={handleCloseModal} />

    </div>
  );
}
