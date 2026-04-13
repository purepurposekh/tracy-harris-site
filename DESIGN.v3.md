# Design System: Tracy Harris Co — v3

## 1. Brand Position & Atmosphere

Tracy Harris is an established thought leader with 10+ years building a multi-seven-figure education business. She sits beside Maxwell, Michelle Obama, Donald Miller in aspiration. The design must communicate authority, warmth, and sophistication instantly.

**The reference DNA:** This system is inspired by a high-end Showit template (Superhero Design "Nova Dreams") that Karl identified as the right vibe. The key patterns extracted: extreme typographic contrast, disciplined single-accent colour, bold use of dark backgrounds, pill-shaped CTAs, staggered layouts, and generous vertical space. We adapt these patterns for Tracy's brand.

**The feeling:** Luxurious restraint. Black and cream with sage as the signature accent. Massive serif headlines against quiet sans-serif body text. Lots of breathing room. Photography that's warm and real but treated with intentional opacity. It should feel like opening a premium magazine, not browsing a website.

**This is NOT:**
- Soft or pastel all over (dark sections create drama)
- A SaaS landing page or tech startup
- A generic online coach's template
- All-light, all-cream, no contrast

## 2. Colour Palette

### Foundation (The Drama)
```css
:root {
  --black:       #1a1a1a;   /* Primary dark bg. Near-black, slightly warm. Not pure #000. */
  --canvas:      #f4f1ec;   /* Warm cream. Light section backgrounds. */
  --warm-stone:  #eae7e1;   /* Alt light bg. Quote sections, guide CTAs. */
  --white:       #ffffff;   /* Text on dark surfaces. Card surfaces on dark sections. */
}
```

### Brand Accent (The Signature Thread)
```css
:root {
  --sage:        #6e8e77;   /* THE accent colour. Buttons, labels, hover states. Appears on every section. */
  --sage-dark:   #5a7a63;   /* Hover/active state for sage elements. */
  --sage-light:  #a8c4a0;   /* Sage on dark backgrounds. Light variant for contrast. */
}
```

### Text
```css
:root {
  --text-dark:   #1a1a1a;   /* Body text on light surfaces. */
  --text-light:  #ffffff;   /* Text on dark surfaces. */
  --text-muted:  #8a8a8a;   /* Secondary text, captions on light surfaces. */
  --text-cream:  rgba(244, 241, 236, 0.8);  /* Body text on dark surfaces. */
}
```

### Structural
```css
:root {
  --sand:        #d4cec6;   /* Divider lines, borders. Used sparingly. */
  --teal-deep:   #1e3735;   /* Footer. Deepest brand colour. */
}
```

### Colour Rhythm (Critical)

The page alternates between dark and light sections. This rhythm is what creates the premium feel:

```
1. Header:            --black (transparent overlay)
2. Hero:              --black (with image at 0.8 opacity)
3. Marquee band:      --black (thin accent strip)
4. About/Intro:       --black (image left, text right)
5. Programs:          --canvas (first light break, breathing room)
6. Featured:          --warm-stone (mid-tone warmth)
7. Testimonial:       --canvas (light, centred)
8. Podcast/Content:   --black (back to dark for drama)
9. Lead Magnet:       --warm-stone (light CTA section)
10. Footer:           --teal-deep (brand anchor)
```

The sage accent (`--sage`) appears on EVERY section as subheadings, buttons, or hover states. It is the single thread that ties the alternating dark/light sections together.

### Rules
- **At least 3-4 sections per page must use dark backgrounds.** All-cream pages look flat and generic.
- **One accent colour only.** Sage green is the accent. No second accent. No gold. No coral.
- **No gradients.** No glows. No neon. No purple. No blue.
- Hero images over dark backgrounds use `opacity: 0.8` to integrate with the colour scheme.

## 3. Typography

Two fonts. No exceptions. The restraint is what makes it work.

### Font Loading
```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
```

### Type Scale

