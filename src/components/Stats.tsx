import { motion } from 'motion/react';
import { STATS } from '../data';

export default function Stats() {
  return (
    <section className="relative py-16 bg-black border-t border-b border-dark-border/40">
      <div className="absolute inset-0 z-0 bg-wood-pattern opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative text-center p-6 border-r last:border-r-0 border-dark-border/30 max-md:border-r-0 max-md:border-b max-md:last:border-b-0 max-md:pb-8"
            >
              {/* Giant Glowing Stat number */}
              <h3 className="text-4xl md:text-5xl font-serif font-extrabold text-glow-gold bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-2">
                {stat.value}
              </h3>
              
              {/* Label */}
              <p className="text-xs uppercase tracking-wider text-slate-400 font-mono font-medium max-w-[180px] mx-auto leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
