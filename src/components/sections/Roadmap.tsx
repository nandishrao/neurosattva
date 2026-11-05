import React from 'react';
import { ROADMAP_CONTENT } from '../../data/content';
import { motion } from 'framer-motion';
import { CheckCircle2, Milestone } from 'lucide-react';

export const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="eyebrow">{ROADMAP_CONTENT.eyebrow}</span>
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-fraunces font-normal text-[#06141B] leading-tight">
          {ROADMAP_CONTENT.title}
        </h2>
      </div>

      {/* 3 Flowing Phases */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-20">
        {ROADMAP_CONTENT.phases.map((phase, idx) => (
          <motion.div
            key={phase.phase}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.7,
              delay: idx * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="glass-card p-7 sm:p-8 flex flex-col justify-between border border-[#CCD0CF] relative shadow-card bg-white"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4A5C6A]">
                  {phase.phase}
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold bg-[#CCD0CF]/60 border border-[#9BA8AB] text-[#11212D] shadow-sm"
                >
                  {phase.badge}
                </span>
              </div>

              <h3 className="font-fraunces text-2xl text-[#06141B] font-light mb-4">
                {phase.title}
              </h3>

              <div className="p-3.5 rounded-2xl bg-[#CCD0CF]/30 border border-[#CCD0CF] mb-5">
                <span className="text-[11px] font-bold uppercase text-[#4A5C6A] block mb-1">
                  Architecture & Hardware Staging
                </span>
                <p className="text-xs text-[#06141B] font-semibold leading-relaxed">
                  {phase.specs}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase text-[#4A5C6A] block mb-1">
                  Institutional Objective
                </span>
                <p className="text-xs text-[#4A5C6A] leading-relaxed">
                  {phase.purpose}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#CCD0CF] flex items-center gap-2">
              <Milestone className="w-3.5 h-3.5 text-[#11212D]" />
              <span className="text-[11px] text-[#4A5C6A] uppercase tracking-wider font-semibold">
                Strategic Milestone
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Next Steps Checklist Box */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card p-8 sm:p-10 border-[#CCD0CF] max-w-4xl mx-auto bg-white shadow-card"
      >
        <div className="flex items-center gap-2.5 mb-6">
          <CheckCircle2 className="w-5 h-5 text-[#11212D]" />
          <h3 className="font-fraunces text-2xl text-[#06141B] font-light">
            {ROADMAP_CONTENT.checklistTitle}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {ROADMAP_CONTENT.checklist.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="flex items-center gap-3 p-3 rounded-2xl bg-[#CCD0CF]/30 border border-[#CCD0CF] text-xs sm:text-sm font-semibold text-[#06141B]"
            >
              <div className="w-5 h-5 rounded-full bg-[#11212D]/10 text-[#11212D] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
