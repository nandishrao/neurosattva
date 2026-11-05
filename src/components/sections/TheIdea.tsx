import React from 'react';
import { IDEA_CONTENT } from '../../data/content';
import { motion } from 'framer-motion';
import { Check, X, ShieldAlert, Sparkles } from 'lucide-react';

export const TheIdea: React.FC = () => {
  return (
    <section id="solution" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="eyebrow">{IDEA_CONTENT.eyebrow}</span>
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-fraunces font-normal text-[#06141B] leading-tight">
          {IDEA_CONTENT.title}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#4A5C6A] leading-relaxed">
          {IDEA_CONTENT.intro}
        </p>
      </div>

      {/* Two-Column Comparison Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch"
      >
        {/* Left: Traditional LMS */}
        <div className="glass-card p-8 sm:p-10 flex flex-col justify-between border-dashed border-[#9BA8AB] bg-white/75">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-fraunces text-2xl text-[#253745]">
                {IDEA_CONTENT.traditional.heading}
              </h3>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#CCD0CF]/60 text-[#253745] border border-[#9BA8AB]">
                {IDEA_CONTENT.traditional.badge}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#4A5C6A] mb-8 leading-relaxed">
              {IDEA_CONTENT.traditional.description}
            </p>
            <ul className="space-y-4">
              {IDEA_CONTENT.traditional.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#4A5C6A]">
                  <div className="w-5 h-5 rounded-full bg-[#CCD0CF]/50 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-[#4A5C6A]" />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 pt-6 border-t border-[#CCD0CF] text-xs text-[#4A5C6A] italic flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#4A5C6A] shrink-0" />
            <span>Result: Passive screen fatigue and high cognitive friction in the classroom.</span>
          </div>
        </div>

        {/* Right: Neurosattva (Highlighted with #11212D border) */}
        <div className="glass-card p-8 sm:p-10 flex flex-col justify-between border-2 border-[#11212D] relative overflow-hidden bg-gradient-to-b from-white to-[#CCD0CF]/20 shadow-brand">
          <div className="absolute top-0 right-0 w-44 h-44 bg-[#CCD0CF]/50 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-6 relative z-10">
              <h3 className="font-fraunces text-2xl sm:text-3xl text-[#06141B] font-light">
                {IDEA_CONTENT.neurosattva.heading}
              </h3>
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#11212D] text-[#CCD0CF] border border-[#253745] flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3 h-3" />
                {IDEA_CONTENT.neurosattva.badge}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#4A5C6A] mb-8 leading-relaxed relative z-10">
              {IDEA_CONTENT.neurosattva.description}
            </p>
            <ul className="space-y-4 relative z-10">
              {IDEA_CONTENT.neurosattva.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-medium text-[#06141B]">
                  <div className="w-5 h-5 rounded-full bg-[#11212D]/10 text-[#11212D] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-[#CCD0CF] text-xs text-[#11212D] font-semibold relative z-10 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#11212D] animate-pulse" />
            <span>Result: Synchronized biological priming, improved recall, and reduced educator fatigue.</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
