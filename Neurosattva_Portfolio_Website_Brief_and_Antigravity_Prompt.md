# Neurosattva Portfolio Website: Brief + Antigravity Prompt

Source: *Neurosattva Immersive Learning Platform Proposal V1* (prepared by RAAK Saphire for the Neurosattva Educational Initiative).

---

# PART 1: THE BRIEF (read this first)

## 1.1 Concept in one line
**The website behaves like the product.** The proposal's core idea is a classroom that shifts between three neuro-states (Focus, Creative, Calm) by changing light colour temperature, sound and pacing. So the site slowly shifts its own ambience (cool daylight → neutral → warm glow) as the visitor scrolls, and the visitor can switch the ambience manually. The site demonstrates the idea instead of only describing it.

## 1.2 Vibe
Calm, airy, breathable. Pale mist backgrounds, soft pastel gradients, generous whitespace, slow movement, rounded shapes, thin lines. Nothing sharp, nothing loud, no dark mode, no neon. Think "spa meets research lab meets Scandinavian classroom".

## 1.3 Sitemap (single-page, 14 sections)

| # | Section | Purpose |
|---|---------|---------|
| 0 | Navbar + Ambience switcher | Navigation, plus switch Focus / Creative / Calm |
| 1 | Hero | What it is, in 5 seconds |
| 2 | The Idea ("Not an LMS") | Positioning against a traditional LMS |
| 3 | Five Layers | The platform's building blocks |
| 4 | Neuro-State Profiles | Focus / Creative / Calm, interactive |
| 5 | Synchronised Session Demo | Animated timeline: video + audio + light |
| 6 | Who Uses It (Roles) | Super Admin, Content Creator, Teacher, Student |
| 7 | Architecture | Cloud + local classroom runtime diagram |
| 8 | Classroom Hardware | Pilot / Premium / Demo-only tiers (no prices) |
| 9 | Session JSON | The configuration-driven timeline, with a code viewer |
| 10 | Teacher Workflow + Distribution Flow | 6-step teacher flow and 7-step content pipeline |
| 11 | Security & Licensing | Device registration, encrypted packages, offline policy, telemetry |
| 12 | Roadmap | 3 deployment phases and next steps |
| 13 | My Contribution | Personal portfolio section (fill in your role) |
| 14 | Footer / Contact | Links, disclaimer |

## 1.4 Colour palette ("Morning Mist")

**Base**

| Token | Hex | Use |
|-------|-----|-----|
| `--mist` | `#F7FAF9` | Page background |
| `--cloud` | `#EEF5F3` | Alternate section background |
| `--porcelain` | `#FFFFFF` | Cards (at 70% opacity, with blur) |
| `--ink` | `#24343B` | Headings and main text (soft slate, never pure black) |
| `--ink-soft` | `#5B6E76` | Body copy, captions |
| `--line` | `#DCE7E4` | Hairline borders |

**Brand accents**

| Token | Hex | Use |
|-------|-----|-----|
| `--sage` | `#A9CFC0` | Primary soft accent, tags, blobs |
| `--sage-deep` | `#3E7C7B` | Buttons, links, key icons (passes contrast on light backgrounds) |
| `--lavender` | `#D9D3F0` | Secondary blobs, hover glows |
| `--sky` | `#CFE6F2` | Cool highlights |
| `--sand` | `#F9E8D8` | Warm highlights |

