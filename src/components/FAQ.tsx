import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-28 bg-[#0a0a0c] bg-wood-pattern">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header section */}
        <div className="text-center mb-20">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-gold font-bold mb-4 block">
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <div className="w-12 h-0.5 bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Accordions List container */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`border rounded overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'bg-dark-card border-gold/40 shadow-lg shadow-gold/5'
                    : 'bg-dark-card/40 border-dark-border hover:border-dark-border*1.5 hover:bg-dark-card/60'
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${isOpen ? 'text-gold' : 'text-slate-500'}`} />
                    <span className="font-serif font-semibold text-white tracking-wide text-sm md:text-base pr-8">
                      {item.question}
                    </span>
                  </div>
                  <div className="shrink-0 p-1.5 rounded-full border border-dark-border text-slate-400 group-hover:text-gold">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-gold" />
                    ) : (
                      <Plus className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </button>

                {/* Animated content box */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-dark-border/40 text-slate-400 font-light text-sm leading-relaxed max-w-3xl pl-14">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
