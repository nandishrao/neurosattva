import React from 'react';
import { SECURITY_CONTENT } from '../../data/content';
import { KeyRound, Lock, WifiOff, Activity, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Security: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    KeyRound: <KeyRound className="w-5 h-5 text-[#11212D]" />,
    Lock: <Lock className="w-5 h-5 text-[#11212D]" />,
    WifiOff: <WifiOff className="w-5 h-5 text-[#11212D]" />,
    Activity: <Activity className="w-5 h-5 text-[#11212D]" />,
  };

  return (
    <section id="security" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="eyebrow">{SECURITY_CONTENT.eyebrow}</span>
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-fraunces font-normal text-[#06141B] leading-tight">
          {SECURITY_CONTENT.title}
        </h2>
      </div>

      {/* 4 Glass Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {SECURITY_CONTENT.cards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.7,
              delay: idx * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="glass-card p-7 sm:p-8 flex flex-col justify-between border-[#CCD0CF] bg-white shadow-card"
          >
            {/* this is a full on ai slop  */}
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#CCD0CF]/50 border border-[#9BA8AB] flex items-center justify-center mb-5 shadow-sm">
                {iconMap[card.icon]}
              </div>
              <h3 className="font-fraunces text-xl text-[#06141B] font-normal mb-2">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5C6A] leading-relaxed">
                {card.desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#CCD0CF] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#11212D]" />
              <span className="text-xs text-[#4A5C6A] font-semibold">Institutional Grade SLA Compliance</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Licensing Model Box Below */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-12 glass-card p-8 border-[#CCD0CF] text-center max-w-4xl mx-auto bg-gradient-to-b from-white to-[#CCD0CF]/20 shadow-card"
      >
        <span className="text-xs uppercase tracking-wider font-bold text-[#11212D] block mb-2">
          {SECURITY_CONTENT.licensingHeading}
        </span>
        <div className="flex flex-wrap justify-center items-center gap-3 my-4">
          {SECURITY_CONTENT.licensingPills.map((pill, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-full bg-white border border-[#CCD0CF] text-xs sm:text-sm font-semibold text-[#06141B] shadow-sm"
            >
              {pill}
            </span>
          ))}
        </div>
        <p className="text-xs text-[#4A5C6A] mt-3 italic">
          {SECURITY_CONTENT.licensingCaption}
        </p>
      </motion.div>
    </section>
  );
};
