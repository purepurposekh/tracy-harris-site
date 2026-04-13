# Design System: Tracy Harris Co — v4 (Female Leadership)

## 1. Brand Position & Atmosphere

Tracy Harris is a female powerhouse. 10+ years, multi-seven figures, 500+ women mentored, 4-day work weeks. She sits beside Tony Robbins, Mel Robbins, Rachel Hollis in aspiration, but with warmth, grace, and a faith-informed foundation they don't carry.

**The reference DNA:** Tony Robbins' website, adapted for female leadership. The key patterns extracted: 70/30 dark-to-light section ratio, massive headlines with tight tracking, font weight 500 (medium) everywhere, monospace uppercase labels for utilitarian premium feel, opacity-based text hierarchy, 500ms transitions (slow = luxury), pill buttons with wide tracking, full-bleed photography with gradient overlays, portrait-ratio event/program cards, stats/numbers displayed prominently, horizontal carousels for programs.

**The feeling:** Bold authority with feminine warmth. Deep teal and cream. Not black, teal. Massive serif headlines against quiet sans-serif body. Stats and impact numbers command the page. Photography fades into teal backgrounds through gradient overlays. It should feel like walking into a high-end leadership event, not browsing a website.

**This is NOT:**
- Soft or pastel (dark teal sections create power)
- A SaaS landing page or tech startup
- A generic online coach's template
- Light and airy (teal dominates, cream breathes)
- Pure black or harsh (teal is deep but warm)

## 2. Colour Palette

### Foundation (The Power)
```css
:root {
  --deep-teal:   #233635;   /* Primary dark bg. Deep teal. Replaces black everywhere. */
  --mid-teal:    #324b4a;   /* Card backgrounds on dark, hover states, secondary dark. */
  --canvas:      #f6f4f1;   /* Warm cream. Light section backgrounds. Text on dark surfaces. */
  --charcoal:    #313131;   /* Body text on light surfaces. */
}
```

### Brand Accent (The Single Thread)
```css
:root {
  --sage:        #6e8e77;   /* THE accent colour. Buttons, CTAs, labels. Appears on every section. */
  --sage-dark:   #5a7a63;   /* Hover/active state for sage elements. */
  --sage-light:  #8aab92;   /* Sage on dark backgrounds. Light variant for contrast. */
}
```

### Text (Opacity-Based Hierarchy)
```css
:root {
  /* On dark surfaces: canvas cream at varying opacities */
  --text-on-dark:        rgba(246, 244, 241, 1.0);   /* Primary text on dark: full cream */
  --text-on-dark-muted:  rgba(246, 244, 241, 0.7);   /* Secondary/body text on dark */
  --text-on-dark-ghost:  rgba(246, 244, 241, 0.4);   /* Tertiary/decorative on dark */

  /* On light surfaces: charcoal at varying opacities */
  --text-on-light:       #313131;                      /* Primary text on light: charcoal */
  --text-on-light-muted: rgba(49, 49, 49, 0.6);       /* Secondary text on light */
  --text-on-light-ghost: rgba(49, 49, 49, 0.3);       /* Tertiary/decorative on light */
}
```

### Structural
```css
:root {
  --border-dark:  rgba(246, 244, 241, 0.12);  /* Dividers on dark surfaces */
  --border-light: rgba(49, 49, 49, 0.12);     /* Dividers on light surfaces */
}
```

### Colour Rhythm (Critical)

The page is 70% dark, 30% light. Dark teal dominates. Canvas cream sections are breathing room between teal power sections.

```
1.  Nav:                --deep-teal (fixed, transparent)
2.  Hero:               --deep-teal (full-bleed photo, gradient overlay)
3.  Program Carousel:   --deep-teal (horizontal scroll, portrait cards)
4.  Pillars/Framework:  --canvas    (light break, the exhale)
5.  Testimonial:        --deep-teal (full-bleed photo, gradient overlay)
6.  About/Meet Tracy:   --deep-teal (big stats, asymmetric)
7.  Results:            --canvas    (impact numbers, the second exhale)
8.  Coaching Detail:    --deep-teal (split layout, video)
9.  Podcast:            --canvas    (light section, episode list)
10. Footer:             --deep-teal (multi-column, deepest anchor)
```

7 dark sections, 3 light. The sage accent (`--sage`) appears on EVERY section as labels, buttons, or accents. It is the single thread tying everything together.

