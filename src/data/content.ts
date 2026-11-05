// ==========================================
// src/data/content.ts
// Client-Facing Enterprise Product Portfolio Data
// Neurosattva Immersive Learning Platform
// Prepared by RAAK Saphire for Neurosattva Educational Initiative
// ==========================================

export const COMPANY_NAME = "Neurosattva";
export const INITIATIVE_NAME = "Neurosattva Educational Initiative";
export const PARENT_COMPANY = "RAAK Saphire";
export const CONTACT_EMAIL = "partnerships@neurosattva.com";
export const EXECUTIVE_PHONE = "+91 (080) 4123-8900";
export const HQ_LOCATION = "Bangalore, India · Global Deployments";

// Theme Palette Constants directly from user swatch
export const THEME_PALETTE = {
  darkest: '#06141B',
  dark: '#11212D',
  petrol: '#253745',
  steel: '#4A5C6A',
  mist: '#9BA8AB',
  pearl: '#CCD0CF',
};

// Navigation Links for Enterprise Clients
export const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Core Solution", href: "#solution" },
  { label: "Sensory Demo", href: "#experience" },
  { label: "Neuro-States", href: "#profiles" },
  { label: "Architecture", href: "#architecture" },
  { label: "Hardware Tiers", href: "#hardware" },
  { label: "Pipeline & Sync", href: "#pipeline" },
  { label: "Security", href: "#security" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Institutional Pilot", href: "#engagement" },
];

// --- Hero Section ---
export const HERO_CONTENT = {
  eyebrow: "ENTERPRISE PROPOSAL & PRODUCT PORTFOLIO",
  title: "Classrooms that feel the lesson.",
  subtitle:
    "Neurosattva is a synchronized neuro-learning delivery platform combining educational video, neuro-acoustic audio orchestration, and smart lighting to transition classrooms into optimal states for focus, creativity, and calm absorption.",
  ctaPrimary: "Experience Interactive Demo",
  ctaGhost: "Explore System Architecture",
  ctaEnterprise: "Schedule Executive Briefing",
  statPills: [
    "3 Calibrated Neuro-States",
    "5 Synchronous Platform Layers",
    "4 Enterprise User Roles",
    "100% Offline Classroom Execution",
  ],
  floatingChips: ["4K Video Sync", "Neuro-Acoustic Audio", "Adaptive Smart Light"],
};

// --- Executive Summary & The Idea ---
export const IDEA_CONTENT = {
  eyebrow: "EXECUTIVE SUMMARY",
  title: "Not a traditional LMS. An immersive delivery platform.",
  intro:
    "Traditional Learning Management Systems merely store files and log attendance. Neurosattva orchestrates the physical classroom environment around the learner's biological attention state.",
  traditional: {
    heading: "Traditional LMS Constraints",
    badge: "Legacy Software",
    description: "Designed for administrative tracking and passive screen consumption with zero awareness of learner sensory fatigue.",
    points: [
      "Static video playback with no environmental pacing",
      "Confined to individual laptop or tablet screens",
      "Isolated assignments and passive quiz submissions",
      "No real-time acoustic modulation or circadian lighting",
      "Complete dependency on live classroom internet bandwidth",
    ],
  },
  neurosattva: {
    heading: "Neurosattva Immersive Platform",
    badge: "Synchronized Sensory Delivery",
    description: "A hybrid cloud + edge architecture executing multisensory sensory transitions right inside the physical room.",
    points: [
      "Synchronized video, neuro-acoustic audio & smart lighting",
      "Precision neuro-state environmental profiles (Focus, Creative, Calm)",
      "Timestamp-driven timeline transitions (Session JSON schema)",
      "Local Edge Runtime (Raspberry Pi / Mini PC) with zero latency",
      "100% resilient offline execution with encrypted asset packages",
      "Enterprise cloud telemetry, fleet governance & licensing",
    ],
  },
};

