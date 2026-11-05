import React from 'react';
import { ARCHITECTURE_CONTENT } from '../../data/content';
import { motion } from 'framer-motion';
import { Speaker, Sun, Monitor, CheckCircle2 } from 'lucide-react';

export const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="eyebrow">{ARCHITECTURE_CONTENT.eyebrow}</span>
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-fraunces font-normal text-[#06141B] leading-tight">
          {ARCHITECTURE_CONTENT.title}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#4A5C6A] leading-relaxed">
          {ARCHITECTURE_CONTENT.intro}
        </p>
      </div>

      {/* Responsive Inline SVG Architecture Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card p-6 sm:p-10 border-[#CCD0CF] shadow-brand overflow-hidden bg-white/95"
      >
        <div className="w-full overflow-x-auto">
          <div className="min-w-[720px] max-w-[900px] mx-auto py-4">
            <svg
              viewBox="0 0 880 440"
              className="w-full h-auto select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="cloudBg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#F4F6F6" stopOpacity="0.95" />
                </linearGradient>

                <linearGradient id="runtimeBg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#CCD0CF" stopOpacity="0.5" />
                </linearGradient>

                <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#06141B" floodOpacity="0.06" />
                </filter>

                <style>
                  {`
                    @keyframes dashFlow {
                      from { stroke-dashoffset: 40; }
                      to { stroke-dashoffset: 0; }
                    }
                    @keyframes dashBack {
                      from { stroke-dashoffset: 0; }
                      to { stroke-dashoffset: 40; }
                    }
                    .flow-forward {
                      stroke-dasharray: 6, 6;
                      animation: dashFlow 4s linear infinite;
                    }
                    .flow-reverse {
                      stroke-dasharray: 6, 6;
                      animation: dashBack 4s linear infinite;
                    }
                  `}
                </style>
              </defs>

              {/* LEFT BLOCK: Cloud Platform */}
              <g transform="translate(40, 30)">
                <rect
                  x="0"
                  y="0"
                  width="280"
                  height="360"
                  rx="20"
                  fill="url(#cloudBg)"
                  stroke="#CCD0CF"
                  strokeWidth="1.5"
                  filter="url(#softShadow)"
                />
                <rect x="0" y="0" width="280" height="60" rx="20" fill="#E6EBEC" />
                <rect x="0" y="40" width="280" height="20" fill="#E6EBEC" />
                <circle cx="26" cy="30" r="10" fill="#11212D" fillOpacity="0.2" />
                <text x="44" y="26" fill="#06141B" fontSize="14" fontWeight="600" fontFamily="Fraunces, serif">
                  Enterprise Cloud LMS
                </text>
                <text x="44" y="44" fill="#4A5C6A" fontSize="10.5" fontFamily="Manrope, sans-serif">
                  Google Cloud Platform (GCP)
                </text>

                {ARCHITECTURE_CONTENT.cloudServices.map((svc, idx) => (
                  <g key={svc} transform={`translate(16, ${75 + idx * 38})`}>
                    <rect x="0" y="0" width="248" height="30" rx="8" fill="#FFFFFF" stroke="#CCD0CF" strokeWidth="1" />
                    <circle cx="14" cy="15" r="3" fill="#11212D" />
                    <text x="26" y="19" fill="#06141B" fontSize="11" fontFamily="Manrope, sans-serif" fontWeight="500">
                      {svc}
                    </text>
                  </g>
                ))}
              </g>

              {/* CENTER DATA FLOW PIPES */}
              <g transform="translate(320, 140)">
                <path
                  d="M0,0 L200,0"
                  fill="none"
                  stroke="#11212D"
                  strokeWidth="2.5"
                  className="flow-forward"
                />
                <polygon points="204,0 196,-4 196,4" fill="#11212D" />
                <rect x="25" y="-22" width="150" height="20" rx="10" fill="#FFFFFF" stroke="#CCD0CF" />
                <text x="100" y="-8" textAnchor="middle" fill="#11212D" fontSize="9.5" fontWeight="700" fontFamily="Manrope, sans-serif">
                  Encrypted package (.nsx)
                </text>
              </g>

              <g transform="translate(320, 260)">
                <path
                  d="M200,0 L0,0"
                  fill="none"
                  stroke="#4A5C6A"
                  strokeWidth="2.5"
                  className="flow-reverse"
                />
                <polygon points="-4,0 4,-4 4,4" fill="#4A5C6A" />
                <rect x="25" y="6" width="150" height="20" rx="10" fill="#FFFFFF" stroke="#CCD0CF" />
                <text x="100" y="20" textAnchor="middle" fill="#4A5C6A" fontSize="9.5" fontWeight="700" fontFamily="Manrope, sans-serif">
                  Batch telemetry & health
                </text>
              </g>

              {/* RIGHT BLOCK: Classroom Edge Runtime */}
              <g transform="translate(520, 30)">
                <rect
                  x="0"
                  y="0"
                  width="280"
                  height="360"
                  rx="20"
                  fill="url(#runtimeBg)"
                  stroke="#9BA8AB"
                  strokeWidth="1.5"
                  filter="url(#softShadow)"
                />
                <rect x="0" y="0" width="280" height="60" rx="20" fill="#CCD0CF" />
                <rect x="0" y="40" width="280" height="20" fill="#CCD0CF" />
                <circle cx="26" cy="30" r="10" fill="#253745" fillOpacity="0.2" />
                <text x="44" y="26" fill="#06141B" fontSize="14" fontWeight="600" fontFamily="Fraunces, serif">
                  Classroom Edge Runtime
                </text>
                <text x="44" y="44" fill="#4A5C6A" fontSize="10.5" fontFamily="Manrope, sans-serif">
                  Raspberry Pi 5 / Mini PC (Edge Enclave)
                </text>

                {ARCHITECTURE_CONTENT.runtimeServices.map((svc, idx) => (
                  <g key={svc} transform={`translate(16, ${75 + idx * 42})`}>
                    <rect x="0" y="0" width="248" height="32" rx="8" fill="#FFFFFF" stroke="#CCD0CF" strokeWidth="1" />
                    <circle cx="14" cy="16" r="3" fill="#253745" />
                    <text x="26" y="20" fill="#06141B" fontSize="11" fontFamily="Manrope, sans-serif" fontWeight="500">
                      {svc}
                    </text>
                  </g>
                ))}
              </g>
            </svg>
          </div>
        </div>

        {/* Runtime Peripherals Output Row */}
        <div className="mt-6 pt-6 border-t border-[#CCD0CF] flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-[#06141B]">
          <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white border border-[#CCD0CF] shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-[#CCD0CF]/50 flex items-center justify-center text-[#11212D]">
              <Speaker className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="text-[10.5px] uppercase font-bold text-[#4A5C6A] block">Acoustic Out</span>
              <span className="text-xs font-semibold text-[#06141B]">Edifier / Yamaha Studio Monitors</span>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white border border-[#CCD0CF] shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-[#CCD0CF]/50 flex items-center justify-center text-[#11212D]">
              <Sun className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="text-[10.5px] uppercase font-bold text-[#4A5C6A] block">Lighting Out</span>
              <span className="text-xs font-semibold text-[#06141B]">ESP32 / Hue CCT LED Luminaires</span>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white border border-[#CCD0CF] shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-[#CCD0CF]/50 flex items-center justify-center text-[#11212D]">
              <Monitor className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="text-[10.5px] uppercase font-bold text-[#4A5C6A] block">Display Out</span>
              <span className="text-xs font-semibold text-[#06141B]">Classroom 4K HDMI Interactive Panel</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 5 Enterprise Benefit Chips */}
      <div className="mt-10 flex flex-wrap justify-center items-center gap-3 sm:gap-4">
        {ARCHITECTURE_CONTENT.benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#CCD0CF] text-xs sm:text-sm font-semibold text-[#06141B] shadow-sm"
          >
            <CheckCircle2 className="w-4 h-4 text-[#11212D]" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
