import React, { useState, Suspense, lazy } from 'react';
import { useScrollAmbience } from './hooks/useScrollAmbience';
import { useLenis } from './hooks/useLenis';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { TheIdea } from './components/sections/TheIdea';
import { FiveLayers } from './components/sections/FiveLayers';
import { NeuroProfiles } from './components/sections/NeuroProfiles';
import { WhoUsesIt } from './components/sections/WhoUsesIt';
import { Hardware } from './components/sections/Hardware';
import { SessionJson } from './components/sections/SessionJson';
import { Workflows } from './components/sections/Workflows';
import { Security } from './components/sections/Security';
import { Roadmap } from './components/sections/Roadmap';
import { InstitutionalEngagement } from './components/sections/InstitutionalEngagement';
import { Footer } from './components/sections/Footer';
import { AmbienceBackground } from './components/ui/AmbienceBackground';
import { LoadingIntro } from './components/ui/LoadingIntro';
import { SoftDivider } from './components/ui/Divider';

// Code-split Session Demo and Architecture SVG for optimized performance & lighthouse scores
const SessionDemo = lazy(() =>
  import('./components/sections/SessionDemo').then((module) => ({
    default: module.SessionDemo,
  }))
);

const Architecture = lazy(() =>
  import('./components/sections/Architecture').then((module) => ({
    default: module.Architecture,
  }))
);

export const App: React.FC = () => {
  const [introFinished, setIntroFinished] = useState(false);

  // Initialize Lenis smooth scroll
  useLenis();

  // Scroll-linked ambience mode interpolation
  useScrollAmbience();

  return (
    <div className="relative min-h-screen bg-transparent text-ink selection:bg-blue-100 selection:text-sapphire-deep">
      {/* Loading Intro (fades in orb, skippable, < 1.2s) */}
      {!introFinished && (
        <LoadingIntro onComplete={() => setIntroFinished(true)} />
      )}

      {/* 3 Slow Drifting Background Blobs + Subtle Noise Texture */}
      <AmbienceBackground />

      {/* 0. Sticky Enterprise Navbar */}
      <Navbar />

      <main>
        {/* 1. Hero Overview Section */}
        <Hero />

        <SoftDivider />

        {/* 2. Executive Summary ("Not a traditional LMS") */}
        <TheIdea />

        {/* 3. Five Architecture Layers */}
        <FiveLayers />

        <SoftDivider flip />

        {/* 4. Calibrated Neuro-State Profiles */}
        <NeuroProfiles />

        {/* 5. Synchronised Sensory Playback Demo */}
        <Suspense
          fallback={
            <div className="h-96 flex items-center justify-center text-xs text-ink-soft">
              Calibrating sensory timeline engine...
            </div>
          }
        >
          <SessionDemo />
        </Suspense>

        <SoftDivider />

        {/* 6. Organizational Roles */}
        <WhoUsesIt />

        {/* 7. System Architecture (Cloud + Edge Runtime) */}
        <Suspense
          fallback={
            <div className="h-96 flex items-center justify-center text-xs text-ink-soft">
              Rendering system topology...
            </div>
          }
        >
          <Architecture />
        </Suspense>

        <SoftDivider flip />

        {/* 8. Modular Hardware Packages */}
        <Hardware />

        {/* 9. Session JSON Specification */}
        <SessionJson />

        <SoftDivider />

        {/* 10. Operational Workflows (Teacher + Pipeline) */}
        <Workflows />

        {/* 11. Security & Commercial Licensing */}
        <Security />

        <SoftDivider flip />

        {/* 12. Deployment Roadmap & Milestones */}
        <Roadmap />

        {/* 13. Institutional Engagement & Pilot Proposal */}
        <InstitutionalEngagement />
      </main>

      {/* 14. Corporate Footer */}
      <Footer />
    </div>
  );
};

export default App;
