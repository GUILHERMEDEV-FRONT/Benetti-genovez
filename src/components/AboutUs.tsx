import { motion } from 'motion/react';
import { Mail, Linkedin, FileText, Landmark } from 'lucide-react';
import { FOUNDERS } from '../data';

export default function AboutUs() {
  return (
    <section id="quem-somos" className="relative py-28 bg-[#0a0a0d] border-t border-b border-dark-border/40">
      <div className="absolute inset-0 z-0 bg-wood-pattern opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-gold font-bold mb-4 block">
              Quem Somos
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Excelência, Ética <br /> e Defesa do Cliente
            </h2>
            <div className="w-16 h-1 bg-gold mt-6" />
          </div>
          
          <div className="lg:col-span-7 flex flex-col gap-6 text-sm md:text-base text-slate-400 font-light leading-relaxed">
            <p>
              O escritório <strong className="text-white font-medium">Benetti & Genovez Advogados</strong> nasceu da convicção inabalável de que a advocacia deve ser exercida com rigor técnico, honestidade absoluta e agilidade estratégica. Sediados em Imbituba - SC, oferecemos suporte a pessoas e empreendimentos com atuação direta em toda a região e canais totalmente modernos de serviços digitais.
            </p>
            <p>
              Nossa missão transcende a mera propositura de ações judiciais. Trabalhamos lado a lado com nossos clientes de forma estratégica, desenvolvendo arranjos contratuais seguros e planos preventivos robustos para blindar passivos fiscais, trabalhistas e societários.
            </p>
          </div>
        </div>

        {/* Founders Cards Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {FOUNDERS.map((founder, index) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-dark-card border border-dark-border rounded p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-start hover:border-gold/30 transition-all duration-300"
            >
              {/* Profile Headshot Image container */}
              <div className="relative w-full md:w-48 h-56 shrink-0 rounded overflow-hidden border border-dark-border shadow-md">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 bg-gold/90 text-black font-semibold font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded shadow">
                  {founder.oab}
                </span>
              </div>

              {/* Founder Information Details */}
              <div className="flex flex-col flex-grow h-full justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-1.5 hover:text-gold transition-colors">
                    {founder.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-gold font-semibold font-mono mb-4">
                    {founder.role}
                  </p>
                  <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                    {founder.bio}
                  </p>
                </div>

                {/* Specialties & social buttons */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {founder.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-dark-base text-slate-300 px-2 py-1 rounded font-medium border border-dark-border/40"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-dark-border/60">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 p-2 rounded bg-dark-base hover:bg-gold text-slate-400 hover:text-black hover:border-gold transition-all duration-300 text-xs font-mono"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${founder.email}`}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded bg-dark-base border border-dark-border hover:border-gold text-slate-300 hover:text-gold transition-all duration-300 text-xs font-mono"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      {founder.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
