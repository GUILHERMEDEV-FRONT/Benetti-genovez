import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Mail, ArrowUpRight, Scale } from 'lucide-react';
import { TEAM_MEMBERS, FOUNDERS } from '../data';

// Combine both founders and associates to form the complete list
const ALL_LAWYERS = [...FOUNDERS, ...TEAM_MEMBERS];

interface TeamProps {
  onOpenConsultation: () => void;
}

export default function Team({ onOpenConsultation }: TeamProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextLawyer = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ALL_LAWYERS.length);
  };

  const prevLawyer = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + ALL_LAWYERS.length) % ALL_LAWYERS.length);
  };

  const current = ALL_LAWYERS[currentIndex];

  return (
    <section id="advogados" className="relative py-28 bg-dark-base bg-wood-pattern border-t border-dark-border/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-dark-border/60">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-gold font-bold mb-4 block">
              Corpo Técnico
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
              Conheça as Nossas Mentes Jurídicas
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[10px] font-mono tracking-widest text-[#8E713A] uppercase font-bold">
            Excelência acadêmica e compromisso ético
          </p>
        </div>

        {/* Desktop Split view (Image Left, Complete Info Right) */}
        <div className="relative bg-dark-card border border-dark-border rounded-lg p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden max-w-5xl mx-auto">
          {/* Faint gold accent outline glow inside */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-[40px] pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Image Side */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[320px] aspect-square rounded overflow-hidden border border-dark-border/80 group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.id}
                    src={current.image}
                    alt={current.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                
                {/* OAB Floating Badge */}
                <div className="absolute bottom-4 left-4 bg-gold text-black font-semibold font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded shadow-lg">
                  {current.oab}
                </div>
              </div>

              {/* Index indicator */}
              <div className="flex items-center gap-2 mt-6">
                {ALL_LAWYERS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentIndex ? 'w-6 bg-gold' : 'w-1.5 bg-dark-border/80'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Information Side */}
            <div className="md:col-span-7 flex flex-col justify-between min-h-[340px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gold font-bold font-mono">
                      {current.role}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif font-extrabold text-white mt-1.5">
                      {current.name}
                    </h3>
                  </div>

                  <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed">
                    {current.bio}
                  </p>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 font-semibold">
                      Áreas Principais de Foco:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {current.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-dark-base border border-dark-border text-slate-300 px-3 py-1 rounded-full font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls Bottom */}
              <div className="flex items-center justify-between pt-8 border-t border-dark-border/60 mt-8">
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevLawyer}
                    className="p-3 rounded-full border border-dark-border text-slate-300 hover:text-gold hover:border-gold hover:bg-gold/5 transition-all duration-300 cursor-pointer"
                    aria-label="Previous lawyer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextLawyer}
                    className="p-3 rounded-full border border-dark-border text-slate-300 hover:text-gold hover:border-gold hover:bg-gold/5 transition-all duration-300 cursor-pointer"
                    aria-label="Next lawyer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold-dark via-gold to-gold-hover hover:from-gold hover:to-gold-light text-black font-semibold text-xs tracking-wider uppercase rounded transition-all shadow hover:shadow-lg hover:shadow-gold/10 hover:scale-[1.02] cursor-pointer"
                >
                  Agendar com ele(a)
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Corporate bottom notice banner */}
        <div className="mt-16 text-center text-xs text-slate-500 font-light max-w-md mx-auto">
          Todos os nossos profissionais possuem registro regularizado nos quadros da Ordem dos Advogados do Brasil perante a seccional de Santa Catarina.
        </div>

      </div>
    </section>
  );
}
