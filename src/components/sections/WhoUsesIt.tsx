import React, { useState } from 'react';
import { USER_ROLES } from '../../data/content';
import { ShieldCheck, Sparkles, GraduationCap, Users, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhoUsesIt: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#11212D]" />,
    Sparkles: <Sparkles className="w-5 h-5 text-[#11212D]" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-[#11212D]" />,
    Users: <Users className="w-5 h-5 text-[#11212D]" />,
  };

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="eyebrow">{USER_ROLES.eyebrow}</span>
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-fraunces font-normal text-[#06141B] leading-tight">
          {USER_ROLES.title}
        </h2>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {USER_ROLES.roles.map((role, idx) => {
          const isSelected = activeTab === idx;
          return (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setActiveTab(idx)}
              className={`glass-card p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                isSelected ? 'border-2 border-[#11212D] shadow-brand scale-[1.01] bg-white' : 'border-[#CCD0CF]'
              }`}
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#CCD0CF]/50 border border-[#9BA8AB] flex items-center justify-center mb-4 shadow-sm">
                  {iconMap[role.icon]}
                </div>
                <h3 className="font-fraunces text-xl text-[#06141B] font-normal mb-0.5">
                  {role.title}
                </h3>
                <span className="text-[11px] font-bold text-[#253745] uppercase tracking-wider block mb-2">
                  {role.roleType}
                </span>
                <p className="text-xs text-[#4A5C6A] mb-6 leading-relaxed">
                  {role.description}
                </p>

                <ul className="space-y-3">
                  {role.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs text-[#06141B]">
                      <Check className="w-3.5 h-3.5 text-[#11212D] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#CCD0CF] text-[11px] uppercase tracking-wider text-[#11212D] font-bold">
                Enterprise Persona
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
