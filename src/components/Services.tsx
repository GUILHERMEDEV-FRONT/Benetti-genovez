import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scale, Shield, Users, Hammer, HeartHandshake, ArrowUpRight, X, Calendar, Zap } from 'lucide-react';
import { PRACTICE_AREAS, OTHER_AREAS } from '../data';
import { PracticeArea } from '../types';

interface ServicesProps {
  onOpenConsultation: () => void;
}

export default function Services({ onOpenConsultation }: ServicesProps) {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  // Icon mapping helper based on ID
  const getIcon = (id: string, className: string) => {
    switch (id) {
      case 'ambiental':
        return <Scale className={className} />;
      case 'civil':
        return <HeartHandshake className={className} />;
      case 'penal':
        return <Hammer className={className} />;
      case 'trabalhista':
        return <Shield className={className} />;
      case 'previdenciario':
        return <Users className={className} />;
      default:
        return <Scale className={className} />;
    }
  };

  return (
    <section id="servicos" className="relative py-28 bg-dark-base bg-wood-pattern">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-dark-border/60 pb-8">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-gold font-bold mb-4 block">
              Serviços Especializados
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
              Nossas Áreas de Atuação
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded">
            <Zap className="w-4 h-4 text-gold animate-pulse" />
            <span className="text-[10px] font-mono tracking-wider text-gold-light uppercase font-medium">
              Mais de 1.000 processos conduzidos
            </span>
          </div>
        </div>

        {/* 3x2 / 3x1 Grid of Main Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {PRACTICE_AREAS.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col justify-between overflow-hidden rounded bg-dark-card border border-dark-border/80 hover:border-gold/30 transition-all duration-300 shadow-xl"
            >
              {/* Photo Area with overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/50 to-transparent" />
                
                {/* Float Icon on top left */}
                <div className="absolute top-4 left-4 p-3 rounded bg-dark-base/80 border border-gold/20 text-gold group-hover:border-gold transition-colors duration-300">
                  {getIcon(area.id, 'w-5 h-5')}
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-serif font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed mb-6 flex-grow">
                  {area.description}
                </p>

                {/* Interactive Anchor Link */}
                <button
                  onClick={() => setSelectedArea(area)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-gold hover:text-gold-light transition-colors duration-200 cursor-pointer text-left self-start"
                >
                  Veja mais detalhes
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Minor Practice Areas list */}
        <div className="bg-dark-card/50 border border-dark-border rounded p-8 md:p-10 text-center max-w-4xl mx-auto mb-16">
          <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 mb-8 font-semibold">
            Outras Áreas de Atuação Jurídica
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {OTHER_AREAS.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 border border-dark-border hover:border-gold/40 hover:bg-gold/5 bg-dark-base text-slate-300 text-xs tracking-wide rounded-full font-medium transition-all duration-300"
              >
                • {item}
              </span>
            ))}
          </div>
        </div>

        {/* Section bottom CTA */}
        <div className="text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-hover hover:from-gold hover:to-gold-light text-black font-semibold uppercase tracking-wider text-xs rounded transition-all duration-300 shadow-lg shadow-gold/5 hover:shadow-gold/20 hover:scale-[1.02]"
          >
            Fale com um Advogado
            <ArrowUpRight className="w-4 h-4 text-black" />
          </button>
        </div>
      </div>

      {/* Structured Details Modal */}
      <AnimatePresence>
        {selectedArea && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArea(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-dark-card border border-gold/30 rounded shadow-2xl overflow-hidden z-10"
            >
              {/* Header Cover */}
              <div className="relative h-48 sm:h-56">
                <img
                  src={selectedArea.image}
                  alt={selectedArea.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-black/30" />
                <button
                  onClick={() => setSelectedArea(null)}
                  className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-gold rounded text-white hover:text-black transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div className="p-2 bg-gold text-black rounded">
                    {getIcon(selectedArea.id, 'w-5 h-5')}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                    {selectedArea.title}
                  </h3>
                </div>
              </div>

              {/* Body Details */}
              <div className="p-6 sm:p-8">
                <p className="text-sm font-light text-gold mb-4 uppercase tracking-wider font-mono">
                  Escritório Benetti & Genovez
                </p>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light mb-8">
                  {selectedArea.detailedDescription}
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-6 border-t border-dark-border/60">
                  <button
                    onClick={() => setSelectedArea(null)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-transparent hover:bg-white/5 border border-dark-border text-slate-300 text-xs font-semibold uppercase tracking-wider rounded transition-colors"
                  >
                    Fechar Janela
                  </button>
                  <button
                    onClick={() => {
                      setSelectedArea(null);
                      onOpenConsultation();
                    }}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-gold-dark to-gold text-black text-xs font-bold uppercase tracking-wider rounded hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    Agendar para este setor
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
