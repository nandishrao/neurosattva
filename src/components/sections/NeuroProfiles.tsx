import React from 'react';
import { useAmbience } from '../../context/AmbienceContext';
import { NEURO_PROFILES, PROFILES_HEADER, NeuroStateKey, THEME_PALETTE } from '../../data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { SunMedium, Volume2, Activity, Lightbulb, Brain } from 'lucide-react';

export const NeuroProfiles: React.FC = () => {
  const { active, selectManualAmbience } = useAmbience();
  const current = NEURO_PROFILES[active] || NEURO_PROFILES.focus;

  const markerPositions: Record<NeuroStateKey, string> = {
    focus: '10%',
    creative: '50%',
    calm: '90%',
  };

  return (
    <section id="profiles" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="eyebrow">{PROFILES_HEADER.eyebrow}</span>
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-fraunces font-normal text-[#06141B] leading-tight">
          {PROFILES_HEADER.title}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#4A5C6A] leading-relaxed">
          {PROFILES_HEADER.intro}
        </p>
      </div>

      {/* 3 Selectable Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
        {(['focus', 'creative', 'calm'] as NeuroStateKey[]).map((key) => {
          const profile = NEURO_PROFILES[key];
          const isSelected = active === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => selectManualAmbience(key)}
              className={`p-6 rounded-3xl text-left transition-all duration-400 border cursor-pointer relative overflow-hidden ${
                isSelected
                  ? 'bg-white shadow-brand border-2 border-[#11212D] scale-[1.02]'
                  : 'bg-white/70 border-[#CCD0CF] hover:bg-white hover:border-[#4A5C6A]'
              }`}
              aria-pressed={isSelected}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className="w-3.5 h-3.5 rounded-full transition-transform duration-300"
                  style={{
                    backgroundColor: profile.accent,
                    boxShadow: isSelected ? `0 0 10px ${profile.accent}` : 'none',
                    transform: isSelected ? 'scale(1.25)' : 'scale(1)',
                  }}
                />
                <span className="text-xs font-mono font-bold text-[#4A5C6A]">
                  {profile.tempK}K
                </span>
              </div>
              <h3 className="font-fraunces text-lg text-[#06141B] font-normal mb-1">
                {profile.label}
              </h3>
              <p className="text-xs text-[#4A5C6A]">
                {profile.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Detail Showcase Panel */}
      <motion.div
        layout
        className="glass-card p-8 sm:p-12 border-[#CCD0CF] relative overflow-hidden shadow-card"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left: Light Orb Simulation Preview */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
              <div className="relative w-56 h-56 flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full blur-[36px] opacity-80 transition-colors duration-1000"
                  style={{
                    backgroundColor: current.glow,
                  }}
                />
                <div
                  className={`relative w-40 h-40 rounded-full border border-white/90 shadow-inner flex flex-col items-center justify-center text-center p-4 transition-colors duration-1000 ${current.pulseSpeedClass}`}
                  style={{
                    backgroundColor: current.kelvinColor,
                    boxShadow: `0 12px 36px ${current.glow}, inset 0 2px 12px rgba(255,255,255,0.9)`,
                  }}
                >
                  <SunMedium className="w-6 h-6 mb-1 text-[#11212D]" />
                  <span className="font-fraunces text-xl font-normal text-[#06141B]">
                    {current.tempK}K
                  </span>
                  <span className="text-[11px] text-[#4A5C6A] font-mono font-bold">
                    {current.lux} LUX
                  </span>
                </div>
              </div>

              {/* Tagline */}
              <p className="mt-4 font-fraunces text-base sm:text-lg text-[#06141B] font-light italic">
                "{current.tagline}"
              </p>
            </div>

            {/* Right: Technical Parameters */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
              <div className="border-b border-[#CCD0CF] pb-3 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#11212D] font-bold">
                    Classroom Biological Calibration
                  </span>
                  <h4 className="font-fraunces text-2xl text-[#06141B] font-light mt-0.5">
                    {current.label}
                  </h4>
                </div>
                <span
                  className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#11212D] text-[#CCD0CF] border border-[#253745]"
                >
                  Active Environment
                </span>
              </div>

              <div className="space-y-3.5">
                {/* Lighting */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white border border-[#CCD0CF] shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#CCD0CF]/50 flex items-center justify-center shrink-0 mt-0.5">
                    <Lightbulb className="w-4 h-4 text-[#11212D]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold text-[#4A5C6A] tracking-wider">
                      Circadian Lighting Profile
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-[#06141B]">
                      {current.tempLabel} &middot; {current.lux} lux desk-level illuminance
                    </p>
                  </div>
                </div>

                {/* Audio */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white border border-[#CCD0CF] shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#CCD0CF]/50 flex items-center justify-center shrink-0 mt-0.5">
                    <Volume2 className="w-4 h-4 text-[#11212D]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold text-[#4A5C6A] tracking-wider">
                      Neuro-Acoustic Rhythm
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-[#06141B]">
                      {current.audio}
                    </p>
                  </div>
                </div>

                {/* Pulse Modulation */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white border border-[#CCD0CF] shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#CCD0CF]/50 flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-4 h-4 text-[#11212D]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold text-[#4A5C6A] tracking-wider">
                      Neural Entrainment Pulse
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-[#06141B] flex items-center gap-2">
                      <span>{current.pulseHz}</span>
                      <span className="text-xs text-[#4A5C6A] font-normal">(biological rhythm pacing)</span>
                    </p>
                  </div>
                </div>

                {/* Cognitive Target */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#CCD0CF]/30 border border-[#9BA8AB]">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Brain className="w-4 h-4 text-[#253745]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold text-[#4A5C6A] tracking-wider">
                      Cognitive & Pedagogical Target
                    </span>
                    <p className="text-xs text-[#253745] leading-relaxed font-medium">
                      {current.cognitiveTarget}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Colour-temperature bar with sliding indicator */}
      <div className="mt-8 px-4 sm:px-8">
        <div className="flex justify-between text-xs font-mono font-semibold text-[#4A5C6A] mb-2">
          <span>6500K (Cool Daylight)</span>
          <span>4000K (Neutral White)</span>
          <span>2700K (Warm Restorative)</span>
        </div>
        <div className="relative h-3 w-full rounded-full bg-gradient-to-r from-[#D8DEE0] via-[#CCD0CF] to-[#9BA8AB] border border-[#CCD0CF] shadow-inner">
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-[#11212D] shadow-md transition-all duration-700 ease-out flex items-center justify-center"
            style={{ left: markerPositions[active] }}
          >
            <div className="w-2 h-2 rounded-full bg-[#11212D]" />
          </div>
        </div>
      </div>

      {/* Footnote */}
      <p className="mt-6 text-center text-xs text-[#4A5C6A] italic">
        {PROFILES_HEADER.footnote}
      </p>
    </section>
  );
};