// --- Five Platform Layers ---
export const FIVE_LAYERS = {
  eyebrow: "PROPOSED SOLUTION OVERVIEW",
  title: "Five modular layers. One synchronized experience.",
  subtitle:
    "The platform separates centralized institutional governance from zero-latency physical classroom execution.",
  layers: [
    {
      num: "01",
      title: "Cloud LMS Platform",
      tag: "Centralized Management",
      description: "Enterprise user management, curriculum asset management, device fleet licensing, and aggregate institutional analytics.",
      icon: "Cloud",
    },
    {
      num: "02",
      title: "Local Runtime Engine",
      tag: "Zero-Latency Edge Execution",
      description: "Executes the synchronized multi-sensory classroom experience locally on edge hardware with zero lag and no internet dependency.",
      icon: "Cpu",
    },
    {
      num: "03",
      title: "Audio Orchestration Engine",
      tag: "Neuro-Acoustic Rhythm",
      description: "Controls instructional speech balancing, binaural pulse modulation, multi-channel volume dynamics, and seamless transitions.",
      icon: "Volume2",
    },
    {
      num: "04",
      title: "Smart Lighting Engine",
      tag: "Circadian Scene Control",
      description: "Drives CCT color temperature (2700K–6500K) and calibrated lux intensity, synchronizing classroom lighting with lesson beats.",
      icon: "Sun",
    },
    {
      num: "05",
      title: "Session Timeline Engine",
      tag: "Timestamp Synchronization",
      description: "Harmonizes video frames, acoustic pulse frequencies, and light scene changes second-by-second using timestamp markers.",
      icon: "Clock",
    },
  ],
};

// --- Neuro-State Profiles ---
export type NeuroStateKey = "focus" | "creative" | "calm";

export interface NeuroProfile {
  id: NeuroStateKey;
  label: string;
  subtitle: string;
  tempK: number;
  tempLabel: string;
  lux: number;
  audio: string;
  pulseHz: string;
  pulseSpeedClass: string;
  tagline: string;
  accent: string;
  wash: string;
  glow: string;
  kelvinColor: string;
  cognitiveTarget: string;
}

export const NEURO_PROFILES: Record<NeuroStateKey, NeuroProfile> = {
  focus: {
    id: "focus",
    label: "Focus / Alert",
    subtitle: "High Cognition & Analytic Processing",
    tempK: 6500,
    tempLabel: "6500K Cool Daylight",
    lux: 500,
    audio: "Instructional speech range + Gamma pulse",
    pulseHz: "40Hz",
    pulseSpeedClass: "animate-pulse-gamma",
    tagline: "Sharp, alert, primed for peak conceptual synthesis.",
    accent: THEME_PALETTE.dark,       // #11212D
    wash: 'rgba(204, 208, 207, 0.45)', // #CCD0CF light wash
    glow: THEME_PALETTE.mist,         // #9BA8AB
    kelvinColor: '#D8DEE0',
    cognitiveTarget: "Stimulates cortical arousal and working memory during complex instructional modules.",
  },
  creative: {
    id: "creative",
    label: "Creative / Active Learning",
    subtitle: "Exploratory & Hands-on Collaboration",
    tempK: 4000,
    tempLabel: "4000K Neutral White",
    lux: 350,
    audio: "Nature-based ambience + Alpha pulse",
    pulseHz: "8 to 12Hz",
    pulseSpeedClass: "animate-pulse-alpha",
    tagline: "Expansive, curious, conducive to active ideation.",
    accent: THEME_PALETTE.petrol,     // #253745
    wash: 'rgba(155, 168, 171, 0.35)', // #9BA8AB wash
    glow: THEME_PALETTE.pearl,        // #CCD0CF
    kelvinColor: '#E2E6E5',
    cognitiveTarget: "Promotes relaxed alertness and associative problem solving in group workshops.",
  },
  calm: {
    id: "calm",
    label: "Calm / Deep Absorption",
    subtitle: "Consolidation & Stress Reduction",
    tempK: 2700,
    tempLabel: "2700K Warm Restorative",
    lux: 150,
    audio: "Pink noise ambience + Theta pulse",
    pulseHz: "4 to 7Hz",
    pulseSpeedClass: "animate-pulse-theta",
    tagline: "Soft, grounded, facilitating long-term memory encoding.",
    accent: THEME_PALETTE.steel,      // #4A5C6A
    wash: 'rgba(204, 208, 207, 0.3)',  // #CCD0CF soft wash
    glow: THEME_PALETTE.mist,         // #9BA8AB
    kelvinColor: '#EAECE9',
    cognitiveTarget: "Reduces sympathetic nervous tension to allow deep reflection and retention.",
  },
};

