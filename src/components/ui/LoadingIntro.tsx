import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingIntroProps {
  onComplete: () => void;
}

export const LoadingIntro: React.FC<LoadingIntroProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(false);
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 400);
    }, 1000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F4F6F6]"
          role="status"
          aria-label="Loading Neurosattva experience"
        >
          {/* Central expanding light orb */}
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: [0.4, 1.15, 1], opacity: [0, 0.95, 0.85] }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-44 h-44 rounded-full blur-[24px] pointer-events-none"
            style={{
              background: 'radial-gradient(circle, #CCD0CF 0%, rgba(155, 168, 171, 0.6) 60%, rgba(17, 33, 45, 0) 80%)',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 font-serif text-2xl tracking-tight text-[#06141B] font-light"
          >
            Neurosattva
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xs uppercase tracking-[0.2em] text-[#4A5C6A] mt-1 font-semibold"
          >
            Calibrating Space...
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
