import React from 'react';
import { HARDWARE_CONTENT } from '../../data/content';
import { motion } from 'framer-motion';
import { Lightbulb, Cpu, Volume2, ShieldCheck, AlertCircle } from 'lucide-react';

export const Hardware: React.FC = () => {
  return (
    <section id="hardware" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="eyebrow">{HARDWARE_CONTENT.eyebrow}</span>
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-fraunces font-normal text-[#06141B] leading-tight">
          {HARDWARE_CONTENT.title}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#4A5C6A] leading-relaxed">
          {HARDWARE_CONTENT.intro}
        </p>
      </div>

      {/* 3 Tier Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {HARDWARE_CONTENT.tiers.map((tier, idx) => {
          const isPilot = idx === 0;
          return (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`glass-card p-7 sm:p-8 flex flex-col justify-between relative ${
                isPilot ? 'border-2 border-[#11212D] shadow-brand bg-white' : 'border-[#CCD0CF]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      isPilot
                        ? 'bg-[#11212D] text-[#CCD0CF] shadow-sm'
                        : 'bg-[#CCD0CF]/60 text-[#253745]'
                    }`}
                  >
                    {tier.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#4A5C6A]">PACKAGE 0{idx + 1}</span>
                </div>

                <h3 className="font-fraunces text-2xl text-[#06141B] font-light mb-1">
                  {tier.name}
                </h3>
                <p className="text-xs text-[#4A5C6A] mb-8 leading-relaxed">
                  {tier.subtitle}
                </p>

                {/* Hardware Spec Modules */}
                <div className="space-y-4">
                  {/* Lighting */}
                  <div className="p-3.5 rounded-2xl bg-[#CCD0CF]/30 border border-[#CCD0CF]">
                    <div className="flex items-center gap-2 mb-1 text-[#06141B]">
                      <Lightbulb className="w-4 h-4 text-[#11212D]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider">Lighting Infrastructure</span>
                    </div>
                    <p className="text-xs font-bold text-[#06141B] mb-0.5">{tier.lighting.device}</p>
                    <p className="text-[11.5px] text-[#4A5C6A] leading-relaxed">{tier.lighting.detail}</p>
                  </div>

                  {/* Runtime */}
                  <div className="p-3.5 rounded-2xl bg-[#CCD0CF]/30 border border-[#CCD0CF]">
                    <div className="flex items-center gap-2 mb-1 text-[#06141B]">
                      <Cpu className="w-4 h-4 text-[#11212D]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider">Classroom Edge Runtime</span>
                    </div>
                    <p className="text-xs font-bold text-[#06141B] mb-0.5">{tier.runtime.device}</p>
                    <p className="text-[11.5px] text-[#4A5C6A] leading-relaxed">{tier.runtime.detail}</p>
                  </div>

                  {/* Audio */}
                  <div className="p-3.5 rounded-2xl bg-[#CCD0CF]/30 border border-[#CCD0CF]">
                    <div className="flex items-center gap-2 mb-1 text-[#06141B]">
                      <Volume2 className="w-4 h-4 text-[#11212D]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider">Acoustic Audio System</span>
                    </div>
                    <p className="text-xs font-bold text-[#06141B] mb-0.5">{tier.audio.device}</p>
                    <p className="text-[11.5px] text-[#4A5C6A] leading-relaxed">{tier.audio.detail}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#CCD0CF] text-[11px] text-[#11212D] font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#253745]" />
                <span>Turnkey installation & SLA support included</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Honest Note Below */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10 p-5 rounded-2xl bg-white border border-[#CCD0CF] shadow-sm flex items-start gap-3.5 max-w-3xl mx-auto text-xs sm:text-[13px] text-[#4A5C6A] leading-relaxed"
      >
        <AlertCircle className="w-5 h-5 text-[#253745] shrink-0 mt-0.5" />
        <p>
          <strong className="text-[#06141B] font-semibold">Institutional Engineering Notice: </strong>
          {HARDWARE_CONTENT.honestNote}
        </p>
      </motion.div>
    </section>
  );
};