export const PROFILES_HEADER = {
  eyebrow: "SCIENTIFIC ENVIRONMENT CALIBRATION",
  title: "Three neuro-states. One room that adapts.",
  intro:
    "Each environment pairs exact photometric Kelvin temperatures, illuminance levels, and neuro-acoustic pulse modulation. Select a profile to observe the real-time sensory shift.",
  footnote:
    "Note: Profile values shown are pilot calibration benchmarks engineered by RAAK Saphire for educational efficacy and are customizable per institutional curriculum.",
};

// --- Synchronised Session Demo ---
export interface DemoScene {
  id: number;
  title: string;
  timeRange: string;
  startSec: number;
  endSec: number;
  state: NeuroStateKey;
  video: string;
  audio: string;
  light: string;
  colorK: string;
  gradient: string;
}

export const DEMO_SCENES: DemoScene[] = [
  {
    id: 1,
    title: "Lesson Orientation & Direct Instruction",
    timeRange: "0 – 5 mins",
    startSec: 0,
    endSec: 10,
    state: "focus",
    video: "Intro & Core Concepts",
    audio: "Focus audio (Gamma 40Hz)",
    light: "6500K Cool White (500 Lux)",
    colorK: "#D8DEE0",
    gradient: "from-[#CCD0CF] via-[#DCE2E2] to-[#9BA8AB]",
  },
  {
    id: 2,
    title: "Collaborative Student Activity",
    timeRange: "6 – 10 mins",
    startSec: 10,
    endSec: 20,
    state: "creative",
    video: "Active Problem-Solving",
    audio: "Nature ambience (Alpha 10Hz)",
    light: "4000K Neutral White (350 Lux)",
    colorK: "#E2E6E5",
    gradient: "from-[#E2E6E5] via-[#CCD0CF] to-[#9BA8AB]",
  },
  {
    id: 3,
    title: "Consolidation & Reflective Synthesis",
    timeRange: "11 – 15 mins",
    startSec: 20,
    endSec: 30,
    state: "calm",
    video: "Reflection & Retention",
    audio: "Pink noise (Theta 5Hz)",
    light: "2700K Warm Restorative (150 Lux)",
    colorK: "#EAECE9",
    gradient: "from-[#F0F2F1] via-[#E2E6E5] to-[#CCD0CF]",
  },
];

export const DEMO_CONTENT = {
  eyebrow: "SYNCHRONIZED SENSORY PLAYBACK",
  title: "One timeline. Three physical senses in sync.",
  intro:
    "Experience a 15-minute curriculum block simulated in 30 seconds. Watch how the classroom display, acoustic waveform, and ambient lighting transition synchronously without instructor intervention.",
};

