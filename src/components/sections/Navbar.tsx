import React, { useState } from 'react';
import { useAmbience } from '../../context/AmbienceContext';
import { NAV_LINKS, NeuroStateKey, COMPANY_NAME, THEME_PALETTE } from '../../data/content';
import { Menu, X, Sparkles, Building2 } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { mode, active, selectManualAmbience, resetToAuto } = useAmbience();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const ambienceModes: { key: NeuroStateKey; label: string; color: string; temp: string }[] = [
    { key: 'focus', label: 'Focus', color: THEME_PALETTE.dark, temp: '6500K' },
    { key: 'creative', label: 'Creative', color: THEME_PALETTE.petrol, temp: '4000K' },
    { key: 'calm', label: 'Calm', color: THEME_PALETTE.steel, temp: '2700K' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-3 pb-2">
        <nav
          className="relative flex items-center justify-between px-5 py-3 rounded-full bg-white/85 backdrop-blur-2xl border border-[#CCD0CF] shadow-card"
          aria-label="Enterprise Navigation"
        >
          {/* Left: Brand Identity */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label={`${COMPANY_NAME} Enterprise Platform`}
          >
            <div
              className="relative w-6 h-6 rounded-lg flex items-center justify-center transition-colors duration-700 shadow-sm bg-[#11212D]"
            >
              <div
                className="absolute inset-0 rounded-lg blur-[6px] opacity-70 group-hover:opacity-100 transition-opacity bg-[#253745]"
              />
              <Building2 className="w-3.5 h-3.5 text-[#CCD0CF] relative z-10" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-xl sm:text-2xl text-[#06141B] font-light tracking-tight leading-none">
                {COMPANY_NAME}
              </span>
              <span className="text-[9.5px] uppercase tracking-[0.18em] font-semibold text-[#4A5C6A]">
                Enterprise Platform
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-5">
            {NAV_LINKS.slice(0, 7).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-[#4A5C6A] hover:text-[#06141B] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1.5px] after:bg-[#11212D] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Controls: Ambience Switcher & Pilot CTA */}
          <div className="flex items-center gap-3">
            {/* Ambience Pill */}
            <div
              className="flex items-center gap-1 p-1 bg-[#E6EBEC] rounded-full border border-[#CCD0CF] text-xs"
              role="radiogroup"
              aria-label="Select Room Ambience"
            >
              {ambienceModes.map((item) => {
                const isSelected = active === item.key && mode !== 'auto';
                const isCurrentActive = active === item.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => selectManualAmbience(item.key)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-[#11212D] text-[#CCD0CF] shadow-sm'
                        : isCurrentActive && mode === 'auto'
                        ? 'bg-white/80 text-[#06141B]'
                        : 'text-[#4A5C6A] hover:text-[#06141B]'
                    }`}
                    title={`${item.label} (${item.temp})`}
                    aria-checked={isSelected}
                    role="radio"
                  >
                    <span
                      className="w-2 h-2 rounded-full transition-transform"
                      style={{
                        backgroundColor: item.color,
                        boxShadow: isCurrentActive ? `0 0 6px ${item.color}` : 'none',
                        transform: isCurrentActive ? 'scale(1.2)' : 'scale(1)',
                      }}
                    />
                    <span className="hidden sm:inline text-[11.5px]">{item.label}</span>
                  </button>
                );
              })}

              {/* Auto Button */}
              <button
                type="button"
                onClick={resetToAuto}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                  mode === 'auto'
                    ? 'bg-[#253745] text-white shadow-sm'
                    : 'text-[#4A5C6A] hover:text-[#06141B]'
                }`}
                title="Synchronize ambience automatically to scroll position"
                aria-pressed={mode === 'auto'}
              >
                <Sparkles className="w-3 h-3" />
                <span className="text-[11px]">Auto</span>
              </button>
            </div>

            {/* Enterprise CTA button */}
            <a
              href="#engagement"
              className="hidden md:inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#11212D] text-[#CCD0CF] hover:bg-[#06141B] hover:text-white text-xs font-semibold tracking-wide transition-all shadow-sm hover:-translate-y-0.5 border border-[#253745]"
            >
              Request Pilot
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-full text-[#4A5C6A] hover:text-[#06141B] hover:bg-[#E6EBEC] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-2 p-4 rounded-3xl bg-white/95 backdrop-blur-2xl border border-[#CCD0CF] shadow-card animate-in fade-in slide-in-from-top-3 duration-300">
            <div className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-xl text-sm font-medium text-[#4A5C6A] hover:text-[#06141B] hover:bg-[#E6EBEC] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-[#CCD0CF] mt-2">
                <a
                  href="#engagement"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#11212D] text-[#CCD0CF] text-xs font-semibold tracking-wide"
                >
                  Request Institutional Pilot
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
