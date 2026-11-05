import React from 'react';
import {
  FOOTER_CONTENT,
  CONTACT_EMAIL,
  COMPANY_NAME,
  PARENT_COMPANY,
  INITIATIVE_NAME,
  EXECUTIVE_PHONE,
} from '../../data/content';
import { ArrowUp, Mail, Phone, Building2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#CCD0CF]/30 border-t border-[#CCD0CF] mt-24 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Ambient Indicator */}
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-[#9BA8AB] bg-[#11212D]"
        >
          <Building2
            className="w-5 h-5 text-[#CCD0CF]"
          />
        </div>

        {/* Closing Line in Fraunces */}
        <h3 className="font-fraunces text-3xl sm:text-4xl text-[#06141B] font-light tracking-tight max-w-lg mb-4">
          "{FOOTER_CONTENT.tagline}"
        </h3>

        <p className="text-xs sm:text-sm text-[#4A5C6A] max-w-xl mb-8 leading-relaxed">
          The {COMPANY_NAME} Immersive Learning Platform is a collaborative sensory delivery technology prepared by {PARENT_COMPANY} for the {INITIATIVE_NAME}.
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A5C6A] hover:text-[#06141B] transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to top</span>
          </button>

          <span className="text-[#9BA8AB]">&middot;</span>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A5C6A] hover:text-[#06141B] transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{CONTACT_EMAIL}</span>
          </a>

          <span className="text-[#9BA8AB]">&middot;</span>

          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A5C6A]">
            <Phone className="w-3.5 h-3.5" />
            <span>{EXECUTIVE_PHONE}</span>
          </span>
        </div>

        {/* Disclaimers & Corporate Credits */}
        <div className="border-t border-[#CCD0CF] pt-8 w-full max-w-3xl space-y-3 text-xs text-[#4A5C6A]/90">
          <p className="leading-relaxed">{FOOTER_CONTENT.disclaimer}</p>
          <p className="font-semibold text-[#06141B]/85 pt-1">{FOOTER_CONTENT.legal}</p>
        </div>
      </div>
    </footer>
  );
};
