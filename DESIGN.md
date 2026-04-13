# Design System: Tracy Harris Co

## 1. Brand Position & Atmosphere

Tracy Harris is an established thought leader, not an emerging coach. She has 10+ years building a multi-seven-figure education business. She's a keynote speaker, former teacher, mother of two, and lives between Bali and Australia working four days a week. She sits alongside John Maxwell, Donald Miller, Michelle Obama in aspiration, not alongside Instagram coaches.

The site should feel like meeting someone who has quietly built something extraordinary and wants to help you do the same. Warm, grounded, confident. Not flashy. Not trying to prove anything. The design earns trust in the first three seconds through restraint, not noise.

**The feeling:** "This woman is the real deal. And she's someone I'd want to have coffee with."

**Reference aesthetic:** The warmth of Tara Mohr, the confidence of Marie Forleo, the restraint of Danielle LaPorte. All anchored in Tracy's own teal brand colour.

**This is NOT:**
- A lifestyle blog or fashion magazine (no Kinfolk/editorial coolness)
- A SaaS product or tech startup
- An Instagram coach's Canva-designed site
- A template with brand colours swapped in

## 2. Colour Palette

### Foundation
- **Canvas** (`#f4f1ec`): Warm cream background. The entire site breathes on this. Slightly warmer than before, closer to linen.
- **White** (`#ffffff`): Used only for card surfaces and overlays on dark sections. Never as the page background.
- **Near-Black** (`#1d1d1d`): All body text on light surfaces. Warmer and softer than pure black.

### Brand
- **Deep Teal** (`#1e3735`): The authority colour. Hero backgrounds, dark sections, footer, nav overlay on mobile. This is Tracy's signature.
- **Sage** (`#6e8e77`): The action colour. All primary buttons, CTAs, link hover states. Confident but not loud.
- **Light Sage** (`#a8c4a0`): Accent on dark teal backgrounds. Replaces gold/yellow.

### Supporting
- **Warm Gray** (`#8a8a8a`): Secondary text, captions, metadata. Never the cold default gray.
- **Sand** (`#d4cec6`): Borders, dividers, subtle structural lines.
- **Warm White** (`#eae7e1`): Alternate section background. Creates gentle rhythm between canvas sections.

### Rules
- Page background is ALWAYS `#f4f1ec`. Never `#ffffff`.
- Body text is ALWAYS `#1d1d1d`. Never `#000000`.
- Only 3 colours should dominate any given section: background + text + one accent.
- Teal sections create rhythm. Use them for: hero, key quote, CTA block, footer. Not more than 3 per page.
- No gradients on content areas. No glows. No neon. No purple. No blue.

```css
:root {
  --canvas: #f4f1ec;
  --white: #ffffff;
  --near-black: #1d1d1d;
  --teal: #1e3735;
  --sage: #6e8e77;
  --light-sage: #a8c4a0;
  --warm-gray: #8a8a8a;
  --sand: #d4cec6;
  --warm-white: #eae7e1;
}
```

## 3. Typography

### Font Families
- **Display / Headlines:** EB Garamond (Google Fonts). Elegant, high-contrast serif. The voice of authority with warmth.
- **Body / UI:** DM Sans (Google Fonts). Clean, modern, readable. Weight 400-500.
- **Labels / Eyebrows:** DM Sans. Uppercase, tracked. Small and structured.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Hero Display | EB Garamond | clamp(48px, 6vw, 88px) | 400 | 1.08 | -0.5px | Confident, not whisper-light. One word italic for warmth. |
| Section Heading | EB Garamond | clamp(36px, 5vw, 64px) | 400 | 1.12 | -0.3px | The workhorse heading. |
| Subsection Heading | EB Garamond | clamp(24px, 3vw, 36px) | 400 | 1.20 | 0 | Cards, features, testimonial attribution. |
| Body Large | DM Sans | 18px | 400 | 1.70 | 0 | Lead paragraphs, hero subtext. |
| Body | DM Sans | 16px | 400 | 1.65 | 0 | Standard body copy. Readable, not fragile. |
| Body Small | DM Sans | 14px | 400 | 1.55 | 0 | Secondary info, card descriptions. |
| Eyebrow / Label | DM Sans | 12px | 500 | 1.40 | 2.5px | UPPERCASE always. Sage on light, light sage on dark. |
| Caption | DM Sans | 11px | 500 | 1.40 | 2px | UPPERCASE. Metadata, dates, categories. |
| Button Text | DM Sans | 14px | 600 | 1.00 | 0.5px | Confident, not shouty. |