// --- User Roles & Governance ---
export const USER_ROLES = {
  eyebrow: "ORGANIZATIONAL WORKFLOW",
  title: "Engineered for four institutional stakeholders.",
  roles: [
    {
      title: "Super Admin",
      roleType: "District / Board Leadership",
      icon: "ShieldCheck",
      description: "Centralized governance across campus networks and licensing tiers.",
      points: [
        "Multi-school network onboarding & role-based access",
        "Hardware device provisioning & registration management",
        "Curriculum licensing & subscription management",
        "District-wide engagement telemetry & uptime reporting",
        "Platform security configuration & audit logs",
      ],
    },
    {
      title: "Content Creator",
      roleType: "Curriculum & Media Designers",
      icon: "Sparkles",
      description: "Multisensory lesson authoring with timeline precision.",
      points: [
        "Upload master 4K educational videos",
        "Assemble multi-channel neuro-acoustic audio assets",
        "Configure automated lighting cues (CCT & lux)",
        "Build timestamp scenes linking all three sensory modalities",
        "Export tamper-evident encrypted Session packages (.nsx)",
      ],
    },
    {
      title: "Teacher / Tutor",
      roleType: "Classroom Instructors",
      icon: "GraduationCap",
      description: "Zero-stress orchestration requiring zero technical overhead.",
      points: [
        "Single-sign-on access to intuitive educator console",
        "Browse pre-approved timetable sessions",
        "Single-tap 'Prepare Session' with instant health diagnostics",
        "Simple Start / Pause / Resume controls",
        "Real-time visual monitoring of classroom environment status",
      ],
    },
    {
      title: "Students",
      roleType: "Learners & Cohorts",
      icon: "Users",
      description: "Low-fatigue, biologically primed immersive learning.",
      points: [
        "Participate in sensory-optimized physical environments",
        "Experience reduced eye fatigue via circadian transitions",
        "Enhanced concept retention through state-dependent learning",
        "Natural, passive adaptation to lesson intensity",
      ],
    },
  ],
};

// --- Architecture ---
export const ARCHITECTURE_CONTENT = {
  eyebrow: "ENTERPRISE ARCHITECTURE",
  title: "Cloud to manage. Edge runtime to perform.",
  intro:
    "The cloud platform provides administrative scale, encryption, and analytics. The edge runtime runs physically inside the classroom on dedicated local micro-controllers, guaranteeing deterministic sensory timing with zero internet buffering.",
  benefits: [
    "Deterministic Zero-Latency Sync",
    "100% Offline Classroom Execution",
    "Encrypted Asset Distribution (.nsx)",
    "Plug-and-Play Hardware Interfaces",
    "Negligible School Bandwidth Footprint",
  ],
  cloudServices: [
    "Authentication & RBAC Service",
    "Encrypted Content Repository",
    "Classroom Device Registry",
    "Licensing & Token Authority",
    "District Telemetry Engine",
    "RESTful & gRPC API Layer",
    "Institutional Admin Console",
  ],
  runtimeServices: [
    "Hardware-Accelerated Video Player",
    "Neuro-Acoustic Audio Synthesizer",
    "DMX / Zigbee / PWM Light Controller",
    "Sub-Millisecond Timestamp Engine",
    "Local Event Telemetry Buffer",
    "7-Day Offline Key Validator",
  ],
};