### Rules
- **At least 7 of 10 sections must use dark teal backgrounds.** This is the Tony Robbins DNA.
- **One accent colour only.** Sage green. No second accent. No gold. No coral.
- **No pure black.** Deep teal (#233635) replaces #000 and #1a1a1a everywhere.
- **No gradients for section backgrounds.** Gradients are ONLY for image overlays.
- **Opacity creates hierarchy, not colour changes.** On dark surfaces, all text is cream at different opacities. On light surfaces, all text is charcoal at different opacities.
- Hero/testimonial images use gradient overlay from bottom: `linear-gradient(to top, #233635 0%, transparent 60%)`.

## 3. Typography

Three fonts. Instrument Serif for display, DM Sans for body, DM Mono for labels.

### Font Loading
```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Type Scale

| Role | Desktop | Mobile | Font | Weight | Letter-spacing | Line-height | Transform |
|------|---------|--------|------|--------|----------------|-------------|-----------|
| Hero Display | 90px | 44px | Instrument Serif | 400 | -0.03em | 1.0 | none |
| Section Title | 64px | 34px | Instrument Serif | 400 | -0.02em | 1.05 | none |
| Card Title | 28px | 22px | Instrument Serif | 400 | -0.01em | 1.2 | none |
| Quote | 48px | 28px | Instrument Serif | 400 italic | -0.02em | 1.15 | none |
| Stat Number | 72px | 44px | Instrument Serif | 400 | -0.03em | 1.0 | none |
| Monospace Label | 12px | 11px | DM Mono | 500 | 0.15em | 1.5 | uppercase |
| Body | 16px | 15px | DM Sans | 500 | 0 | 1.75 | none |
| Body Lead | 18px | 16px | DM Sans | 500 | 0 | 1.7 | none |
| Nav Links | 12px | 13px | DM Sans | 500 | 0.10em | 1.0 | uppercase |
| Button Text | 13px | 13px | DM Sans | 500 | 0.10em | 1.0 | uppercase |
| Caption / Meta | 13px | 12px | DM Sans | 500 | 0.03em | 1.5 | none |

### Typography Principles

1. **Tight tracking on big type, wide tracking on small type.** Hero and section titles use negative letter-spacing (tracking-tighter). Labels and buttons use wide positive tracking. This is the Tony Robbins DNA.
2. **Weight 500 (medium) everywhere.** Body text, nav links, buttons, labels. All weight 500. Never bold 700. The only exception is Instrument Serif headlines at their native 400.
3. **Instrument Serif does all the emotional heavy lifting.** Headlines, quotes, stats. Every moment you want someone to FEEL something.
4. **DM Mono is the utilitarian premium signal.** Monospace uppercase labels above sections. This is what separates v4 from v3. It reads like an event programme or gallery placard.
5. **DM Sans is the workhorse.** Body text, navigation, buttons. Weight 500, invisible by design.
6. **One italic word per headline.** Instrument Serif italic on one key word for editorial warmth. Never italic the whole headline.
7. **Stats and numbers are HUGE.** 72px Instrument Serif. Impact numbers command attention. "10+ Years", "500+ Women", "$7M+ Revenue".

## 4. Buttons

All buttons are pill-shaped. All transitions are 500ms.

### Primary (Sage Pill)
```css
.btn-primary {
  background: var(--sage);
  color: var(--canvas);
  font: 500 13px/1 'DM Sans', sans-serif;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  padding: 18px 48px;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-primary:hover {
  background: var(--sage-dark);
  transform: translateY(-2px);
}
```

### Ghost / Outline (On Dark Backgrounds)
```css
.btn-ghost {
  background: transparent;
  color: var(--text-on-dark);
  padding: 17px 46px;
  border-radius: 100px;
  border: 1.5px solid rgba(246, 244, 241, 0.3);
  font: 500 13px/1 'DM Sans', sans-serif;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(4px);
}
.btn-ghost:hover {
  border-color: var(--sage);
  color: var(--sage-light);
  background: rgba(110, 142, 119, 0.1);
}
```

### Glassmorphism (Over Photography)
```css
.btn-glass {
  background: rgba(246, 244, 241, 0.1);
  color: var(--canvas);
  padding: 17px 46px;
  border-radius: 100px;
  border: 1px solid rgba(246, 244, 241, 0.2);
  font: 500 13px/1 'DM Sans', sans-serif;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-glass:hover {
  background: rgba(246, 244, 241, 0.2);
  border-color: rgba(246, 244, 241, 0.4);
}
```

### Outline on Light (On Canvas Backgrounds)
```css
.btn-outline-dark {
  background: transparent;
  color: var(--charcoal);
  padding: 17px 46px;
  border-radius: 100px;
  border: 1.5px solid rgba(49, 49, 49, 0.3);
  font: 500 13px/1 'DM Sans', sans-serif;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-outline-dark:hover {
  border-color: var(--sage);
  color: var(--sage);
}
```

### Rules
- Minimum touch target: 48px height on mobile.
- One primary CTA per section maximum.
- ALL transitions are 500ms. Slow = luxury. This is non-negotiable.
- Button text is always uppercase, always widely tracked (0.10em).
- Ghost/glass buttons only over photography or dark sections.
- Pill shape always. border-radius: 100px. No exceptions.

## 5. Layout & Spacing

### Content Width
```css
--width-narrow:   680px;    /* Text-only sections, quotes */
--width-standard: 1080px;   /* Most content sections */
--width-wide:     1280px;   /* Hero, full layouts, carousel */
```

### Section Spacing
```css
--section-pad: clamp(80px, 14vw, 160px);  /* Vertical section padding */
```

Sections should be TALL. 700-1000px+ on desktop. If content doesn't fill the height, that's fine. The breathing room IS the design.

### Grid Principles
- **Asymmetric splits: 55/45 or 60/40.** Never 50/50.
- **Full-bleed imagery with gradient overlays.** Images extend to section edges, teal gradient fades content into background.
- **Horizontal scrollable carousels for programs/events.** Portrait-ratio cards (3:4 aspect ratio) in a horizontal strip.
- **Single column centred for text-heavy sections.** Max-width 680px.
- **Stats in prominent horizontal rows.** Big numbers with labels below.
- Gap between columns: 48-80px.

### Spacing Scale
```css
--space-xs:  8px;
--space-sm:  16px;
--space-md:  24px;
--space-lg:  48px;
--space-xl:  80px;
--space-2xl: 120px;
--space-3xl: 160px;
```

## 6. Components

### Navigation
- Fixed, transparent over hero, transitions to solid deep teal on scroll.
- Logo: "TRACY HARRIS" in Instrument Serif uppercase, widely tracked.
- Links: DM Sans 12px, weight 500, uppercase, 0.10em tracking. Cream on dark.
- CTA: Sage pill button, right-aligned.
- Mobile: hamburger icon, full-screen overlay on deep teal with centred Instrument Serif links.
- Hover: nav links transition to sage colour at 500ms.

### Hero Section
- Deep teal (#233635) background.
- Full-bleed portrait photo at `opacity: 0.75` with gradient overlay: `linear-gradient(to top, #233635 5%, transparent 60%)`.
- Monospace eyebrow: DM Mono 12px, 500, uppercase, 0.15em tracking, sage colour.
- Headline: Instrument Serif 90px, cream, tracking-tighter (-0.03em), one word italic.
- Subtext: DM Sans 500, 18px, cream at 70% opacity.
- Sage pill CTA + ghost button side by side.
- Stats bar at bottom of hero: "10+ Years . Multi-Seven Figures . 500+ Women Mentored" in DM Mono uppercase.

### Program Carousel
- Deep teal background.
- Monospace label above heading.
- Horizontal scrollable strip of portrait-ratio cards (3:4 aspect, ~300px wide x 400px tall).
- Each card: full-bleed image with gradient overlay from bottom, program name overlaid at bottom in Instrument Serif, monospace label for program type.
- Scroll arrows (left/right) in circular ghost buttons.
- Cards have 500ms hover: slight scale (1.03) and gradient lightens.
- No snap. Free horizontal scroll.

### Stats Bar / Impact Numbers
- Big numbers: Instrument Serif 72px, cream on dark / charcoal on light.
- Labels below: DM Mono 12px, uppercase, 0.15em tracking, sage.
- Arranged in horizontal row with generous spacing.
- On dark backgrounds, numbers at full opacity, labels at 0.7 opacity.
- Use these everywhere: hero bottom bar, about section, results section.

### Testimonial (Over Photography)
- Deep teal background with full-bleed photo at `opacity: 0.6-0.7`.
- Gradient overlay from edges.
- Large quote: Instrument Serif italic 48px, cream, centred.
- Attribution: DM Mono uppercase, sage.
- Circular avatar selectors at bottom (small circles, active has sage ring).
- Glassmorphism quote container optional.

### Section Labels (Monospace)
- DM Mono, 12px, weight 500, uppercase, 0.15em tracking.
- Sage (`--sage`) on all backgrounds.
- Always above the heading, 16px margin below.
- This replaces the DM Sans eyebrows from v3. The monospace label is the v4 signature.

### Image Treatment
```css
/* Full-bleed with gradient overlay */
.img-hero {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.75;
}
.img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, #233635 5%, transparent 60%);
}

/* Portrait cards with gradient */
.img-card {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
.img-card-overlay {
  position: absolute;
  inset: 0;
  border-radius: 8px;
  background: linear-gradient(to top, #233635 0%, transparent 50%);
}

/* On light backgrounds */
.img-light-section {
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 12px 16px 40px rgba(35, 54, 53, 0.12);
}
```

### Footer
- Deep teal (#233635) background.
- Multi-column layout: brand column, navigation columns, social links.
- Monospace labels for column headings.
- Links at 70% opacity cream, hover to sage.
- Trademark and Freedom Filled® notice at bottom.
- Thin border-top in border-dark.

## 7. Micro-Interactions

```css
/* Global transition: 500ms. Slow = luxury. */
--ease: cubic-bezier(0.4, 0, 0.2, 1);
--duration: 500ms;

/* Links: colour transition */
a { transition: color 500ms var(--ease); }

/* Cards: gentle scale on hover */
.card:hover {
  transform: scale(1.03);
  transition: transform 500ms var(--ease);
}

/* Scroll reveal: fade up on enter */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 700ms ease, transform 700ms ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stats counter: numbers count up on scroll into view */
/* Use JS IntersectionObserver to trigger count animation */

/* Carousel: smooth horizontal scroll */
.carousel {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

/* Image hover: gradient lightens */
.card-img-wrapper:hover .img-card-overlay {
  background: linear-gradient(to top, rgba(35, 54, 53, 0.6) 0%, transparent 50%);
  transition: background 500ms var(--ease);
}
```

### Rules
- ALL transitions are 500ms. This is the Tony Robbins DNA. Slow, deliberate, premium.
- Scroll reveals are 700ms fade-up (30px). Slightly more dramatic than v3.
- No parallax. No scroll-jacking. No cursor effects.
- Respect `prefers-reduced-motion`.
- Stats count up when they scroll into view.

## 8. Responsive Behaviour

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | <768px | Single column. Hero display: 44px. Stat numbers: 44px. Section titles: 34px. Hamburger nav. Carousel: single card visible with peek. |
| Tablet | 768-1024px | Two columns where appropriate. Carousel: two cards visible. |
| Desktop | >1024px | Full layouts, 90px hero display, 80-160px section padding. Carousel: 3-4 cards visible. |

### Mobile Principles
- Headlines scale to roughly 50% of desktop size.
- Body stays at 15px minimum. Never smaller.
- Touch targets: 48px minimum.
- Carousel scrolls freely with single card + peek of next.
- Horizontal padding: 24px on mobile.
- Stats stack vertically on mobile (2-column grid).
- Ghost/glass buttons simplify to solid on very small screens for tap clarity.

## 9. Anti-Patterns (NEVER Do These)

### AI-Slop Markers
1. Inter or system-default fonts. Load Instrument Serif + DM Sans + DM Mono explicitly.
2. Purple or blue anything. The palette is sage, teal, cream. Full stop.
3. Generic 3-column card grids with equal widths. Use portrait-ratio horizontal carousels.
4. Uniform box-shadows on every element. Shadows are earned.
5. All-light pages with no dark sections. 70% must be deep teal.
6. Centred everything. Left-align body text. Vary alignment.
7. Gradient backgrounds on sections (gradients are for image overlays ONLY).
8. Emoji in headings or section titles.
9. Identical section padding throughout. Vary the rhythm.
10. Decorative SVG blobs or abstract shapes.

### Brand Violations
11. Pure #000000 or #1a1a1a for backgrounds. Use #233635 (deep teal). This is the v4 shift.
12. Pure #ffffff as page background. Use #f6f4f1 (canvas cream).
13. Sharp-cornered buttons. Always pill (border-radius: 100px).
14. Em dashes in any copy. Non-negotiable.
15. Bold (700+) weight on anything. Weight 500 max for body, 400 for serif headlines.
16. "Freedom Filled" without the registered trademark symbol. Always "Freedom Filled\u00ae".
17. Stock or AI-generated images. Real Tracy photos only (use placeholders until real photos available).
18. Body text using colour changes for hierarchy. Use opacity changes.
19. DM Sans for section labels/eyebrows. Use DM Mono in v4.
20. More than one accent colour. Sage is the single thread.

### Layout Violations
21. 50/50 column splits. Always asymmetric.
22. More than 4 items visible in any carousel row on desktop.
23. Sections shorter than 500px on desktop. Give content room.
24. Multiple equal-weight CTAs competing in one section.
25. All sections the same background colour. 70% teal, 30% cream.

## 10. Agent Prompt Guide

### Quick Token Reference
```
Deep Teal:    #233635    (primary dark bg, 70% of sections)
Mid Teal:     #324b4a    (card bg on dark, hover states)
Canvas:       #f6f4f1    (light sections, text on dark)
Charcoal:     #313131    (body text on light)
Sage:         #6e8e77    (THE accent, buttons, labels)
Sage Dark:    #5a7a63    (hover states)
Sage Light:   #8aab92    (accents on dark backgrounds)

Text on dark (primary):    rgba(246, 244, 241, 1.0)
Text on dark (secondary):  rgba(246, 244, 241, 0.7)
Text on dark (ghost):      rgba(246, 244, 241, 0.4)
Text on light (primary):   #313131
Text on light (secondary): rgba(49, 49, 49, 0.6)
```

### Key Differences from v3
| Element | v3 | v4 |
|---------|----|----|
| Dark bg colour | #1a1a1a (black) | #233635 (deep teal) |
| Dark/light ratio | ~50/50 | 70/30 dark dominant |
| Section labels | DM Sans uppercase | DM Mono uppercase (utilitarian) |
| Text hierarchy | Colour-based (cream, muted, white) | Opacity-based (same colour, different opacities) |
| Body weight | 300 (light) | 500 (medium) |
| Transition speed | 400ms | 500ms |
| Programs | Staggered cards | Horizontal carousel, portrait-ratio |
| Stats | Decorative numbers at low opacity | Prominent impact numbers (72px) |
| Image treatment | Opacity only | Gradient overlay from bottom |
| Button variants | Primary, dark, ghost, arrow | Primary, ghost, glass (glassmorphism) |

### Example Prompts

**Dark Hero (Tony Robbins DNA):**
"Build a hero on #233635 deep teal. Full-bleed portrait photo at opacity 0.75 with gradient overlay (linear-gradient to top, #233635 5%, transparent 60%). Monospace eyebrow: DM Mono 12px/500 uppercase, 0.15em tracking, #6e8e77 sage. Headline: Instrument Serif 90px, #f6f4f1, tracking -0.03em, one word italic. Subtext: DM Sans 500, 18px, rgba(246,244,241,0.7). Sage pill CTA + ghost button. Stats bar at bottom: DM Mono uppercase, impact numbers."

**Program Carousel:**
"Deep teal section. DM Mono label above. Instrument Serif 64px heading. Horizontal scrollable carousel of portrait-ratio cards (3:4, 300x400px). Each card: full-bleed image, gradient overlay from bottom (#233635), program name in Instrument Serif at bottom, DM Mono label. Left/right arrow buttons. 500ms hover scale."

**Canvas Results Section:**
"Section on #f6f4f1 canvas. DM Mono label in sage. Instrument Serif 64px heading, #313131. Three big stat numbers: Instrument Serif 72px, #313131. Labels below each: DM Mono uppercase, sage. Result cards below in mid-teal (#324b4a) with cream text."

### Build Checklist
- [ ] Deep teal (#233635) dominates (7 of 10 sections)
- [ ] Canvas (#f6f4f1) for light sections only (3 of 10)
- [ ] Instrument Serif + DM Sans + DM Mono loaded
- [ ] DM Mono used for ALL section labels/eyebrows (uppercase, tracked)
- [ ] Headlines at 64-90px with negative tracking (tight)
- [ ] Body text is weight 500, not 300
- [ ] Opacity-based text hierarchy (not colour changes)
- [ ] All transitions are 500ms
- [ ] Sage accent appears on every section
- [ ] All buttons are pill-shaped (border-radius: 100px)
- [ ] Stats/impact numbers prominently displayed (72px)
- [ ] Program carousel is horizontal with portrait cards
- [ ] Images have gradient overlays, not just opacity
- [ ] Ghost/glass buttons over photography
- [ ] "Freedom Filled\u00ae" includes the registered trademark symbol
- [ ] No em dashes anywhere
- [ ] No pure black. All dark = #233635.
- [ ] Would Tony Robbins' designer approve the boldness?
- [ ] Would Tracy's audience feel warmth, not intimidation?
