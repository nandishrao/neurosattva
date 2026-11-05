import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useAmbience } from '../../context/AmbienceContext';
import { DEMO_SCENES, DEMO_CONTENT, DemoScene, THEME_PALETTE } from '../../data/content';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles, MonitorPlay } from 'lucide-react';
import { motion } from 'framer-motion';

export const SessionDemo: React.FC = () => {
  const { selectManualAmbience } = useAmbience();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTimeSec, setCurrentTimeSec] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const totalDuration = 30;

  const currentScene: DemoScene = 
    DEMO_SCENES.find((s) => currentTimeSec >= s.startSec && currentTimeSec < s.endSec) || DEMO_SCENES[2];

  useEffect(() => {
    if (isPlaying) {
      selectManualAmbience(currentScene.state);
    }
  }, [currentScene.state, isPlaying, selectManualAmbience]);

  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp: number | null = null;

    const tick = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsedSec = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      setCurrentTimeSec((prev) => {
        const next = prev + elapsedSec;
        if (next >= totalDuration) {
          setIsPlaying(false);
          return totalDuration;
        }
        return next;
      });

      if (isPlaying) {
        animationFrameId = requestAnimationFrame(tick);
      }
    };

    if (isPlaying) {
      animationFrameId = requestAnimationFrame(tick);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying]);

  const initAudio = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        output[i] = (b0 + b1 + b2) * 0.05;
      }
      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 450;

      const gain = ctx.createGain();
      gain.gain.value = isMuted ? 0 : 0.04;

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      whiteNoise.start(0);

      audioCtxRef.current = ctx;
      gainNodeRef.current = gain;
    }
  }, [isMuted]);

  const toggleMute = () => {
    initAudio();
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(
        newMuteState ? 0 : 0.04,
        audioCtxRef.current.currentTime
      );
    }
  };

  const handlePlayPause = () => {
    if (!isPlaying && currentTimeSec >= totalDuration) {
      setCurrentTimeSec(0);
    }
    if (!isPlaying && !isMuted) {
      initAudio();
      if (audioCtxRef.current?.state === 'suspended') {
        audioCtxRef.current.resume();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    setCurrentTimeSec(0);
    setIsPlaying(true);
  };

  const handleScrubberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTimeSec(parseFloat(e.target.value));
  };

  const formatClock = (sec: number) => {
    const virtualSeconds = Math.floor((sec / totalDuration) * 15 * 60);
    const m = Math.floor(virtualSeconds / 60);
    const s = virtualSeconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="eyebrow">{DEMO_CONTENT.eyebrow}</span>
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-fraunces font-normal text-[#06141B] leading-tight">
          {DEMO_CONTENT.title}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#4A5C6A] leading-relaxed">
          {DEMO_CONTENT.intro}
        </p>
      </div>

      {/* Main Glass Player Container */}
      <div className="glass-card p-6 sm:p-10 border-[#CCD0CF] shadow-brand relative overflow-hidden bg-white/90">
        {/* Top Player Header: Live Clock & State Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#CCD0CF]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#CCD0CF]/60 border border-[#9BA8AB]">
              <span
                className="w-2.5 h-2.5 rounded-full transition-colors duration-700 animate-pulse"
                style={{ backgroundColor: 'var(--amb-accent)' }}
              />
              <span className="text-xs font-bold tracking-wider uppercase text-[#06141B]">
                Scene {currentScene.id}: {currentScene.title}
              </span>
            </div>
            <span className="text-xs text-[#4A5C6A] font-mono font-semibold">
              ({currentScene.timeRange})
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-xs sm:text-sm text-[#4A5C6A] bg-[#CCD0CF]/40 px-3 py-1 rounded-full border border-[#CCD0CF]">
              Lesson Clock: <strong className="text-[#06141B]">{formatClock(currentTimeSec)}</strong> / 15:00
            </span>

            {/* Pink Noise Audio Toggle */}
            <button
              type="button"
              onClick={toggleMute}
              className={`p-2 rounded-full border transition-colors cursor-pointer ${
                !isMuted
                  ? 'bg-[#11212D] text-[#CCD0CF] border-[#11212D]'
                  : 'bg-white text-[#4A5C6A] border-[#CCD0CF] hover:text-[#06141B]'
              }`}
              title={isMuted ? 'Simulate acoustic noise generation' : 'Mute audio'}
              aria-label={isMuted ? 'Enable simulated noise' : 'Disable noise'}
            >
              {!isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* 3 Synchronised Modality Lanes */}
        <div className="py-6 space-y-4">
          {/* Lane 1: Video Display */}
          <div className="p-4 rounded-2xl bg-white border border-[#CCD0CF] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-1/3">
              <div className="w-9 h-9 rounded-xl bg-[#CCD0CF]/50 flex items-center justify-center text-xs font-bold text-[#11212D] shrink-0">
                <MonitorPlay className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-[#4A5C6A] uppercase tracking-wider block font-bold">Classroom Display</span>
                <span className="text-xs sm:text-sm font-semibold text-[#06141B]">{currentScene.video}</span>
              </div>
            </div>

            <div
              className={`w-full sm:w-2/3 h-14 rounded-xl bg-gradient-to-r ${currentScene.gradient} transition-all duration-1000 flex items-center justify-center border border-white/80 shadow-inner overflow-hidden relative`}
            >
              <motion.div
                key={currentScene.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-2 text-xs font-semibold text-[#06141B] px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#253745]" />
                <span>Zero-Latency Edge Feed &middot; {currentScene.video}</span>
              </motion.div>
            </div>
          </div>

          {/* Lane 2: Audio & Pulse */}
          <div className="p-4 rounded-2xl bg-white border border-[#CCD0CF] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-1/3">
              <div className="w-9 h-9 rounded-xl bg-[#CCD0CF]/50 flex items-center justify-center text-xs font-bold text-[#11212D] shrink-0">
                <Volume2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-[#4A5C6A] uppercase tracking-wider block font-bold">Acoustic Orchestration</span>
                <span className="text-xs sm:text-sm font-semibold text-[#06141B]">{currentScene.audio}</span>
              </div>
            </div>

            <div className="w-full sm:w-2/3 h-14 rounded-xl bg-[#F4F6F6] border border-[#CCD0CF] flex items-center justify-center px-4 overflow-hidden relative">
              <div className="flex items-center justify-between w-full gap-1.5 h-8">
                {Array.from({ length: 30 }).map((_, i) => {
                  const phase = (i * 0.22) + currentTimeSec * 2;
                  const baseHeight = currentScene.id === 1 ? 24 : currentScene.id === 2 ? 18 : 12;
                  const h = Math.abs(Math.sin(phase)) * baseHeight + 6;
                  return (
                    <div
                      key={i}
                      className="flex-1 rounded-full transition-all duration-300"
                      style={{
                        height: isPlaying ? `${h}px` : '8px',
                        backgroundColor: 'var(--amb-accent)',
                        opacity: 0.5 + (Math.sin(phase) + 1) * 0.25,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Lane 3: Smart Lighting */}
          <div className="p-4 rounded-2xl bg-white border border-[#CCD0CF] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-1/3">
              <div className="w-9 h-9 rounded-xl bg-[#CCD0CF]/50 flex items-center justify-center text-xs font-bold text-[#11212D] shrink-0">
                LGT
              </div>
              <div>
                <span className="text-[11px] text-[#4A5C6A] uppercase tracking-wider block font-bold">Circadian Lighting</span>
                <span className="text-xs sm:text-sm font-semibold text-[#06141B]">{currentScene.light}</span>
              </div>
            </div>

            <div
              className="w-full sm:w-2/3 h-14 rounded-xl border border-white/80 shadow-inner flex items-center px-5 justify-between transition-colors duration-1000 relative overflow-hidden"
              style={{
                backgroundColor: currentScene.colorK,
                boxShadow: `inset 0 0 20px ${currentScene.colorK}`,
              }}
            >
              <div
                className="absolute inset-0 blur-md opacity-40 transition-colors duration-1000"
                style={{ backgroundColor: 'var(--amb-glow)' }}
              />
              <span className="font-mono text-xs text-[#06141B] font-bold relative z-10">
                {currentScene.light}
              </span>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white/90 text-[#06141B] shadow-sm relative z-10">
                1200ms Smooth Fade
              </span>
            </div>
          </div>
        </div>

        {/* Timeline & Controls */}
        <div className="mt-4 pt-6 border-t border-[#CCD0CF]">
          <div className="grid grid-cols-3 gap-2 mb-2 text-xs text-[#4A5C6A] font-mono font-semibold">
            <span className={currentScene.id === 1 ? 'font-bold text-[#11212D]' : ''}>Scene 1 (0-5m) Focus</span>
            <span className={`text-center ${currentScene.id === 2 ? 'font-bold text-[#253745]' : ''}`}>Scene 2 (6-10m) Creative</span>
            <span className={`text-right ${currentScene.id === 3 ? 'font-bold text-[#4A5C6A]' : ''}`}>Scene 3 (11-15m) Calm</span>
          </div>

          <div className="relative flex items-center">
            <input
              type="range"
              min={0}
              max={totalDuration}
              step={0.1}
              value={currentTimeSec}
              onChange={handleScrubberChange}
              className="w-full h-2.5 bg-[#CCD0CF]/60 rounded-lg appearance-none cursor-pointer accent-[#11212D] border border-[#CCD0CF]"
              aria-label="Timeline Scrubber"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePlayPause}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#11212D] text-[#CCD0CF] font-semibold text-sm shadow-brand hover:bg-[#06141B] hover:text-white hover:scale-[1.02] transition-all cursor-pointer border border-[#253745]"
                aria-label={isPlaying ? 'Pause Demo' : 'Play Demo'}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-[#CCD0CF]" /> : <Play className="w-4 h-4 fill-[#CCD0CF]" />}
                <span>{isPlaying ? 'Pause Timeline' : 'Play 30s Simulation'}</span>
              </button>

              <button
                type="button"
                onClick={handleRestart}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-[#CCD0CF] text-[#4A5C6A] hover:text-[#06141B] text-sm font-medium transition-colors cursor-pointer"
                aria-label="Restart Demo"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restart</span>
              </button>
            </div>

            <p className="text-xs text-[#4A5C6A] italic">
              Demonstrates automatic circadian light & sound transition without instructor distraction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