| Role | Desktop | Mobile | Font | Weight | Letter-spacing | Line-height | Transform |
|------|---------|--------|------|--------|----------------|-------------|-----------|
| Hero Display | 90px | 44px | Instrument Serif | 400 | 0 | 1.05 | none |
| Section Title | 72px | 36px | Instrument Serif | 400 | 0 | 1.10 | none |
| Card/Feature Title | 34px | 22px | Instrument Serif | 400 | 0 | 1.25 | none |
| Quote | 52px | 30px | Instrument Serif | 400 italic | 0 | 1.15 | none |
| Blog/Small Title | 27px | 20px | Instrument Serif | 400 | 0 | 1.30 | none |
| Eyebrow / Label | 14px | 13px | DM Sans | 500 | 0.12em | 1.70 | uppercase |
| Body | 17px | 15px | DM Sans | 300 | 0 | 1.80 | none |
| Body Lead | 19px | 16px | DM Sans | 300 | 0 | 1.75 | none |
| Nav Links | 12px | 13px | DM Sans | 600 | 0.10em | 1.00 | uppercase |
| Button Text | 13px | 13px | DM Sans | 500 | 0.05em | 1.00 | uppercase |
| Caption / Meta | 11px | 11px | DM Sans | 500 | 0.08em | 1.40 | uppercase |
| Marquee | 18px | 14px | DM Sans | 500 | 0.15em | 1.20 | uppercase |

### Typography Principles

1. **Extreme contrast is the luxury signal.** 90px serif titles against 17px sans-serif body. This gap is intentional. Don't close it.
2. **Instrument Serif does all the emotional heavy lifting.** Every headline, every quote, every moment you want someone to FEEL something.
3. **DM Sans does all the functional work.** Navigation, body text, labels, buttons. It's invisible by design.
4. **Body text is weight 300 (light).** This creates the quiet, magazine-column whisper that lets the big headlines dominate.
5. **Eyebrows are the sage accent in text form.** DM Sans, uppercase, tracked, sage coloured. On every section. This is the visual thread.
6. **One italic word per headline.** Use Instrument Serif italic on one key word to add warmth and editorial feel. Never italic the whole headline.
7. **Never bold serif headlines.** Weight 400 only. The size creates the impact, not the weight.

## 4. Buttons

All buttons are pill-shaped. This is non-negotiable.

### Primary (Sage Pill)
```css
.btn-primary {
  background: var(--sage);
  color: var(--white);
  font: 500 13px/1 'DM Sans', sans-serif;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 18px 44px;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  transition: background 0.4s ease, transform 0.2s ease;
}
.btn-primary:hover {
  background: var(--sage-dark);
  transform: translateY(-2px);
}
```

### Dark Pill (On Light Backgrounds)
```css
.btn-dark {
  background: var(--black);
  color: var(--white);
  padding: 18px 44px;
  border-radius: 100px;
  border: none;
  font: 500 13px/1 'DM Sans', sans-serif;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: background 0.4s ease;
}
.btn-dark:hover { background: #2a2a2a; }
```

### Ghost / Outline (On Dark Backgrounds)
```css
.btn-ghost {
  background: transparent;
  color: var(--white);
  padding: 17px 42px;
  border-radius: 100px;
  border: 1.5px solid rgba(244, 241, 236, 0.4);
  font: 500 13px/1 'DM Sans', sans-serif;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: border-color 0.4s ease, color 0.4s ease;
}
.btn-ghost:hover {
  border-color: var(--sage-light);
  color: var(--sage-light);
}
```

### Arrow CTA (Text + Arrow)
```css
.btn-arrow {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--sage);
  font: 500 13px/1 'DM Sans', sans-serif;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
}
.btn-arrow::after {
  content: '→';
  font-size: 18px;
  transition: transform 0.3s ease;
}
.btn-arrow:hover { color: var(--sage-dark); }
.btn-arrow:hover::after { transform: translateX(6px); }
```

### Rules
- Minimum touch target: 48px height on mobile.
- One primary CTA per section maximum.
- Transitions are 0.3-0.5s. Slightly slower than typical for a luxurious feel.
- Button text is always uppercase, always tracked.

## 5. Layout & Spacing

### Content Width
```css
--width-narrow: 680px;    /* Text-only sections, quotes */
--width-standard: 1080px; /* Most content sections */
--width-wide: 1200px;     /* Hero, full layouts */
```

### Section Spacing
```css
--section-pad: clamp(80px, 14vw, 160px);  /* Vertical section padding */
```

Sections should be TALL. 700-1000px+ on desktop is normal. If content doesn't fill the height, that's fine. The breathing room IS the design.

### Grid Principles
- **Default: asymmetric splits.** 55/45 or 60/40. Never 50/50.
- **Staggered cards, not grids.** When showing 3 items, vary their sizes and vertical positions. Centre card slightly larger, outer cards smaller.
- **Single column centred for text-heavy sections.** Max-width 680px.
- **Max 3 items in any row.** No 4-column grids.
- Gap between columns: 48-80px.

