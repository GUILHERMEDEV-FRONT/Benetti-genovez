import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, ArrowDown } from 'lucide-react';
import { HERO_BG_IMAGE } from '../data';

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-black">
      {/* Background with luxury parallax feel */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src={HERO_BG_IMAGE}
          alt="Benetti & Genovez Office"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-dark-base/85 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-base via-transparent to-dark-base" />
      </div>

      {/* Modern abstract subtle gold grid decorations */}
      <div className="absolute inset-0 z-0 bg-wood-pattern opacity-60 pointer-events-none" />

      {/* Decorative Gold Circles / Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-dark/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center py-20">
        {/* Subtle decorative Gold Line & Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 mb-8"
        >
          <ShieldCheck className="w-4 h-4 text-gold" />
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-gold-light font-medium">
            Advogados em Imbituba - SC
          </span>
        </motion.div>

        {/* Main Title of the Law Firm */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white mb-6 leading-tight"
        >
          Escritório de Advocacia <br className="hidden md:block"/>
           <br className="hidden md:block"/>
          em Direito Civil, Penal e Trabalhista
        </motion.h1>

        {/* Sub-headline text describing the commitment */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto text-sm md:text-base text-slate-300 leading-relaxed font-light mb-12 tracking-wide"
        >
          O <strong className="text-white font-medium">Benetti & Genovez</strong> é um escritório de advocacia estruturado que atua com total comprometimento e estratégia personalizada para oferecer soluções jurídicas seguras, céleres e eficientes para cada cliente.
        </motion.p>

        {/* Primary and secondary Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-hover hover:from-gold hover:to-gold-light text-black font-semibold uppercase tracking-wider text-xs rounded transition-all duration-300 shadow-xl shadow-gold/10 hover:shadow-gold/25 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            Fale com um Advogado
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="#servicos"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/50 text-white font-medium uppercase tracking-wider text-xs rounded transition-all duration-300 cursor-pointer"
          >
            Nossas Áreas
          </a>
        </motion.div>

        {/* Mouse Down scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ ease: 'easeInOut', duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          className="inline-flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-400">
            Descubra Mais
          </span>
          <a
            href="#servicos"
            className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:border-gold transition-colors duration-300"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>

      {/* Fine golden ambient side lines */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
    </section>
  );
}
