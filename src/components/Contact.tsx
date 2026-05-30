import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Star, Landmark } from 'lucide-react';
import { OFFICES } from '../data';

export default function Contact() {
  const [activeOfficeId, setActiveOfficeId] = useState('imbituba');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    celular: '',
    area: 'civil',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedOffice = OFFICES.find(o => o.id === activeOfficeId) || OFFICES[0];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.celular) {
      alert('Por favor, preencha os campos obrigatórios (Nome, E-mail e Celular).');
      return;
    }

    setIsSubmitting(true);
    // Simulate real database or API flight
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  // Pre-configured WhatsApp redirection text
  const handleWhatsAppInstantRedirect = () => {
    const text = encodeURIComponent(
      `Olá, meu nome é ${formData.nome}. Gostaria de agendar uma consulta para a área de ${formData.area}. Mensagem: ${formData.mensagem}`
    );
    window.open(`https://wa.me/5548991217858?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="relative py-28 bg-[#09090b] bg-wood-pattern border-t border-dark-border/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title block */}
        <div className="text-center max-w-2xl mx-auto mb-20 animate-fade-in">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-gold font-bold mb-4 block">
            CONTATO & AGENDAMENTO
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Nossa Localização & Agendamento
          </h2>
          <div className="w-12 h-0.5 bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Master layout block split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel: Maps and Office Selection */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-dark-card border border-dark-border rounded-lg p-6 sm:p-8">
              <span className="text-xs font-mono uppercase tracking-wider text-gold font-bold block mb-6">
                Selecione uma de nossas Sedes:
              </span>

              {/* Selection Tabs */}
              <div className="flex gap-4 mb-6">
                {OFFICES.map(office => (
                  <button
                    key={office.id}
                    onClick={() => setActiveOfficeId(office.id)}
                    className={`flex-1 py-3 px-4 rounded font-serif font-bold text-xs sm:text-sm tracking-wide border cursor-pointer transition-all duration-300 ${
                      activeOfficeId === office.id
                        ? 'bg-gold border-gold text-black shadow-lg shadow-gold/10 scale-[1.02]'
                        : 'bg-dark-base border-dark-border text-slate-300 hover:text-white hover:border-gold/30'
                    }`}
                  >
                    {office.city}
                  </button>
                ))}
              </div>

              {/* Office Metadata list */}
              <div className="space-y-4 text-xs sm:text-sm font-light text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">Endereço:</span>
                    {selectedOffice.address}, {selectedOffice.neighborhood} - CEP {selectedOffice.postalCode}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">Telefone / WhatsApp:</span>
                    {selectedOffice.phone}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">Horário de Funcionamento:</span>
                    Segunda a Sexta — 09:00 às 18:00
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Embedded iFrame maps */}
            <div className="h-72 w-full bg-dark-card border border-dark-border rounded-lg overflow-hidden relative shadow-lg">
              <iframe
                title={`Mapa do escritório em ${selectedOffice.city}`}
                src={selectedOffice.googleMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(60%) invert(90%) contrast(100%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right panel: Scheduling/General Booking Form container */}
          <div className="lg:col-span-6">
            <div className="bg-dark-card border border-dark-border rounded-lg p-6 sm:p-8 relative overflow-hidden shadow-2xl">
              
              {/* Gold abstract top glow border */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

              <span className="text-xs font-mono uppercase tracking-[0.15em] text-slate-400 block mb-2 font-semibold">
                AGENDAMENTO INSTANTÂNEO
              </span>
              <h3 className="text-xl font-serif font-bold text-white mb-6">
                Consultoria Especializada
              </h3>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="booking-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5 text-sm"
                  >
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="nome" className="text-xs uppercase tracking-wider text-slate-400 font-mono font-medium">
                        Nome Completo <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleInputChange}
                        placeholder="Ex: Carlos Silva"
                        className="w-full bg-dark-base border border-dark-border focus:border-gold/60 rounded px-4 py-3 text-slate-200 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs uppercase tracking-wider text-slate-400 font-mono font-medium">
                          E-mail <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Ex: carlos@email.com"
                          className="w-full bg-dark-base border border-dark-border focus:border-gold/60 rounded px-4 py-3 text-slate-200 focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Cellphone/WhatsApp number */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="celular" className="text-xs uppercase tracking-wider text-slate-400 font-mono font-medium">
                          Celular / WhatsApp <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="celular"
                          name="celular"
                          required
                          value={formData.celular}
                          onChange={handleInputChange}
                          placeholder="Ex: (48) 99999-9999"
                          className="w-full bg-dark-base border border-dark-border focus:border-gold/60 rounded px-4 py-3 text-slate-200 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Area of Interest */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="area" className="text-xs uppercase tracking-wider text-slate-400 font-mono font-medium">
                        Área de Interesse Principal
                      </label>
                      <select
                        id="area"
                        name="area"
                        value={formData.area}
                        onChange={handleInputChange}
                        className="w-full bg-dark-base border border-dark-border focus:border-gold/60 rounded px-4 py-3 text-slate-200 focus:outline-none transition-colors"
                      >
                        <option value="Direito Civil">Direito Civil</option>
                        <option value="Direito Penal">Direito Penal</option>
                        <option value="Direito Trabalhista">Direito Trabalhista</option>
                        <option value="Direito Previdenciário">Direito Previdenciário</option>
                        <option value="Direito Ambiental">Direito Ambiental</option>
                        <option value="Outros Assuntos">Outras Demais Áreas</option>
                      </select>
                    </div>

                    {/* Detailed message description */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="mensagem" className="text-xs uppercase tracking-wider text-slate-400 font-mono font-medium">
                        Resumo do seu Caso / Dúvida
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        rows={4}
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        placeholder="Descreva brevemente sua situação jurídica para agilizarmos a análise preambular."
                        className="w-full bg-dark-base border border-dark-border focus:border-gold/60 rounded px-4 py-3 text-slate-200 focus:outline-none resize-none transition-colors"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-hover hover:from-gold hover:to-gold-light text-black font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md shadow-gold/5 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          Enviando Soluções...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Enviar Solicitação de Consulta
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="inline-flex items-center justify-center p-4 bg-gold/10 border border-gold/30 rounded-full text-gold mb-6 shrink-0">
                      <CheckCircle2 className="w-12 h-12 stroke-[1.5]" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-glow-gold text-white mb-3">
                      Solicitação Recebida!
                    </h4>
                    <p className="text-sm text-slate-300 font-light max-w-sm mx-auto leading-relaxed mb-8">
                      Olá <strong className="text-white font-medium">{formData.nome}</strong>. Nossos analistas jurídicos já receberam seus dados e iniciaremos a análise preambular do seu caso.
                    </p>

                    {/* Highly responsive Quick Action: WhatsApp redirect */}
                    <div className="space-y-4 max-w-sm mx-auto">
                      <button
                        onClick={handleWhatsAppInstantRedirect}
                        className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
                      >
                        <Star className="w-4 h-4 fill-current" />
                        Chamar Urgente no WhatsApp
                      </button>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ nome: '', email: '', celular: '', area: 'civil', mensagem: '' });
                        }}
                        className="text-xs text-slate-400 hover:text-gold tracking-wide underline transition-colors"
                      >
                        Enviar outro formulário
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