// --- Classroom Hardware Tiers ---
export const HARDWARE_CONTENT = {
  eyebrow: "MODULAR HARDWARE TIERS",
  title: "Turnkey packages from pilot classrooms to flagship auditoriums.",
  intro: "Every tier integrates seamlessly into existing classroom AV infrastructure with no proprietary vendor lock-in.",
  tiers: [
    {
      badge: "Institutional Standard",
      name: "Pilot / Core Tier",
      subtitle: "Lean, ultra-low latency architecture engineered for immediate institutional trials.",
      lighting: {
        device: "ESP32 Controller + Tunable CCT LED Strips",
        detail: "Direct micro-controller PWM control, sub-10ms response time, zero cloud dependency.",
      },
      runtime: {
        device: "Industrial Raspberry Pi 5 Edge Unit",
        detail: "Solid-state silent operation, instant auto-boot into runtime, minimal power consumption.",
      },
      audio: {
        device: "Edifier R1280DBs Active Studio Monitors",
        detail: "Balanced acoustic spectrum, clear vocal dispersion, balanced auxiliary + optical inputs.",
      },
    },
    {
      badge: "Flagship Immersive",
      name: "Premium Campus Tier",
      subtitle: "High-CRI architectural illumination and audiophile dispersion for premier classrooms.",
      lighting: {
        device: "Philips Hue Pro Bridge + Hue White Ambiance",
        detail: "90+ CRI color rendering, architectural ceiling washes, fluid 1200ms scene fades.",
      },
      runtime: {
        device: "Intel Core i5 Edge Mini PC",
        detail: "Dual 4K video outputs, enterprise remote manageability (Intel vPro), robust thermal headroom.",
      },
      audio: {
        device: "Yamaha HS5 / Kali Audio Studio Monitors",
        detail: "Precision acoustic staging engineered for authentic binaural pulse perception.",
      },
    },
    {
      badge: "Auditorium & Events",
      name: "Event / Innovation Hall",
      subtitle: "Large-format demonstration halls, investor showcase suites, and campus wellness centers.",
      lighting: {
        device: "DMX-512 Master Controller + High-Output Washers",
        detail: "Broad illumination throws capable of lighting 200+ seat lecture theatres uniformly.",
      },
      runtime: {
        device: "Enterprise Multi-Display Server Node",
        detail: "Multi-projection support, redundant network failover, broadcast-grade telemetry.",
      },
      audio: {
        device: "JBL Professional EON System",
        detail: "High-SPL linear acoustic coverage across deep auditorium seating arrays.",
      },
    },
  ],
  honestNote:
    "Engineering Standard: Off-the-shelf consumer smart bulbs (e.g. standard Tuya/Wipro WiFi bulbs) are not supported in production deployments due to 500ms+ round-trip cloud latency, jitter, and dependence on public WiFi routers.",
};

// --- Session JSON Viewer ---
export const SESSION_JSON_CONTENT = {
  eyebrow: "CONFIGURATION-DRIVEN SPECIFICATION",
  title: "Curriculum as structured data, not custom code.",
  intro:
    "Multi-sensory lessons are authored as lightweight, standardized JSON timelines. Any educator or content studio can generate, validate, and deploy sessions without touching software codebases.",
  rawJson: `{
  "session_id": "NEURO_GRADE5_SCI_04",
  "version": "1.2.0",
  "video": "cellular_mitosis_4k.mp4",
  "scenes": [
    {
      "start_time": 0,
      "state": "focus",
      "light": {
        "temperature_k": 6500,
        "lux": 500,
        "transition_ms": 1200
      },
      "audio": {
        "file": "gamma_induction.mp3",
        "pulse_hz": 40,
        "gain_db": -6
      }
    }
  ]
}`,
  benefits: [
    "Zero custom software builds for new curriculum units",
    "Standardized JSON Schema validated before deployment",
    "Independent audio, video, and photometric adjustment",
    "Endlessly reusable classroom runtime player",
    "Effortless synchronization across multi-school networks",
  ],
  keyTooltips: {
    session_id: "Unique cryptographic curriculum session identifier registered with the cloud device.",
    video: "Primary lesson video stream rendered without latency on the classroom display.",
    start_time: "Timeline marker in seconds from lesson start for triggering synchronous environmental shifts.",
    state: "High-level neuro-state tag (focus, creative, calm) used for analytics and dashboard indicators.",
    temperature_k: "Kelvin color temperature: sets the LED spectrum from daylight (6500K) to warm candle (2700K).",
    lux: "Luminance intensity: calibrated illuminance at desk level (500 lux for focus, 150 lux for calm).",
    file: "Audio track reference: synchronized sound layer packaged in the encrypted bundle.",
    pulse_hz: "Acoustic neuro-modulation frequency: slow sinusoidal modulation (e.g. 40Hz for gamma cognition).",
  } as Record<string, string>,
};