### Principles
- Headlines are weight 400 (regular), not 300 (light). Tracy is confident, not whispering.
- Use italic on one word per major headline for warmth and personality. Never the whole headline.
- Body text at weight 400 with comfortable line-height. Readable on mobile.
- ALL labels and eyebrows are uppercase with tracking. This creates the "established brand" feel.
- Never use bold (700+) on display text. The size does the hierarchy work, not the weight.

## 4. Buttons

### Primary (Sage Pill)
```css
.btn-primary {
  background: #6e8e77;
  color: #ffffff;
  font: 600 14px/1 'DM Sans', sans-serif;
  letter-spacing: 0.5px;
  padding: 16px 40px;
  border-radius: 100px; /* pill shape */
  border: none;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.15s ease;
}
.btn-primary:hover {
  background: #5a7a63;
  transform: translateY(-1px);
}
```

### Secondary (Teal Pill)
```css
.btn-secondary {
  background: #1e3735;
  color: #f4f1ec;
  font: 600 14px/1 'DM Sans', sans-serif;
  letter-spacing: 0.5px;
  padding: 16px 40px;
  border-radius: 100px;
  border: none;
  transition: background 0.25s ease, transform 0.15s ease;
}
.btn-secondary:hover {
  background: #162a28;
  transform: translateY(-1px);
}
```

### Outline (Light)
```css
.btn-outline {
  background: transparent;
  color: #1d1d1d;
  font: 500 14px/1 'DM Sans', sans-serif;
  letter-spacing: 0.5px;
  padding: 15px 38px;
  border-radius: 100px;
  border: 1.5px solid #d4cec6;
  transition: border-color 0.25s ease, color 0.25s ease;
}
.btn-outline:hover {
  border-color: #1d1d1d;
  color: #1d1d1d;
}
```

### Ghost (Text Link with Arrow)
```css
.btn-ghost {
  background: none;
  border: none;
  color: #6e8e77;
  font: 500 14px/1 'DM Sans', sans-serif;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: color 0.2s ease;
}
.btn-ghost::after {
  content: ' →';
  transition: transform 0.2s ease;
  display: inline-block;
}
.btn-ghost:hover {
  color: #5a7a63;
}
.btn-ghost:hover::after {
  transform: translateX(4px);
}
```

### Rules
- ALL buttons are pill-shaped (border-radius: 100px). No sharp corners. No 4px radius.
- Minimum touch target: 48px height on mobile.
- One primary CTA per section maximum. Don't stack two equal buttons.
- Hover states include subtle translateY(-1px) lift. Nothing dramatic.

## 5. Layout & Spacing

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

### Section Spacing
- Vertical section padding: `clamp(80px, 12vw, 160px)`. This is the heartbeat.
- Content sections on canvas: generous top and bottom padding, never crowded.
- Dark teal sections: same padding rules. Don't compress dark sections.

### Content Width
- **Narrow:** `680px` max-width. For body text, testimonials, single-column content.
- **Standard:** `1080px` max-width. For most sections.
- **Wide:** `1320px` max-width. For hero, proof bar, full-width layouts.

### Grid Principles
- Default: single column, centred. This is a personal brand, not a dashboard.
- When using two columns: asymmetric split. `55% / 45%` or `60% / 40%`. Never 50/50.
- Three-column grids only for: testimonials, feature pillars, podcast episodes. Max 3 items.
- No card grids of 4+ items in a row. Ever.
- Horizontal gap between columns: 48-64px. Give content room.

### Whitespace Philosophy
Every section should feel like it has room to breathe. If you're unsure whether to add more space, add more space. The premium signal is restraint, not density.

## 6. Components

