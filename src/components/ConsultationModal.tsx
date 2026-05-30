import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Phone, Mail, Landmark, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    mensagem: '',
    area: 'civil'
  });
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.whatsapp) {
      alert('Nome e WhatsApp são obrigatórios.');
      return;
    }

    // Process message details
    setIsSent(true);
    // Redirect short brief
    setTimeout(() => {
      const text = encodeURIComponent(
        `Olá! Gostaria de agendar uma consulta sobre ${formData.area}. Nome: ${formData.nome}. Mensagem: ${formData.mensagem}`
      );
      window.open(`https://wa.me/5548991217858?text=${text}`, '_blank');
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          
          {/* Backdrop Blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Dialog Card Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            className="relative w-full max-w-lg bg-dark-card border border-gold/30 rounded-lg shadow-2xl overflow-hidden z-10"
          >
            {/* Header border glow */}
            <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-gold-dark via-gold to-gold-hover" />

            {/* Title / Close info */}
            <div className="p-6 sm:p-8 flex items-center justify-between border-b border-dark-border/60">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-gold/10 border border-gold/30 rounded">
                  <Calendar className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-white tracking-wide">
                    Agendar Consultoria
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">
                    Retorno em menos de 1 hora
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full border border-dark-border text-slate-400 hover:text-gold hover:border-gold transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Dialogue Body content list */}
            <div className="p-6 sm:p-8">
              {!isSent ? (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="modal-nome" className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                      Qual é o seu nome completo?
                    </label>
                    <input
                      type="text"
                      id="modal-nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Ex: Alexandre de Souza"
                      className="w-full bg-dark-base border border-dark-border focus:border-gold/60 rounded px-4 py-3 font-sans text-slate-200 text-sm focus:outline-none"
                    />
                  </div>

                  {/* Cellular / WhatsApp */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="modal-whatsapp" className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                      WhatsApp para contato?
                    </label>
                    <input
                      type="tel"
                      id="modal-whatsapp"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="Ex: (48) 99121-7858"
                      className="w-full bg-dark-base border border-dark-border focus:border-gold/60 rounded px-4 py-3 font-sans text-slate-200 text-sm focus:outline-none"
                    />
                  </div>

                  {/* Specialty Choose */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="modal-area" className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                      Área de interesse:
                    </label>
                    <select
                      id="modal-area"
                      name="area"
                      value={formData.area}
                      onChange={handleInputChange}
                      className="w-full bg-dark-base border border-dark-border focus:border-gold/60 rounded px-4 py-3 font-sans text-slate-200 text-sm focus:outline-none"
                    >
                      <option value="Direito Civil">Direito Civil</option>
                      <option value="Direito Penal">Direito Penal</option>
                      <option value="Direito Trabalhista">Direito Trabalhista</option>
                      <option value="Direito Previdenciário">Direito Previdenciário</option>
                      <option value="Direito Ambiental">Direito Ambiental</option>
                      <option value="Outras Áreas">Outras Demais Áreas</option>
                    </select>
                  </div>

                  {/* Description Box */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="modal-mensagem" className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                      Breve descrição da sua situação:
                    </label>
                    <textarea
                      id="modal-mensagem"
                      name="mensagem"
                      rows={3}
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      placeholder="Descreva em poucas palavras para direcionarmos ao profissional adequado."
                      className="w-full bg-dark-base border border-dark-border focus:border-gold/60 rounded px-4 py-3 font-sans text-slate-200 text-sm focus:outline-none resize-none"
                    />
                  </div>

                  {/* Safety compliance notice */}
                  <div className="flex items-center gap-2 p-3 bg-dark-base/80 border border-dark-border rounded text-slate-500 font-sans text-[10px] leading-relaxed">
                    <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
                    Seus dados estão protegidos em conformidade com as diretrizes da LGPD vigentes.
                  </div>

                  {/* Trigger Action */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-hover hover:from-gold hover:to-gold-light text-black font-bold uppercase tracking-wider text-xs rounded transition-all shadow-lg shadow-gold/10"
                  >
                    Iniciar Atendimento via WhatsApp
                  </button>

                </form>
              ) : (
                <div className="text-center py-6 font-sans">
                  <div className="inline-flex items-center justify-center p-3 bg-gold/15 border border-gold/40 text-gold rounded-full mb-4 animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-glow-gold text-white mb-2">
                    Redirecionando...
                  </h4>
                  <p className="text-xs text-slate-400 font-light max-w-xs mx-auto leading-relaxed mb-6">
                    Por favor, permita o redirecionamento. Estamos abrindo seu canal direto de conversa para fechar sua data de agendamento!
                  </p>
                  <div className="flex items-center justify-center gap-2 text-xs font-mono text-gold-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
                    Conectando com a assessoria...
                  </div>
                </div>
              )}
            </div>

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
