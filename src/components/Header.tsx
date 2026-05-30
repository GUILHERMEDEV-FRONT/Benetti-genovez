import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Landmark, Gavel, Calendar } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Quem Somos', href: '#quem-somos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Advogados', href: '#advogados' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-base/90 backdrop-blur-md border-b border-dark-border py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo block */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center border border-gold/40 rounded bg-dark-card overflow-hidden group-hover:border-gold transition-colors duration-300">
            <Landmark className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-transparent pointer-events-none" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-[0.2em] text-white group-hover:text-gold transition-colors duration-300 leading-none">
              BENETTI & GENOVEZ
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold/80 font-medium">
              Advogados Associados
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 hover:text-gold tracking-wide transition-colors duration-300 uppercase font-medium text-xs relative py-2 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Button Header */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={onOpenConsultation}
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold-dark via-gold to-gold-hover border border-gold/40 text-black font-semibold text-xs uppercase tracking-wider rounded h-full cursor-pointer hover:shadow-lg hover:shadow-gold/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <Calendar className="w-4 h-4" />
            Agendar Consulta
          </button>
        </div>

        {/* Mobile menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center p-2 text-slate-300 hover:text-gold transition-colors duration-300 cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-card border-b border-dark-border absolute top-full left-0 right-0 overflow-hidden shadow-2xl px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm text-slate-300 hover:text-gold tracking-wider transition-colors duration-300 uppercase font-medium py-2 border-b border-dark-border/50 block"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-dark to-gold text-black font-bold text-xs uppercase tracking-wider rounded shadow-md hover:shadow-gold/30 transition-all duration-300 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Agendar Consulta
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
