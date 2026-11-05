import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { NeuroStateKey, NEURO_PROFILES } from '../data/content';

export type AmbienceMode = 'auto' | NeuroStateKey;

interface AmbienceContextType {
  mode: AmbienceMode;
  active: NeuroStateKey;
  setMode: (mode: AmbienceMode) => void;
  setActive: (active: NeuroStateKey) => void;
  selectManualAmbience: (state: NeuroStateKey) => void;
  resetToAuto: () => void;
}

const AmbienceContext = createContext<AmbienceContextType | undefined>(undefined);

export const AmbienceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<AmbienceMode>('auto');
  const [active, setActive] = useState<NeuroStateKey>('focus');

  // Apply CSS variables to root element
  useEffect(() => {
    const profile = NEURO_PROFILES[active];
    if (profile) {
      const root = document.documentElement;
      root.style.setProperty('--amb-wash', profile.wash);
      root.style.setProperty('--amb-accent', profile.accent);
      root.style.setProperty('--amb-glow', profile.glow);
      root.setAttribute('data-ambience', active);
    }
  }, [active]);

  const selectManualAmbience = useCallback((state: NeuroStateKey) => {
    setMode(state);
    setActive(state);
  }, []);

  const resetToAuto = useCallback(() => {
    setMode('auto');
  }, []);

  return (
    <AmbienceContext.Provider
      value={{
        mode,
        active,
        setMode,
        setActive,
        selectManualAmbience,
        resetToAuto,
      }}
    >
      {children}
    </AmbienceContext.Provider>
  );
};

export const useAmbience = (): AmbienceContextType => {
  const context = useContext(AmbienceContext);
  if (!context) {
    throw new Error('useAmbience must be used within an AmbienceProvider');
  }
  return context;
};