// --- Workflows ---
export const WORKFLOWS_CONTENT = {
  eyebrow: "OPERATIONAL WORKFLOWS",
  title: "Engineered for teacher simplicity and content security.",
  teacherFlow: {
    heading: "The Educator's 6-Step Experience",
    steps: [
      { step: 1, title: "SSO Login", desc: "Instructor accesses the school console via Google/Microsoft SSO." },
      { step: 2, title: "Select Timetable Session", desc: "Selects scheduled grade & subject module from the calendar." },
      { step: 3, title: "Click 'Prepare Session'", desc: "System runs self-test across local LED, speaker, and display." },
      { step: 4, title: "Edge Package Verification", desc: "Local hardware checks cached encrypted package (.nsx)." },
      { step: 5, title: "Click 'Start Session'", desc: "Teacher initiates session with a single tap on tablet or PC." },
      { step: 6, title: "Autonomous Orchestration", desc: "Sensory cues transition automatically throughout the lesson." },
    ],
    statusPill: "Session Active · Auto-Pilot",
  },
  contentPipeline: {
    heading: "The 7-Stage Curriculum Pipeline",
    steps: [
      { step: 1, title: "Multi-Modal Ingestion", desc: "Video, audio stems, session JSON, and photometric cues are uploaded." },
      { step: 2, title: "Cryptographic Packaging", desc: "Assets are compiled into a secure, tamper-evident package (NS_PACKAGE.nsx)." },
      { step: 3, title: "Device & License Mapping", desc: "Cloud associates package with authorized School ID & Classroom Hardware." },
      { step: 4, title: "Scheduled Pre-Caching", desc: "Cloud instructs edge runtime to silently pre-download packages during off-peak hours." },
      { step: 5, title: "Offline Storage & Decryption", desc: "Edge hardware decrypts keys in secure enclave ready for zero-lag playback." },
      { step: 6, title: "Local Session Execution", desc: "Runtime drives HDMI, PWM/DMX lighting, and acoustic audio with sub-frame precision." },
      { step: 7, title: "Batch Telemetry Sync", desc: "Aggregated session completion, device health, and environmental telemetry sync to cloud." },
    ],
  },
};

// --- Security & Licensing ---
export const SECURITY_CONTENT = {
  eyebrow: "ENTERPRISE TRUST & GOVERNANCE",
  title: "Protected by military-grade encryption and policy design.",
  cards: [
    {
      title: "Hardware Device Attestation",
      icon: "KeyRound",
      desc: "Each classroom runtime generates a cryptographic hardware fingerprint. Only verified devices receive decryption keys.",
    },
    {
      title: "Encrypted Packages (.nsx)",
      icon: "Lock",
      desc: "Educational content is wrapped in AES-256 encrypted envelopes. Assets cannot be inspected, copied, or played outside runtime.",
    },
    {
      title: "7-Day Resilient Offline Policy",
      icon: "WifiOff",
      desc: "Classrooms run seamlessly during network outages. Edge units validate token freshness upon periodic network heartbeat.",
    },
    {
      title: "Real-Time Hardware Telemetry",
      icon: "Activity",
      desc: "Proactive tracking of LED controller continuity, audio amplifier state, thermals, and unauthorized tampering attempts.",
    },
  ],
  licensingHeading: "Institutional Commercial Licensing Model",
  licensingPills: [
    "Per-Classroom Edge License (Turnkey Hardware + Runtime)",
    "Campus-Wide Institutional License (Unlimited Classrooms)",
    "Annual Curriculum Content Subscription & Updates",
    "Custom District SLA & Remote Hardware Monitoring",
  ],
  licensingCaption: "Designed for predictable annual institutional budgets with zero unexpected per-seat surge fees.",
};

