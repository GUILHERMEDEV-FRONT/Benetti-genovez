import { motion } from 'motion/react';
import { Award, HeartHandshake, PhoneCall, Globe } from 'lucide-react';
import { DIFFERENTIATORS } from '../data';

interface DifferentiatorsProps {
  onOpenConsultation: () => void;
}

export default function Differentiators({ onOpenConsultation }: DifferentiatorsProps) {
  const getIcon = (id: string, className: string) => {
    switch (id) {
      case 'etica':
        return <Award className={className} />;
      case 'personalizado':
        return <HeartHandshake className={className} />;
      case 'plantao':
        return <PhoneCall className={className} />;
      case 'localidade':
        return <Globe className={className} />;
      default:
        return <Award className={className} />;
    }
  };

  return (
    <section id="diferenciais" className="relative py-28 bg-[#0b0b0e] bg-wood-pattern">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-gold font-bold mb-4 block">
            DIFERENCIAIS
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
            O que diferencia nossa atuação jurídica
          </h2>
          <p className="mt-4 text-sm text-slate-400 font-light leading-relaxed">
            Priorizamos segurança acadêmica e processual aliadas à resolutividade moderna. Nossos pilares fundamentam nossa relação de total transparência com o cliente.
          </p>
        </div>

        {/* 2x2 grid elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {DIFFERENTIATORS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded bg-dark-card border border-dark-border/80 hover:border-gold/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-gold/10 border border-gold/20 rounded flex items-center justify-center text-gold mb-6">
                  {getIcon(item.id, 'w-6 h-6')}
                </div>
                <h3 className="text-base font-serif font-bold text-white mb-3">
                  {item.id === 'plantao' ? (
                    <span className="flex items-center gap-2">
                      {item.title}
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    </span>
                  ) : item.title}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="w-8 h-[1px] bg-gold/40 mt-8 group-hover:w-full transition-all" />
            </motion.div>
          ))}
        </div>

        {/* Underneath banner or card callout */}
        <div className="bg-gradient-to-r from-dark-card to-dark-base border border-gold/20 rounded p-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="text-left">
            <h4 className="text-base font-serif font-semibold text-white mb-1">
              Necessita de suporte profissional urgente?
            </h4>
            <p className="text-xs text-slate-400 font-light">
              Nosso plantão está ativo para atendimento emergencial em caráter penal ou cautelar.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="w-full md:w-auto px-6 py-2.5 bg-gold hover:bg-gold-hover text-black font-semibold text-xs uppercase tracking-wider rounded transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            Falar pelo WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