### Spacing Scale
```css
--space-xs: 8px;
--space-sm: 16px;
--space-md: 24px;
--space-lg: 48px;
--space-xl: 80px;
--space-2xl: 120px;
--space-3xl: 160px;
```

## 6. Components

### Navigation
- Fixed, transparent over hero, transitions to frosted glass on scroll.
- Logo: "TRACY HARRIS" in Instrument Serif uppercase, tracked.
- Links: DM Sans 12px, weight 600, uppercase, 0.10em tracking. White on dark, near-black on light.
- CTA: Sage pill button, right-aligned.
- Mobile: hamburger icon, full-screen overlay on dark background with centred Instrument Serif links.
- Hover: nav links transition to sage colour.

### Hero Section
- Dark background (--black) with full-bleed portrait photo at `opacity: 0.75-0.85`.
- Headline: Instrument Serif 90px, white, one word italic.
- Subtext: DM Sans 300, 19px, cream at 80% opacity.
- Eyebrow above: DM Sans, sage, uppercase, tracked.
- One sage pill CTA.
- Optional: large decorative text element at very low opacity in background.

### Marquee Band
- Thin horizontal strip (50-60px) between sections.
- Dark background.
- Scrolling uppercase text in sage or muted colour, 0.15em tracking.
- Repeating text with dot separators: "NOW ENROLLING · NOW ENROLLING · NOW ENROLLING"
- CSS animation: infinite horizontal scroll.

### Image Treatment
```css
/* On dark backgrounds: integrate with opacity */
.img-dark-section {
  opacity: 0.8;
  border-radius: 4px;
  object-fit: cover;
}

/* On light backgrounds: subtle teal shadow */
.img-light-section {
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 12px 16px 40px rgba(26, 26, 26, 0.12);
}

/* Hover reveal: image fades, text appears behind */
.img-hover-reveal {
  transition: opacity 0.5s ease;
}
.img-hover-reveal:hover {
  opacity: 0;
}
```

### Testimonials
- Light background (canvas or warm stone).
- Large decorative quotation mark SVG at low opacity.
- Quote: Instrument Serif italic, 52px desktop / 30px mobile.
- Attribution: DM Sans uppercase, sage colour.
- Thin horizontal divider line (1px, sand colour).
- Optional: portrait photo of person quoted.

### Decorative Numbers
- Large numbers "01", "02", "03" behind content at 0.08-0.15 opacity.
- DM Sans, weight 600, 80-100px.
- Creates depth and visual structure without competing for attention.

### Section Eyebrows
- DM Sans, 14px, weight 500, uppercase, 0.12em tracking.
- Sage (`--sage`) on light backgrounds.
- Light sage (`--sage-light`) on dark backgrounds.
- Always above the heading, 20px margin below.

## 7. Micro-Interactions

```css
/* Global transition curve — slightly slow for luxury feel */
--ease: cubic-bezier(0.4, 0, 0.2, 1);
--duration: 0.4s;

/* Links: colour transition */
a { transition: color var(--duration) var(--ease); }

/* Images: subtle hover effects */
.img-hover:hover { opacity: 0.85; }

/* Cards: gentle lift */
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 48px rgba(26, 26, 26, 0.1);
}

/* Scroll reveal: fade up on enter */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Marquee: infinite horizontal scroll */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee-inner {
  animation: marquee 30s linear infinite;
}
```

### Rules
- All transitions 0.3-0.5s. Slightly slower than typical = luxury.
- Scroll reveals are subtle (24px fade-up). No dramatic zooms or slides.
- No parallax. No scroll-jacking. No cursor effects.
- Respect `prefers-reduced-motion`.

## 8. Responsive Behaviour

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | <768px | Single column. Hero display: 44px. Section titles: 36px. Padding: 64-80px. Hamburger nav. Stacked layouts. |
| Tablet | 768-1024px | Two columns where appropriate. Intermediate sizing. |
| Desktop | >1024px | Full layouts, 90px hero display, 80-160px section padding. Asymmetric grids. |

### Mobile Principles
- Headlines scale to roughly 50% of desktop size.
- Body stays at 15px minimum. Never smaller.
- Touch targets: 48px minimum.
- Full-width images on mobile.
- Horizontal padding: 24px on mobile, scaling to max content width on desktop.

## 9. Anti-Patterns (NEVER Do These)