### Navigation
```css
nav {
  position: fixed;
  background: rgba(244, 241, 236, 0.92);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(212, 206, 198, 0.5);
  padding: 0 clamp(24px, 4vw, 64px);
  height: 72px;
  z-index: 100;
}
/* Nav links: DM Sans, 13px, weight 500, uppercase, 1.5px tracking */
/* Logo: Tracy Harris wordmark, teal */
/* CTA button: sage pill, right-aligned */
/* Mobile: hamburger → full-screen teal overlay with centred serif links */
```

### Hero Section
- Full-width, dark teal or canvas background.
- Headline: EB Garamond, hero display size. One sentence. One word italic.
- Subtext: DM Sans, 18px, weight 400, max-width 600px.
- One CTA button (sage pill) + optional ghost link.
- Optional: Tracy portrait photo on right (asymmetric layout, not centred).
- Photo treatment: subtle border-radius (8px), warm shadow.

### Image Treatment
```css
.img-featured {
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 8px 32px rgba(30, 55, 53, 0.12);
}
```
- Border radius: 8px (soft, not sharp, not circular).
- Shadow: subtle, teal-tinted. Not generic gray.
- Photos should be warm, bright, real. Tracy in Bali, speaking, with community, at home.
- No stock photos. No AI-generated images. Real Tracy photos only.

### Testimonials
- Single testimonial per view, centred.
- Quote text: EB Garamond italic, clamp(22px, 3vw, 32px), weight 400.
- Attribution: DM Sans, 13px, uppercase, tracked.
- Large faded quotation mark behind at 5% opacity (decorative, not distracting).
- On dark teal background: cream text, light sage attribution.

