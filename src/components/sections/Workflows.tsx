import React from 'react';
import { WORKFLOWS_CONTENT } from '../../data/content';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Workflows: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="eyebrow">{WORKFLOWS_CONTENT.eyebrow}</span>
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-fraunces font-normal text-[#06141B] leading-tight">
          {WORKFLOWS_CONTENT.title}
        </h2>
      </div>

      {/* SUB-BLOCK A: The Teacher's Flow */}
      <div className="mb-20">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase tracking-wider font-bold text-[#11212D] block">
              Educator Experience
            </span>
            <h3 className="font-fraunces text-2xl text-[#06141B] font-light mt-0.5">
              {WORKFLOWS_CONTENT.teacherFlow.heading}
            </h3>
          </div>
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#11212D] text-[#CCD0CF] border border-[#253745] flex items-center gap-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#9BA8AB] animate-pulse" />
            {WORKFLOWS_CONTENT.teacherFlow.statusPill}
          </span>
        </div>

        {/* 6 Step Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 relative">
          {WORKFLOWS_CONTENT.teacherFlow.steps.map((st, idx) => (
            <motion.div
              key={st.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-card p-4 sm:p-5 flex flex-col justify-between border-[#CCD0CF] relative group bg-white shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#CCD0CF]/60 border border-[#9BA8AB] text-[#11212D] font-mono text-xs font-bold flex items-center justify-center">
                    0{st.step}
                  </span>
                  {idx < 5 && (
                    <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-[#9BA8AB] group-hover:text-[#11212D] transition-colors" />
                  )}
                </div>
                <h4 className="font-fraunces text-base text-[#06141B] font-medium mb-1">
                  {st.title}
                </h4>
                <p className="text-[11.5px] text-[#4A5C6A] leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-[#CCD0CF] text-[10px] text-[#4A5C6A] font-mono uppercase font-semibold">
                Step 0{st.step}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SUB-BLOCK B: The Content Pipeline */}
      <div>
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider font-bold text-[#11212D] block">
            Curriculum Ingestion Pipeline
          </span>
          <h3 className="font-fraunces text-2xl text-[#06141B] font-light mt-0.5">
            {WORKFLOWS_CONTENT.contentPipeline.heading}
          </h3>
          <p className="text-xs text-[#4A5C6A] mt-1">
            Automated compilation, military-grade encryption, and scheduled edge pre-caching.
          </p>
        </div>

        {/* 7-Step Vertical Alternating Timeline */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-[#CCD0CF] -translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {WORKFLOWS_CONTENT.contentPipeline.steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative flex items-center ${
                    isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  } flex-row pl-10 sm:pl-0`}
                >
                  {/* Step Card */}
                  <div className="w-full sm:w-[45%]">
                    <div className="glass-card p-5 sm:p-6 border-[#CCD0CF] hover:border-[#11212D] transition-all bg-white shadow-card">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs font-bold text-[#11212D] bg-[#CCD0CF]/60 px-2 py-0.5 rounded-full border border-[#9BA8AB]">
                          STAGE 0{step.step}
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-[#11212D]" />
                      </div>
                      <h4 className="font-fraunces text-base sm:text-lg text-[#06141B] font-medium mb-1">
                        {step.title}
                      </h4>
                      <p className="text-xs text-[#4A5C6A] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Node Circle on the Central Timeline */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-[#11212D] shadow-sm flex items-center justify-center z-10">
                    <span className="w-2 h-2 rounded-full bg-[#11212D]" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden sm:block sm:w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