### AI-Slop Markers
1. Inter or system-default fonts. Load Instrument Serif + DM Sans explicitly.
2. Purple or blue anything. The palette is sage, black, cream. Full stop.
3. Generic 3-column card grids with equal widths. Use staggered sizes.
4. Uniform box-shadows on every element. Shadows are earned.
5. All-light pages with no dark sections. You need the contrast.
6. Centred everything. Left-align body text. Vary alignment.
7. Gradient backgrounds on sections.
8. Emoji in headings or section titles.
9. Identical section padding throughout. Vary the rhythm.
10. Decorative SVG blobs or abstract shapes.

### Brand Violations
11. Pure #000000 for backgrounds. Use #1a1a1a (warmer).
12. Pure #ffffff as page background. Use #f4f1ec.
13. Sharp-cornered buttons. Always pill (border-radius: 100px).
14. Em dashes in any copy. Non-negotiable.
15. Bold (700+) serif headlines. Weight 400 only for Instrument Serif.
16. "Freedom Filled" without ®. Always "Freedom Filled®".
17. Stock or AI-generated images. Real Tracy photos only.
18. More than 2 font families. Instrument Serif + DM Sans. That's it.
19. Body text weight above 400. Body is 300 (light). Quiet, not heavy.
20. More than one accent colour. Sage is the single thread.

### Layout Violations
21. 50/50 column splits. Always asymmetric.
22. More than 3 items in any row.
23. Sections shorter than 500px on desktop. Give content room.
24. Multiple equal-weight CTAs competing in one section.
25. All sections the same background colour. Alternate dark/light.

## 10. Agent Prompt Guide

### Quick Token Reference
```
Black:       #1a1a1a    (dark sections, hero, header)
Canvas:      #f4f1ec    (light sections)
Warm Stone:  #eae7e1    (alt light sections)
Sage:        #6e8e77    (THE accent, buttons, labels, hover)
Sage Dark:   #5a7a63    (hover states)
Sage Light:  #a8c4a0    (accents on dark backgrounds)
White:       #ffffff    (text on dark)
Text Muted:  #8a8a8a    (secondary text)
Sand:        #d4cec6    (dividers)
Teal Deep:   #1e3735    (footer)
```

### Example Prompts

**Dark Hero:**
"Build a hero on #1a1a1a background. Full-bleed portrait photo at opacity 0.8. Eyebrow: DM Sans 14px/500 uppercase, 0.12em tracking, #a8c4a0 (sage light). Headline: Instrument Serif 90px, white, one word italic. Subtext: DM Sans 300, 19px, rgba(244,241,236,0.8). One sage pill button (#6e8e77, white text, border-radius 100px). Content max-width 1200px."

**Light Programs Section:**
"Section on #f4f1ec canvas. Eyebrow: DM Sans uppercase, #6e8e77 sage. Headline: Instrument Serif 72px, #1a1a1a, one word italic. Three product cards in staggered layout (centre card larger). Each card: image with hover-to-reveal effect, Instrument Serif 34px title, DM Sans 300 body. Decorative '01', '02', '03' numbers at 0.1 opacity behind. Sage pill CTA at bottom."

**Testimonial:**
"Section on #eae7e1 warm stone. Large decorative quotation mark SVG at 0.08 opacity. Quote: Instrument Serif italic 52px, #1a1a1a. 1px horizontal divider in #d4cec6. Attribution: DM Sans uppercase 13px, #6e8e77 sage. Portrait image left, asymmetric layout."

### Build Checklist
- [ ] Dark sections present (at least 3 per full page)
- [ ] Colour alternation rhythm (dark/light/dark)
- [ ] Instrument Serif loaded and used for all headlines
- [ ] DM Sans loaded and used for all body/UI text
- [ ] Headlines are 70-90px on desktop (go BIG)
- [ ] Body text is weight 300, quiet and magazine-like
- [ ] Sage accent appears on every section (eyebrow, button, or hover)
- [ ] All buttons are pill-shaped (border-radius: 100px)
- [ ] Eyebrows are uppercase, tracked, sage-coloured
- [ ] Column splits are asymmetric
- [ ] Section padding is generous (80-160px vertical)
- [ ] Images on dark backgrounds have opacity treatment
- [ ] Hover states on all interactive elements
- [ ] "Freedom Filled®" includes ®
- [ ] No em dashes anywhere
- [ ] Two fonts only. No third font.
- [ ] Would this look good in a luxury print magazine?
