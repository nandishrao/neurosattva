import { useEffect } from 'react';
import { useAmbience } from '../context/AmbienceContext';
import { NeuroStateKey } from '../data/content';

export const useScrollAmbience = () => {
  const { mode, setActive } = useAmbience();

  useEffect(() => {
    if (mode !== 'auto') return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const progress = Math.min(Math.max(scrollY / docHeight, 0), 1);

      let targetState: NeuroStateKey = 'focus';
      if (progress < 0.35) {
        targetState = 'focus';
      } else if (progress < 0.70) {
        targetState = 'creative';
      } else {
        targetState = 'calm';
      }

      setActive(targetState);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [mode, setActive]);
};

