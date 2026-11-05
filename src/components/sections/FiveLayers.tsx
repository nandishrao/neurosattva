import React from 'react';
import { FIVE_LAYERS } from '../../data/content';
import { motion } from 'framer-motion';
import { Cloud, Cpu, Volume2, Sun, Clock } from 'lucide-react';

export const FiveLayers: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Cloud: <Cloud className="w-5 h-5 text-[#11212D]" />,
    Cpu: <Cpu className="w-5 h-5 text-[#11212D]" />,
    Volume2: <Volume2 className="w-5 h-5 text-[#11212D]" />,
    Sun: <Sun className="w-5 h-5 text-[#11212D]" />,
    Clock: <Clock className="w-5 h-5 text-[#11212D]" />,
  };

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="eyebrow">{FIVE_LAYERS.eyebrow}</span>
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-fraunces font-normal text-[#06141B] leading-tight">
          {FIVE_LAYERS.title}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#4A5C6A]">
          {FIVE_LAYERS.subtitle}
        </p>
      </div>

      {/* 5-Card Staggered Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FIVE_LAYERS.layers.map((layer, index) => {
          const isFifth = index === 4;
          return (
            <motion.div
              key={layer.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`glass-card p-8 flex flex-col justify-between hover:border-[#11212D] ${
                isFifth ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-[#CCD0CF]/50 border border-[#9BA8AB] flex items-center justify-center shadow-sm">
                    {iconMap[layer.icon]}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#11212D] px-2.5 py-1 rounded-full bg-[#CCD0CF]/60 border border-[#9BA8AB]">
                    LAYER {layer.num}
                  </span>
                </div>
                <h3 className="font-fraunces text-xl text-[#06141B] font-normal mb-1">
                  {layer.title}
                </h3>
                <span className="text-[11.5px] font-semibold text-[#253745] uppercase tracking-wider block mb-3">
                  {layer.tag}
                </span>
                <p className="text-xs sm:text-sm text-[#4A5C6A] leading-relaxed">
                  {layer.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#CCD0CF] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#11212D]" />
                <span className="text-[11px] uppercase tracking-wider text-[#4A5C6A] font-semibold">
                  Independent Edge Service
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