// --- Roadmap & Strategic Phases ---
export const ROADMAP_CONTENT = {
  eyebrow: "DEPLOYMENT PHASES",
  title: "Structured roadmap for multi-campus rollout.",
  phases: [
    {
      phase: "Phase 1",
      title: "Pilot School Validation",
      color: "focus",
      badge: "Immediate Ready",
      accent: THEME_PALETTE.dark,
      bgTint: "bg-[#CCD0CF]/30 border-[#9BA8AB]",
      specs: "Raspberry Pi 5 · ESP32 + Tunable CCT LED · Edifier Audio · Cloud LMS MVP",
      purpose: "Deployed in 5–10 pilot classrooms to validate student engagement, teacher ergonomics, and calibrate sensory profiles.",
    },
    {
      phase: "Phase 2",
      title: "Scaled Campus Expansion",
      color: "creative",
      badge: "Scale Architecture",
      accent: THEME_PALETTE.petrol,
      bgTint: "bg-[#CCD0CF]/40 border-[#4A5C6A]",
      specs: "Teacher Consoles · Multi-Campus District Governance · Fleet Analytics · Automated NSX Distribution",
      purpose: "District-wide rollout across 50+ classrooms with central licensing and remote diagnostic management.",
    },
    {
      phase: "Phase 3",
      title: "Adaptive Ambient Intelligence",
      color: "calm",
      badge: "Next-Gen Horizon",
      accent: THEME_PALETTE.steel,
      bgTint: "bg-[#CCD0CF]/20 border-[#9BA8AB]",
      specs: "Philips Hue Architectural · Bio-Feedback Sensors · AI-Driven Pace Adaptation · Enterprise LMS Integration",
      purpose: "Real-time classroom sensor integration adjusting pacing dynamically based on cohort attention and thermal levels.",
    },
  ],
  checklistTitle: "Pilot Implementation Milestones",
  checklist: [
    "Classroom acoustic and illumination readiness survey",
    "Procurement & staging of Pilot Edge Hardware units",
    "Standardization of School-Specific Session JSON curricula",
    "Deployment of Secure Local Runtime Engine software",
    "Teacher enablement & 30-minute orientation workshop",
    "Execution of controlled 60-day classroom pilot",
    "Comprehensive Engagement & Cognitive Retention Report for Board",
  ],
};

// --- Institutional Engagement Section ---
export const ENGAGEMENT_CONTENT = {
  eyebrow: "INSTITUTIONAL PARTNERSHIP",
  title: "Partner with Neurosattva for your campus.",
  subtitle:
    "Prepared by RAAK Saphire for the Neurosattva Educational Initiative. We partner with progressive schools, universities, and education ministries to transform conventional classrooms into responsive learning environments.",
  partners: {
    preparedBy: "RAAK Saphire",
    preparedFor: "Neurosattva Educational Initiative",
    deploymentWindow: "Academic Year 2026 – 2027",
    pilotAvailability: "Limited Cohort Allocations",
  },
  engagementModel: [
    {
      step: "01",
      title: "Executive Briefing & Campus Audit",
      desc: "Our engineering and pedagogical specialists conduct a virtual or on-site evaluation of your classroom dimensions, lighting fixtures, and AV systems.",
    },
    {
      step: "02",
      title: "Turnkey Pilot Deployment",
      desc: "We supply pre-configured edge runtime units and circadian LED setups for 2–5 pilot classrooms with zero alteration to existing architecture.",
    },
    {
      step: "03",
      title: "Curriculum Alignment",
      desc: "Conversion of your institution's core STEM, humanities, or mindfulness lesson plans into standardized Neurosattva JSON timelines.",
    },
    {
      step: "04",
      title: "Data-Driven Pilot Evaluation",
      desc: "At the conclusion of the 60-day trial, school leadership receives an empirical audit comparing attention span, teacher fatigue, and comprehension.",
    },
  ],
  benefits: [
    "White-glove installation and zero-downtime integration",
    "Dedicated institutional technical account manager",
    "Direct consultation with RAAK Saphire solution architects",
    "Predictable campus-wide licensing with pilot credit rollover",
  ],
};

// --- Footer ---
export const FOOTER_CONTENT = {
  tagline: "Classrooms calibrated for the human mind.",
  disclaimer:
    "Scientific Note: Neuro-state environmental profiles (Gamma 40Hz, Alpha 10Hz, Theta 5Hz) are design parameters being calibrated in pilot schools for educational focus and sensory optimization; they do not constitute clinical or medical claims.",
  legal:
    "© 2026 Neurosattva Educational Initiative. Prepared in partnership with RAAK Saphire. All platform architectures, Session JSON schemas, and sensory delivery mechanics are protected intellectual property.",
};