**Neuro-state ambience sets** (these swap the whole site's tint when the visitor changes ambience)

| State | Mirrors | Background wash | Accent | Glow blob |
|-------|---------|-----------------|--------|-----------|
| Focus / Alert | 6500K cool daylight | `#EEF6FC` | `#4F8FC0` | `#BFDDF3` |
| Creative / Active | 4000K neutral white | `#F4F8EC` | `#6FA77F` | `#D5E8C8` |
| Calm / Deep Absorb | 2700K warm | `#FDF3E8` | `#D98F5E` | `#F8D9BC` |

**Gradients**
- Hero wash: `linear-gradient(160deg, #F7FAF9 0%, #E6F1EE 45%, #E9E5F7 100%)`
- Page-long scroll drift: top `#EEF6FC` (cool), middle `#F4F8EC`, bottom `#FDF3E8` (warm). It mirrors the 6500K → 4000K → 2700K progression.

**Rules:** no black, no saturated colours, no gradients harsher than the ones above. Shadows are very soft: `0 10px 40px rgba(62,124,123,0.08)`.

## 1.5 Typography
- **Headings:** *Fraunces* (soft serif, light weights 300 to 500), a warm and human feel.
- **Body / UI:** *Manrope* (400, 500, 600), clean and friendly.
- **Code (JSON viewer):** *JetBrains Mono*.
- Scale: Hero 64 to 80px desktop and 40px mobile; H2 44px; body 17 to 18px; line-height 1.7.

## 1.6 Motion principles
- Everything eases slowly: `cubic-bezier(0.22, 1, 0.36, 1)`, 700 to 1000ms.
- Smooth, inertia-based scrolling (Lenis).
- Slow-drifting background blobs (30 to 50 second loops).
- Sections fade up gently as they enter.
- **Safety rule:** nothing flashes or pulses faster than 1Hz on screen. The 40Hz / 10Hz / 5Hz "pulse modulation" values are shown as numbers and as slow, visual breathing animations only, never at real frequency.
- Respect `prefers-reduced-motion`.

## 1.7 Content decisions I made for you
- **No INR prices on the public site.** The proposal is a client document, and per-classroom costs and cloud OPEX are commercially sensitive. Hardware is shown as tiers (Pilot, Premium, Demo-only).
- **A neuro-science disclaimer in the footer.** The profiles (40Hz gamma, theta and so on) are design parameters being calibrated in the pilot, not medical or guaranteed-outcome claims.
- **The "My Contribution" section is yours to fill.** The proposal doesn't say what your role was, so the section has clearly marked fields.

---

# PART 2: THE ANTIGRAVITY PROMPT (copy everything inside the box below)

````text
You are a senior front-end engineer and visual designer. Build a polished, single-page PORTFOLIO WEBSITE for a project called "Neurosattva Immersive Learning Platform". It must feel calm, airy, soothing and very smooth, like the product itself. Build it end to end, run it, and check it in the browser before you finish.

==================================================
1. PROJECT CONTEXT
==================================================
Neurosattva is NOT a traditional LMS. It is a synchronised neuro-learning delivery platform that combines educational video, neuro-acoustic audio, smart lighting and timestamp-driven transitions, executed by a local classroom runtime and managed from a cloud platform. It creates classroom environments for three neuro-states: Focus/Alert, Creative/Active Learning, Calm/Deep Absorption.

Core concept of the website: THE WEBSITE BEHAVES LIKE THE PRODUCT. The page's ambience (tint, glow, accent) shifts from cool daylight to neutral to warm as the user scrolls, and the user can also switch ambience manually. The site should demonstrate the idea, not just describe it.

==================================================
2. TECH STACK
==================================================
- Vite + React 18 + TypeScript
- Tailwind CSS (theme extended with the tokens below) + CSS variables for the ambience system
- Framer Motion for animation
- Lenis for smooth inertial scrolling
- lucide-react for icons (thin 1.5px stroke style)
- Fonts via Google Fonts: Fraunces (300, 400, 500), Manrope (400, 500, 600), JetBrains Mono (400)
- No backend. Static site, deployable to Vercel or Netlify. Contact form can be a mailto: link.
- Folder structure: src/components/sections/*, src/components/ui/*, src/hooks/*, src/data/content.ts (ALL copy lives here), src/styles/tokens.css

==================================================
3. DESIGN SYSTEM
==================================================
VIBE: calm, airy, breathable. Pale mist backgrounds, soft pastel gradients, generous whitespace (sections have 120 to 160px vertical padding on desktop), rounded corners (24px cards, 999px pills), thin 1px lines, glassy cards. Nothing sharp, loud, dark or neon. LIGHT THEME ONLY.

COLOUR TOKENS (define as CSS variables and Tailwind colors):
--mist #F7FAF9 (page bg) | --cloud #EEF5F3 (alt section bg) | --porcelain #FFFFFF (cards at 70% opacity + backdrop-blur 16px)
--ink #24343B (headings/text, never pure black) | --ink-soft #5B6E76 (body/captions) | --line #DCE7E4 (borders)
--sage #A9CFC0 | --sage-deep #3E7C7B (buttons/links/icons) | --lavender #D9D3F0 | --sky #CFE6F2 | --sand #F9E8D8
Shadow: 0 10px 40px rgba(62,124,123,0.08)

AMBIENCE SETS (CSS variables --amb-wash, --amb-accent, --amb-glow; transition all of them over 1200ms ease):
- focus:    wash #EEF6FC, accent #4F8FC0, glow #BFDDF3  (mirrors 6500K cool daylight)
- creative: wash #F4F8EC, accent #6FA77F, glow #D5E8C8  (mirrors 4000K neutral white)
- calm:     wash #FDF3E8, accent #D98F5E, glow #F8D9BC  (mirrors 2700K warm)
Default on load: "focus" at the top. While the user scrolls, interpolate smoothly top to bottom: focus, then creative, then calm (scroll-linked), unless the user has manually picked an ambience with the navbar switcher (then lock to their pick until they click "Auto").

BACKGROUND: 3 large blurred gradient blobs (using --amb-glow, --lavender, --sage) slowly drifting (CSS keyframes, 30 to 50s loops, transform-only for performance) behind everything, fixed position, opacity 0.5. Add a very subtle paper-grain noise overlay at 3% opacity.

TYPOGRAPHY: Headings in Fraunces (light/regular, tight tracking -0.01em). Body and UI in Manrope. Code in JetBrains Mono. Hero h1: 80px desktop, 40px mobile. H2: 44px. Body: 17 to 18px, line-height 1.7. Small uppercase eyebrow labels: 12px, tracking 0.14em, color --sage-deep.

MOTION: easing cubic-bezier(0.22, 1, 0.36, 1), duration 700 to 1000ms. Sections and cards fade-up (translateY 24px to 0, opacity 0 to 1) once on entering the viewport, staggered by 80ms. Buttons: soft lift and glow on hover. Smooth inertial scrolling via Lenis. SAFETY: nothing may flash or pulse faster than 1Hz anywhere on screen (photosensitivity). Pulse frequencies (40Hz, 8 to 12Hz, 4 to 7Hz) are shown as text and as slow "breathing" animations only (3 to 6s cycles). Honour prefers-reduced-motion by disabling blob drift, parallax and stagger, keeping simple fades.

ACCESSIBILITY AND QUALITY: WCAG AA contrast for all text (use --ink / --sage-deep on light backgrounds, never pastel text), visible focus rings (2px --sage-deep), semantic landmarks, alt text/aria-labels, keyboard-operable tabs/steppers. Fully responsive (360px to 1920px), 16px side gutters on mobile, no horizontal scroll. Lighthouse targets: Performance 90+, Accessibility 95+. Lazy-load anything heavy. All animations are transform/opacity only.

==================================================
4. PAGE SECTIONS AND EXACT COPY
==================================================
(Put all of this in src/data/content.ts and render from it.)

--- 4.0 NAVBAR (sticky, glass, blur) ---
Left: wordmark "Neurosattva" in Fraunces with a small soft circle logomark that glows in the current --amb-accent.
Links (smooth-scroll): Idea · Experience · Architecture · Hardware · Workflow · Security · Roadmap · My Role
Right: an "Ambience" pill switcher with three dots: Focus / Creative / Calm, plus a small "Auto" toggle. Collapses to a hamburger drawer on mobile (the ambience switcher stays visible).

--- 4.1 HERO ---
Eyebrow: IMMERSIVE LEARNING PLATFORM
H1: "Classrooms that feel the lesson."
Sub: "Neurosattva synchronises video, neuro-acoustic sound and smart lighting, second by second, so every classroom can shift into the right state to focus, create or calmly absorb."
Buttons: [Experience a session] (scrolls to 4.5, primary) · [Read the architecture] (scrolls to 4.7, ghost)
Visual: a large soft circular "light orb" in the centre that slowly breathes (scale 1 to 1.06, 6s) and changes colour with the ambience. Around it, three small floating glass chips orbiting very slowly: "Video", "Audio", "Light". Beneath: a thin row of 4 stat pills: "3 neuro-states" · "5 platform layers" · "4 user roles" · "Works offline".
Scroll cue: a small animated chevron.

--- 4.2 THE IDEA ---
Eyebrow: THE IDEA
H2: "Not another LMS."
Intro: "A traditional LMS hosts content. Neurosattva shapes the room the content is learned in."
Two-column glass comparison card:
 Left "Traditional LMS": Video playback · Assignments · Quizzes · Content hosting
 Right "Neurosattva" (highlighted with sage border): Synchronised sensory orchestration · Neuro-state classroom environments · Audio-light synchronisation · Timestamp-driven immersive learning · Local classroom runtime execution · Secure experience delivery platform

--- 4.3 FIVE LAYERS ---
Eyebrow: THE PLATFORM
H2: "Five layers, one seamless experience."
Five cards (icon + title + one line), laid out in a gentle staggered grid:
 1. Cloud LMS Platform: "User management, content management, licensing and analytics."
 2. Local Runtime Engine: "Executes the synchronised classroom experience locally, with no lag."
 3. Audio Orchestration Engine: "Controls music, modulation, volume and transitions."
 4. Smart Lighting Engine: "Controls lighting scenes and keeps them in sync."
 5. Session Timeline Engine: "Synchronises video, audio and lighting using timestamps."

--- 4.4 NEURO-STATE PROFILES (interactive) ---
Eyebrow: NEURO-STATES
H2: "Three states. One room that adapts."
Intro: "Each profile defines how the light, sound and pulse should feel. Choose one and watch the whole page change with it."
Three large selectable tabs. Selecting a tab updates the global ambience AND shows a detail panel with an animated "light preview" circle (colour matches the temperature) and parameter rows:
 FOCUS / ALERT (High Cognition): Lighting 6500K Cool Daylight · Brightness 500 lux · Audio: instructional speech range + Gamma pulse · Pulse modulation 40Hz. Tagline: "Sharp, bright, ready to learn."
 CREATIVE / ACTIVE LEARNING: Lighting 4000K Neutral White · Brightness 350 lux · Audio: nature-based ambience + Alpha pulse · Pulse modulation 8 to 12Hz. Tagline: "Open, curious, hands-on."
 CALM / DEEP ABSORB: Lighting 2700K Warm · Brightness 150 lux · Audio: pink noise ambience + Theta pulse · Pulse modulation 4 to 7Hz. Tagline: "Soft, settled, deeply present."
Small footnote: "Profiles shown are examples; the platform supports additional neuro-state environments."
Below the panel, a thin horizontal colour-temperature bar (6500K to 2700K) with a marker that slides to the selected state.

--- 4.5 SYNCHRONISED SESSION DEMO (hero interaction of the site) ---
Eyebrow: THE EXPERIENCE
H2: "One timeline. Three senses in sync."
Intro: "Press play to watch a 15-minute lesson compressed into 30 seconds."
Component: a glass "player" card with three lanes (Video, Audio, Light) and a shared progress timeline divided into 3 scenes. A Play/Pause button, a scrubber, and a "Restart" button. Real data:
 Scene 1, 0 to 5 min: Video "Intro" · Audio "Focus audio" · Light "6500K Cool White" (switches ambience to focus)
 Scene 2, 6 to 10 min: Video "Activity" · Audio "Nature ambience" · Light "4000K Neutral" (switches to creative)
 Scene 3, 11 to 15 min: Video "Reflection" · Audio "Pink noise" · Light "2700K Warm" (switches to calm)
While playing: the active lane items highlight, the video lane shows a calm abstract gradient "frame" that changes per scene, the audio lane shows a slow-moving soft waveform (amplitude shifts per scene, slow animation), the light lane shows a glowing bar that smoothly changes colour, AND the whole page ambience transitions with the scene. Display the current clock (e.g. "07:30 / 15:00"). NO real audio by default. Optional: a small "Sound" toggle (OFF by default) that plays a very quiet WebAudio-generated pink noise. Never autoplay sound.

--- 4.6 WHO USES IT (ROLES) ---
Eyebrow: THE PEOPLE
H2: "Built for four kinds of people."
Four tabbed/hover cards, each with an icon and a bullet list:
 Super Admin: School onboarding · Device management · Licensing management · Subscription management · Analytics monitoring · Platform configuration
 Content Creator: Upload educational videos · Upload audio assets (multiple files per session) · Configure lighting and neuro-state transitions · Configure timestamp scenes (video, audio and lighting synchronised) · Create session JSON timelines
 Teacher / Tutor: Login to dashboard · Select assigned sessions · Prepare classroom sessions · Start / Pause / Stop sessions · Monitor classroom runtime status
 Students: Participate in the immersive classroom experience · Consume synchronised learning sessions

--- 4.7 ARCHITECTURE ---
Eyebrow: ARCHITECTURE
H2: "Cloud to manage. Local to perform."
Intro: "The cloud handles people, content, licences and insight. The classroom runtime handles the experience itself, so playback never depends on the internet."
Build an INLINE SVG diagram (responsive, softly coloured, animated dashed lines showing data flow, slow 4s loops):
 LEFT block "Cloud Platform (Google Cloud Platform)": Authentication Service · Content Storage · Device Registry · Licensing Engine · Analytics Engine · API Layer · Admin Dashboard
 RIGHT block "Classroom Runtime (Raspberry Pi / Mini PC)": Video playback · Audio playback & modulation · Smart light control · Timestamp synchronisation · Session telemetry · Offline execution
 Arrows: Cloud to Runtime "Encrypted session package"; Runtime to Cloud "Telemetry & analytics"
 Runtime then connects to three small icons: Speaker, LED lighting, Display.
Below, four benefit chips: No playback latency · Stable synchronisation · Offline classroom execution · Better hardware integration · Reduced internet dependency

--- 4.8 CLASSROOM HARDWARE ---
Eyebrow: THE ROOM
H2: "From pilot classroom to premium immersive space."
Intro: "Hardware is modular, so schools start lean and scale up."
Three-tier card layout (NO PRICES anywhere on the site):
 PILOT / CORE (badge "Recommended"): Lighting: ESP32 + addressable LED strip (full programmability, low-latency sync, custom pulse effects, no third-party cloud dependency) · Runtime: Raspberry Pi (low cost, compact, auto-start, low power) · Audio: Edifier R1280DBs active speakers (clear speech, strong coverage, Bluetooth + wired)
 PREMIUM: Lighting: Philips Hue Bridge + Hue lights (premium ambience, smooth transitions, CRI 90+) · Runtime: Mini PC (higher stability, better multimedia, easier enterprise management) · Audio: Yamaha HS5 / Kali Audio LP-6 for immersive audio rooms
 DEMO / EVENT: Large demo and event rooms: JBL EON One Compact · Premium lighting for investor demos and wellness rooms
Small honest note under the cards: "Consumer smart WiFi bulbs (e.g. Wipro, Tuya) are suitable for basic demos only: higher latency and cloud dependency make them unsuitable for the core product."

--- 4.9 SESSION JSON ---
Eyebrow: CONFIGURATION-DRIVEN
H2: "Sessions are data, not code."
Intro: "Content teams describe an entire immersive session in a single JSON timeline. No code changes, endlessly reusable."
Left: a code viewer card (JetBrains Mono, soft pastel syntax colours on a --cloud background, copy button, light line highlight on hover) showing exactly:
{
  "session_id": "GRADE2_FOCUS_001",
  "video": "lesson.mp4",
  "scenes": [
    {
      "start_time": 0,
      "light": {
        "temperature_k": 6500,
        "lux": 500
      },
      "audio": {
        "file": "focus.mp3",
        "pulse_hz": 40
      }
    }
  ]
}
Right: 5 benefit rows with check icons: Content team can configure sessions · No code changes required · Easy scaling · Reusable runtime engine · Standardised orchestration format. Hovering a JSON key (temperature_k, lux, file, pulse_hz) highlights a matching plain-English tooltip.

--- 4.10 WORKFLOWS ---
Eyebrow: HOW IT RUNS
H2: "From upload to classroom in a click."
Two sub-blocks:
 A) "The teacher's flow", a horizontal stepper (vertical on mobile) with 6 steps: 1 Login to platform → 2 Select session → 3 Click "Prepare Session" → 4 Classroom device downloads package → 5 Click "Start Session" → 6 Session runs automatically. End with a calm green "Session running" pill.
 B) "The content pipeline", 7 steps as a flowing vertical timeline (alternating left/right on desktop) with a line that draws itself on scroll:
  1 Content Upload (video, audio assets, session JSON, lighting configuration)
  2 Session Package Creation (assets become a secure encrypted package, e.g. NS_PACKAGE_001.nsx)
  3 Device Assignment (School → Classroom → Device ID)
  4 Session Preparation (teacher selects a session; cloud instructs the device to download)
  5 Local Download (video, audio, JSON timelines for offline execution)
  6 Session Playback (START SESSION; the device orchestrates video, audio, lights and neuro-state transitions without internet)
  7 Telemetry Upload (usage logs, session completion, device health, analytics)

--- 4.11 SECURITY & LICENSING ---
Eyebrow: TRUST
H2: "Protected by design."
Four glass cards with icons:
 Device Registration: each classroom device gets a Device ID, authentication token, school mapping and licence mapping. Only authorised devices run content.
 Encrypted Packages: session packages (.nsx) are encrypted and cannot be played outside the authorised runtime.
 Offline Policy: sessions are playable locally for 7 days; devices reconnect periodically to refresh the licence.
 Telemetry: tracked events include session started, session completed, unauthorised attempt, device offline, LED failure, audio failure.
Below: "Licensing model" with three pills: Classroom Licence (1 runtime device) · School Licence (multiple classrooms) · Annual Subscription (yearly content access). Caption: "Initial model: unlimited playback per registered classroom device."

--- 4.12 ROADMAP ---
Eyebrow: ROADMAP
H2: "Grow at the pace of the classroom."
Three phases as a horizontal flowing path (vertical on mobile), each with a soft colour (focus blue, creative green, calm warm):
 Phase 1, Pilot Deployment: Raspberry Pi · ESP32 + LED strip · Edifier speaker · Cloud LMS MVP. Purpose: pilot schools, functional validation, user testing, neuro-state calibration.
 Phase 2, Scaled Deployment: Teacher dashboards · Multi-school management · Session analytics · Secure package distribution · Licensing engine.
 Phase 3, Premium Immersive Classrooms: Philips Hue integration · Advanced orchestration · AI-driven adaptive sessions · Analytics dashboards · Enterprise deployment.
Then a "Next steps" checklist (7 items, check-circle icons, animate in): Finalise pilot hardware architecture · Build teacher dashboard MVP · Standardise Session JSON format · Build local runtime player · Configure secure device registration · Conduct pilot classroom testing · Measure synchronisation and engagement metrics.

--- 4.13 MY CONTRIBUTION (personal portfolio section; keep these as clearly editable constants at the top of content.ts) ---
Eyebrow: MY ROLE
H2: "What I built and learned."
Fields to expose as constants (use sensible placeholder text that is obviously editable, e.g. "Add your role here"): MY_ROLE, MY_NAME, TIMEFRAME, TEAM (default "RAAK Saphire"), CLIENT (default "Neurosattva Educational Initiative"), 3 to 5 contribution bullets, TECH_USED tags, and a "Key takeaway" pull-quote. Layout: left column with a project facts card (Role, Client, Team, Timeframe), right column with contribution bullets and tech tags.

--- 4.14 FOOTER ---
Soft warm-tinted footer. Closing line in Fraunces: "Learning, in the right state." Links: Back to top · email (mailto, editable constant) · LinkedIn · GitHub (editable constants). Small print: "Neuro-state profiles shown are design parameters under pilot calibration and are not medical claims." and "Project by RAAK Saphire for the Neurosattva Educational Initiative."

==================================================
5. COMPONENT AND BEHAVIOUR REQUIREMENTS
==================================================
- A global AmbienceProvider (React context) holds { mode: 'auto' | 'focus' | 'creative' | 'calm', active: 'focus' | 'creative' | 'calm' } and writes --amb-* CSS variables on <html>. The session demo and the neuro-state tabs call setAmbience(). In auto mode, a scroll-linked hook derives the active state from scroll progress.
- Cards: glassmorphism (white 70%, blur 16px, 1px --line border, 24px radius, soft shadow). Hover: translateY(-4px) and a slightly stronger glow, 400ms.
- Section dividers: soft curved SVG waves or fading gradients, never hard lines.
- Buttons: pill shaped, primary = --sage-deep background with white text; ghost = transparent with a 1px --sage-deep border.
- Include a tasteful loading intro (under 1.2s): the light orb fades in and expands into the hero. Skippable and disabled for reduced-motion.
- Include SEO meta (title "Neurosattva | Immersive Learning Platform", description, Open Graph tags), a favicon (a soft circle), and a theme-color of #F7FAF9.
- Keep bundle small: code-split the session demo and architecture SVG.

==================================================
6. DO NOT
==================================================
- Do not use dark mode, black backgrounds, neon, saturated colours, harsh shadows, or stock-photo clichés.
- Do not show any prices or cost figures from the source proposal.
- Do not make anything flash or strobe; no element may animate faster than 1Hz.
- Do not autoplay audio.
- Do not invent features, metrics or testimonials that are not in the content above.
- Do not use lorem ipsum anywhere (the only intentional placeholders are the My Contribution fields).

==================================================
7. ACCEPTANCE CHECKLIST (verify in the browser before finishing)
==================================================
[ ] All 14 sections render with the exact copy above, driven from content.ts
[ ] Ambience shifts smoothly on scroll, and the manual switcher and Auto toggle work
[ ] The session demo plays through all 3 scenes and changes the page ambience with each scene
[ ] Architecture SVG, JSON viewer (with copy button), steppers and the roadmap all work with the keyboard
[ ] No horizontal scroll at 360px, 768px, 1440px
[ ] prefers-reduced-motion respected
[ ] No console errors; Lighthouse Performance 90+ and Accessibility 95+
[ ] Looks calm: lots of whitespace, soft colours, slow motion

Start by scaffolding the project, then build the design tokens and AmbienceProvider, then sections in order. Show me the running dev server when done.
````

---

# PART 3: TIPS FOR USING IT IN ANTIGRAVITY

1. **Paste the whole prompt in one go** in Planning mode, review the plan it proposes, then let it execute. It's long on purpose, because the agent has no other context.
2. **If the result drifts or the output is too big**, build in two passes. Pass 1 covers sections 1 to 6 plus the design system. Pass 2 covers sections 7 to 14. Tell it "continue with sections 7 to 14, keeping the same design system".
3. **Polish prompts you can send afterwards:**
   - "Make all animations 20% slower and softer."
   - "Reduce saturation of the accent colours by 10%."
   - "Increase whitespace between sections."
   - "Add subtle parallax to the hero orb."
4. **Before publishing:** fill the My Contribution fields, add your email/LinkedIn/GitHub, and confirm with your client or RAAK Saphire that you may show this project publicly, since the proposal is a client document.