### Section Eyebrows
- DM Sans, 12px, weight 500, uppercase, 2.5px tracking.
- Colour: sage (#6e8e77) on light backgrounds, light sage (#a8c4a0) on dark.
- Always above the heading. 16px margin below, before the heading.

### Dividers
- Colour: `#d4cec6` (sand).
- Width: 1px. Never thicker.
- Use sparingly. Whitespace should do most separation work.

## 7. Micro-Interactions & Transitions

```css
/* Default transition for interactive elements */
transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

/* Links: underline slides in from left */
a { text-decoration: none; }
a:hover { text-decoration: underline; text-underline-offset: 4px; }

/* Cards: subtle lift on hover */
.card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(30, 55, 53, 0.1); }

/* Images: slight scale on hover (optional, for gallery/portfolio) */
.img-hover:hover { transform: scale(1.02); }

/* Scroll reveal: elements fade up on enter */
.reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }
```

### Rules
- Every interactive element must have a hover state. No dead-feeling buttons or links.
- Transitions are 0.2-0.3s. Never instant, never slow.
- Scroll reveals are subtle (20px translateY + fade). No dramatic slides or zooms.
- No parallax. No scroll-jacking. No cursor effects. Keep it grounded.
- Respect `prefers-reduced-motion`: disable all animation for users who request it.

## 8. Responsive Behaviour

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, hamburger nav, hero stacks (text above image), section padding: 64-80px, display type: 36-48px |
| Tablet | 768-1024px | Two columns where appropriate, padding increases |
| Desktop | >1024px | Full layout, asymmetric grids, full display type, 80-160px section padding |

### Mobile-First Principles
- Every section must work as single-column first.
- Touch targets: 48px minimum height on all interactive elements.
- Body text: 16px minimum on mobile. Never smaller.
- Images: full-width on mobile, object-fit: cover, max-height constraints to prevent scroll-blocking.
- Navigation collapses to hamburger at 768px. Full-screen overlay on teal.
- Horizontal padding: 24px on mobile, scaling to 64px on desktop.

## 9. Anti-Patterns (NEVER Do These)

### AI-Slop Markers (instant credibility death)
1. **Inter or system-default fonts.** Always load EB Garamond + DM Sans explicitly.
2. **Purple or blue gradients.** Tracy's palette is teal, sage, cream. Full stop.
3. **Generic card grids** (3 icons in a row with titles and short descriptions). This is the #1 AI tell.
4. **Uniform shadows** on every element. Shadows are earned, not default.
5. **Centred everything.** Left-align body text. Only centre headlines and CTAs when intentional.
6. **Emoji as design elements** in headings or section titles.
7. **Generic hero patterns** (big image background with centred text overlay and gradient scrim).
8. **Placeholder-looking content** ("Lorem ipsum", "[Your Name Here]", generic stock photos).
9. **Identical spacing** on every section. Vary the rhythm. 80px, then 120px, then 160px.
10. **Decorative SVG blobs or abstract shapes.** This is a personal brand, not a SaaS product.

### Brand Violations
11. **Pure white (#fff) as page background.** Always #f4f1ec.
12. **Pure black (#000) for text.** Always #1d1d1d.
13. **Sharp-cornered buttons.** Always pill (border-radius: 100px).
14. **Em dashes (—) in any copy.** Non-negotiable. Use commas, full stops, or rewrite.
15. **Bold (700+) headlines.** Weight 400 max for display text. Size creates hierarchy, not weight.
16. **"Freedom Filled" without ®.** Always "Freedom Filled®".
17. **Stock photography or AI-generated images.** Real Tracy photos only.
18. **Corporate language** in copy ("leverage", "synergize", "stakeholders", "value proposition").
19. **Fake scarcity** ("ONLY 2 SPOTS LEFT!!!") unless genuinely true.
20. **More than 5 colours visible** in any single section.

### Layout Violations
21. **50/50 column splits.** Always asymmetric.
22. **More than 3 cards in a row.** Maximum 3 columns, ever.
23. **Sections with less than 80px vertical padding.** Breathing room is non-negotiable.
24. **Multiple equal-weight CTAs** competing in the same section.
25. **Hamburger menu on desktop.** Full nav visible above 768px always.

## 10. Agent Prompt Guide

### Quick Token Reference
```
Canvas:      #f4f1ec    (page background, always)
Near-Black:  #1d1d1d    (body text on light)
Teal:        #1e3735    (authority sections, dark bg)
Sage:        #6e8e77    (buttons, CTAs, accents)
Light Sage:  #a8c4a0    (accents on dark bg)
Warm Gray:   #8a8a8a    (secondary text)
Sand:        #d4cec6    (borders, dividers)
Warm White:  #eae7e1    (alt section bg)
White:       #ffffff    (cards on dark bg only)
```

### Example Prompts

**Hero Section:**
"Build a hero section on warm cream canvas (#f4f1ec). Headline: EB Garamond 400, clamp(48px, 6vw, 88px), colour #1d1d1d, one word in italic. Subtext: DM Sans 400, 18px, #8a8a8a, max-width 560px. One sage pill button (#6e8e77, white text, border-radius 100px). Tracy photo on right at 45% width, 8px border-radius, teal-tinted shadow. Asymmetric layout, 55/45 split."

**Dark Teal Section:**
"Full-width section on deep teal (#1e3735). Eyebrow: DM Sans 12px, uppercase, 2.5px tracking, #a8c4a0. Heading: EB Garamond 400, clamp(36px, 5vw, 64px), #f4f1ec, one word italic. Body: DM Sans 400, 16px, rgba(244, 241, 236, 0.75). Vertical padding: clamp(80px, 12vw, 160px). Content max-width: 680px, centred."

**Testimonial:**
"Centred testimonial on canvas. Large faded quotation mark at 5% opacity behind. Quote: EB Garamond italic, clamp(22px, 3vw, 32px), #1d1d1d. Attribution: DM Sans 13px, uppercase, 2px tracking, #8a8a8a. One testimonial visible at a time."

### Build Checklist
Before delivering any page or component, verify:
- [ ] Canvas is #f4f1ec, not white
- [ ] Text is #1d1d1d, not black
- [ ] Buttons are pill-shaped (border-radius: 100px)
- [ ] EB Garamond loaded for headlines, DM Sans for body
- [ ] Headlines are weight 400, not 300 or 700
- [ ] At least one italic word per major headline
- [ ] Eyebrows are uppercase, tracked, sage-coloured
- [ ] Section padding is 80px minimum (160px on desktop sections)
- [ ] No more than 3 columns in any grid
- [ ] Column splits are asymmetric (never 50/50)
- [ ] Every button has a hover state with transition
- [ ] "Freedom Filled®" includes the ® symbol
- [ ] No em dashes anywhere
- [ ] Would Tracy be proud to show this to her mastermind members?
