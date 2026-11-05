import React, { useState } from 'react';
import { SESSION_JSON_CONTENT } from '../../data/content';
import { Check, Copy, CheckCheck, Code2, Info } from 'lucide-react';
import { motion } from 'framer-motion';

export const SessionJson: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeHoverKey, setActiveHoverKey] = useState<string | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(SESSION_JSON_CONTENT.rawJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getTooltip = (key: string) => SESSION_JSON_CONTENT.keyTooltips[key] || null;

  return (
    <section id="pipeline" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="eyebrow">{SESSION_JSON_CONTENT.eyebrow}</span>
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-fraunces font-normal text-[#06141B] leading-tight">
          {SESSION_JSON_CONTENT.title}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#4A5C6A] leading-relaxed">
          {SESSION_JSON_CONTENT.intro}
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Code Viewer Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 glass-card p-6 sm:p-8 border-[#CCD0CF] relative overflow-hidden bg-white"
        >
          {/* Top header bar */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#CCD0CF]">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#11212D]" />
              <span className="font-mono text-xs font-bold text-[#06141B]">
                session_specification.json
              </span>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#CCD0CF]/50 hover:bg-white text-[#11212D] border border-[#9BA8AB] transition-all cursor-pointer shadow-sm"
              aria-label="Copy JSON schema"
            >
              {copied ? (
                <>
                  <CheckCheck className="w-3.5 h-3.5 text-[#11212D]" />
                  <span className="text-[#11212D]">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Schema</span>
                </>
              )}
            </button>
          </div>

          {/* Code Body */}
          <div className="p-5 rounded-2xl bg-[#06141B] border border-[#11212D] font-mono text-[13px] sm:text-[13.5px] leading-relaxed text-[#CCD0CF] overflow-x-auto shadow-inner">
            <pre className="whitespace-pre">
              <code>
                {`{\n`}
                &nbsp;&nbsp;
                <span
                  onMouseEnter={() => setActiveHoverKey('session_id')}
                  onMouseLeave={() => setActiveHoverKey(null)}
                  className="cursor-pointer text-[#9BA8AB] hover:underline"
                >
                  "session_id"
                </span>
                : <span className="text-[#CCD0CF]">"NEURO_GRADE5_SCI_04"</span>,{'\n'}
                &nbsp;&nbsp;
                <span className="text-[#4A5C6A]">"version"</span>: <span className="text-[#CCD0CF]">"1.2.0"</span>,{'\n'}
                &nbsp;&nbsp;
                <span
                  onMouseEnter={() => setActiveHoverKey('video')}
                  onMouseLeave={() => setActiveHoverKey(null)}
                  className="cursor-pointer text-[#9BA8AB] hover:underline"
                >
                  "video"
                </span>
                : <span className="text-[#CCD0CF]">"cellular_mitosis_4k.mp4"</span>,{'\n'}
                &nbsp;&nbsp;
                <span className="text-[#4A5C6A]">"scenes"</span>: [{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;{`{\n`}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span
                  onMouseEnter={() => setActiveHoverKey('start_time')}
                  onMouseLeave={() => setActiveHoverKey(null)}
                  className="cursor-pointer text-[#9BA8AB] hover:underline"
                >
                  "start_time"
                </span>
                : <span className="text-white">0</span>,{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span
                  onMouseEnter={() => setActiveHoverKey('state')}
                  onMouseLeave={() => setActiveHoverKey(null)}
                  className="cursor-pointer text-[#9BA8AB] hover:underline"
                >
                  "state"
                </span>
                : <span className="text-[#CCD0CF]">"focus"</span>,{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-[#4A5C6A]">"light"</span>: {`{\n`}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span
                  onMouseEnter={() => setActiveHoverKey('temperature_k')}
                  onMouseLeave={() => setActiveHoverKey(null)}
                  className="cursor-pointer text-[#9BA8AB] font-bold bg-[#11212D] px-1 rounded hover:bg-[#253745] transition-colors"
                >
                  "temperature_k"
                </span>
                : <span className="text-white">6500</span>,{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span
                  onMouseEnter={() => setActiveHoverKey('lux')}
                  onMouseLeave={() => setActiveHoverKey(null)}
                  className="cursor-pointer text-[#9BA8AB] font-bold bg-[#11212D] px-1 rounded hover:bg-[#253745] transition-colors"
                >
                  "lux"
                </span>
                : <span className="text-white">500</span>,{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-[#4A5C6A]">"transition_ms"</span>: <span className="text-white">1200</span>{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`},\n`}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-[#4A5C6A]">"audio"</span>: {`{\n`}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span
                  onMouseEnter={() => setActiveHoverKey('file')}
                  onMouseLeave={() => setActiveHoverKey(null)}
                  className="cursor-pointer text-[#9BA8AB] font-bold bg-[#11212D] px-1 rounded hover:bg-[#253745] transition-colors"
                >
                  "file"
                </span>
                : <span className="text-[#CCD0CF]">"gamma_induction.mp3"</span>,{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span
                  onMouseEnter={() => setActiveHoverKey('pulse_hz')}
                  onMouseLeave={() => setActiveHoverKey(null)}
                  className="cursor-pointer text-[#9BA8AB] font-bold bg-[#11212D] px-1 rounded hover:bg-[#253745] transition-colors"
                >
                  "pulse_hz"
                </span>
                : <span className="text-white">40</span>,{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-[#4A5C6A]">"gain_db"</span>: <span className="text-white">-6</span>{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}\n`}
                &nbsp;&nbsp;&nbsp;&nbsp;{`}\n`}
                &nbsp;&nbsp;]{'\n'}
                {`}`}
              </code>
            </pre>
          </div>

          <p className="mt-3 text-xs text-[#4A5C6A] italic text-right">
            Hover over highlighted schema keys to view physical classroom parameter documentation.
          </p>
        </motion.div>

        {/* Right: Dynamic Inspector & Enterprise Benefits */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Dynamic Inspector Tooltip Card */}
          <div className="glass-card p-5 border-2 border-[#11212D]/20 bg-[#CCD0CF]/30 min-h-[105px] flex items-start gap-3">
            <Info className="w-5 h-5 text-[#11212D] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#11212D] block">
                {activeHoverKey ? `Schema Field: "${activeHoverKey}"` : 'Schema Inspector'}
              </span>
              <p className="text-xs sm:text-sm text-[#06141B] mt-1 leading-relaxed">
                {activeHoverKey
                  ? getTooltip(activeHoverKey)
                  : 'Hover over temperature_k, lux, file, or pulse_hz on the code viewer to inspect how each parameter controls the physical classroom environment.'}
              </p>
            </div>
          </div>

          {/* 5 Benefits List */}
          <div className="glass-card p-6 sm:p-7 border-[#CCD0CF] bg-white">
            <h3 className="font-fraunces text-xl text-[#06141B] font-normal mb-5">
              Why Configuration-Driven?
            </h3>
            <ul className="space-y-4">
              {SESSION_JSON_CONTENT.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#06141B] font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#11212D]/10 text-[#11212D] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
