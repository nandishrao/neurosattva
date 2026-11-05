import React from 'react';
import { HERO_CONTENT, THEME_PALETTE } from '../../data/content';
import { Button } from '../ui/Buttons';
import { ChevronDown, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="overview" className="relative min-h-[90vh] flex flex-col justify-between items-center pt-8 pb-14 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      {/* Top spacing & Content Container */}
      <div className="max-w-4xl mx-auto flex flex-col items-center z-10 my-auto">
        {/* Enterprise Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#11212D]" />
          <span>{HERO_CONTENT.eyebrow}</span>
        </motion.div>

        {/* H1 Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.08] font-fraunces font-normal text-[#06141B] tracking-tight max-w-3xl"
        >
          {HERO_CONTENT.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-base sm:text-lg md:text-[18px] text-[#4A5C6A] max-w-2xl leading-relaxed font-normal"
        >
          {HERO_CONTENT.subtitle}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button asLink href="#experience" variant="primary">
            {HERO_CONTENT.ctaPrimary}
          </Button>
          <Button asLink href="#engagement" variant="secondary">
            {HERO_CONTENT.ctaEnterprise}
          </Button>
          <Button asLink href="#architecture" variant="ghost">
            {HERO_CONTENT.ctaGhost}
          </Button>
        </motion.div>

        {/* Central Ambient Light Simulation Orb with Floating Modality Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-12 mb-6 w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center"
        >
          {/* Outer Breathing Ambient Halo */}
          <div
            className="absolute inset-0 rounded-full blur-[40px] opacity-75 animate-breathe-slow transition-colors duration-1000"
            style={{
              background: 'radial-gradient(circle, var(--amb-glow) 10%, rgba(155, 168, 171, 0.4) 60%, transparent 80%)',
            }}
          />

          {/* Core Orb */}
          <div
            className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-white/80 shadow-inner flex items-center justify-center transition-colors duration-1000"
            style={{
              background: 'radial-gradient(circle at 35% 35%, #FFFFFF 0%, #CCD0CF 55%, #9BA8AB 100%)',
              boxShadow: '0 20px 60px rgba(6, 20, 27, 0.12), inset 0 2px 14px rgba(255, 255, 255, 0.9)',
            }}
          >
            {/* Center Pulse Core */}
            <div
              className="w-20 h-20 rounded-full blur-[10px] opacity-65 animate-breathe-slow"
              style={{ backgroundColor: THEME_PALETTE.petrol }}
            />
          </div>

          {/* Floating chip 1: 4K Video Sync */}
          <div
            className="absolute top-2 -left-4 sm:-left-8 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#CCD0CF] shadow-card text-xs font-semibold text-[#06141B] flex items-center gap-1.5 transition-transform duration-700 hover:scale-105"
            style={{ animation: 'drift1 24s infinite ease-in-out' }}
          >
            <span className="w-2 h-2 rounded-full bg-[#11212D]" />
            {HERO_CONTENT.floatingChips[0]}
          </div>

          {/* Floating chip 2: Neuro-Acoustic Audio */}
          <div
            className="absolute top-8 -right-4 sm:-right-8 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#CCD0CF] shadow-card text-xs font-semibold text-[#06141B] flex items-center gap-1.5 transition-transform duration-700 hover:scale-105"
            style={{ animation: 'drift2 28s infinite ease-in-out' }}
          >
            <span className="w-2 h-2 rounded-full bg-[#253745]" />
            {HERO_CONTENT.floatingChips[1]}
          </div>

          {/* Floating chip 3: Adaptive Smart Light */}
          <div
            className="absolute -bottom-2 sm:-bottom-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#CCD0CF] shadow-card text-xs font-semibold text-[#06141B] flex items-center gap-1.5 transition-transform duration-700 hover:scale-105"
            style={{ animation: 'drift3 22s infinite ease-in-out' }}
          >
            <span className="w-2 h-2 rounded-full bg-[#4A5C6A]" />
            {HERO_CONTENT.floatingChips[2]}
          </div>
        </motion.div>

        {/* 4 Enterprise Stat Badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex flex-wrap justify-center items-center gap-2.5 sm:gap-3"
        >
          {HERO_CONTENT.statPills.map((stat, idx) => (
            <span
              key={idx}
              className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#CCD0CF] text-xs font-medium text-[#11212D] shadow-sm flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#253745]" />
              {stat}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#solution"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8 flex flex-col items-center gap-1 text-[#4A5C6A] hover:text-[#06141B] transition-colors cursor-pointer group"
        aria-label="Scroll to Executive Summary"
      >
        <span className="text-[11px] tracking-wider uppercase font-semibold">Explore Executive Summary</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#11212D]" />
      </motion.a>
    </section>
  );
};
