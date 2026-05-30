import { Landmark, Scale, Instagram, Twitter, Linkedin, Facebook, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] border-t border-dark-border text-slate-400 text-sm font-light">
      {/* Upper footer widget block */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Company Column left */}
        <div className="md:col-span-4 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center border border-gold/40 rounded bg-dark-card">
                <Landmark className="w-4 h-4 text-gold" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base font-bold tracking-[0.2em] text-white leading-none">
                  BENETTI & GENOVEZ
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-medium">
                  Advogados Associados
                </span>
              </div>
            </a>
            <p className="text-xs text-slate-500 font-light leading-relaxed max-w-sm">
              Escritório de advocacia com sólida infraestrutura em Imbituba - SC especializado em Direito de Família, Criminal, Imobiliário, Civil e Previdenciário.
            </p>
          </div>
          
          {/* Social Icons row */}
          <div className="flex items-center gap-3">
            {[
              { icon: <Instagram className="w-4 h-4" />, href: 'https://instagram.com' },
              { icon: <Twitter className="w-4 h-4" />, href: 'https://twitter.com' },
              { icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com' },
              { icon: <Facebook className="w-4 h-4" />, href: 'https://facebook.com' }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded bg-dark-card border border-dark-border hover:border-gold hover:text-gold transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Quicklinks col */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
            Institucional
          </h4>
          <ul className="space-y-2.5 text-xs">
            {[
              { label: 'Início', href: '#home' },
              { label: 'Sobre Nós', href: '#quem-somos' },
              { label: 'Corpo Técnico', href: '#advogados' },
              { label: 'Diferenciais', href: '#diferenciais' }
            ].map((item, i) => (
              <li key={i}>
                <a href={item.href} className="hover:text-gold transition-colors duration-200">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Practice Areas list col minor */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
            Áreas de Foco
          </h4>
          <ul className="space-y-2.5 text-xs">
            {[
              { label: 'Direito Ambiental', href: '#servicos' },
              { label: 'Direito Civil e Contratos', href: '#servicos' },
              { label: 'Direito Penal e Criminal', href: '#servicos' },
              { label: 'Direito Previdenciário', href: '#servicos' },
              { label: 'Direito Trabalhista', href: '#servicos' }
            ].map((item, idx) => (
              <li key={idx}>
                <a href={item.href} className="hover:text-gold transition-colors duration-200">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact/Support coordinates */}
        <div className="md:col-span-3 space-y-4 text-xs">
          <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
            Canais de Atendimento
          </h4>
          <div className="space-y-3.5">
            <div>
              <span className="text-slate-500 block">Horário de Atendimento:</span>
              <p className="text-slate-300">Segunda a Sexta — 09:00 às 18:00</p>
            </div>
            <div>
              <span className="text-slate-500 block">Consultas e WhatsApp:</span>
              <p className="text-gold font-medium">(48) 99121-7858</p>
            </div>
            <div>
              <span className="text-slate-500 block">E-mail Corporativo:</span>
              <p className="text-slate-300 hover:text-gold transition-colors">contato@benettigenovez.com.br</p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Copyright attribution */}
      <div className="border-t border-dark-border/40 bg-[#030304]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-light text-center sm:text-left">
          <div>
            <p>© {new Date().getFullYear()} Benetti & Genovez Advogados Associados. Todos os direitos reservados.</p>
            <p className="mt-1 text-[10px] text-slate-700">Imbituba-SC — OAB/SC nº 41229 / 39442. É proibida a reprodução parcial ou total.</p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-dark-card border border-dark-border hover:border-gold text-slate-500 hover:text-gold transition-all duration-300 cursor-pointer"
          >
            Voltar ao topo
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
