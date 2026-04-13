# Design System: Tracy Harris Co

## 1. Visual Theme & Atmosphere

Tracy Harris Co is a premium women's business education brand. The design language is **editorial, magazine-style** in the tradition of Kinfolk, Cereal, and The Gentlewoman. It should feel like visiting someone's beautifully curated home, not using an app or viewing a SaaS landing page.

The canvas is always warm off-white (#f6f4f1), never pure white. Dark sections use deep teal (#1e3735) which creates dramatic colour-blocking rhythm as you scroll. The sage green (#6e8e77) appears sparingly on buttons, eyebrows, and interactive elements. Every section should breathe. Whitespace is the luxury.

Tracy is a strong female leader, keynote speaker, educator, and mother. The design should communicate warmth, confidence, intentionality, and premium quality. Never corporate. Never clinical. Never "tech startup."

**Key Characteristics:**
- Warm off-white canvas (#f6f4f1), never pure white (#ffffff)
- Deep teal (#1e3735) for dark hero sections, F.R.E.S.H. framework, CTA cards, footer
- Sage green (#6e8e77) for buttons, accents, eyebrow labels. Used sparingly.
- Charcoal (#313131) for all body text on light surfaces. Never pure black (#000000).
- Gray (#727272) for secondary text, captions, descriptions
- Editorial breathing room: 120-187px vertical section spacing
- Serif-led typography with italic accents for warmth and personality
- Colour-block rhythm: teal > cream > sage > cream > teal creates cinematic pacing down the page
- Scrapbook-style dual-direction shadows on featured image frames, tinted with brand teal
- Photography: warm, bright, real lifestyle moments. Tracy in Bali, at home, working, with family.

## 2. Color Palette & Roles

### Primary
- **Deep Teal** (`#1e3735`): The primary brand colour. Hero backgrounds, dark editorial sections, F.R.E.S.H. grid, CTA cards, footer, nav overlay on mobile. A slightly warm, muted forest teal.
- **Sage Green** (`#6e8e77`): The accent and interactive colour. All primary buttons, eyebrow labels, link hover states, active states. A soft, muted sage.
- **Canvas** (`#f6f4f1`): The page background. A warm off-white with a faint linen quality. Never pure white.

### Secondary & Surface
- **Warm White** (`#edeae6`): Alternate section backgrounds. Creates subtle rhythm between canvas sections.
- **Sand** (`#d4d0ca`): Borders, dividers, thin rules between elements. The quiet structural colour.
- **Light Sage** (`#a8c4a0`): Accent colour on dark teal backgrounds. Replaces gold. Used for letters, highlights on dark surfaces.

### Text
- **Charcoal** (`#313131`): All body text, headings on light backgrounds. Warm near-black.
- **Gray** (`#727272`): Secondary text, captions, descriptions, metadata.
- **Cream text** (`#f6f4f1`): Text on dark teal surfaces.
- **Cream at 70%** (`rgba(246, 244, 241, 0.7)`): Body text on dark surfaces.

### Semantic
- No semantic colour system needed. This is an editorial brand site, not a transactional UI.

### Gradients
- None in content areas. The only gradient is a subtle background treatment in the hero: `linear-gradient(135deg, #1e3735 0%, #162c2a 40%, #2a4a47 100%)` with an optional radial sage glow at 10% opacity.

## 3. Typography Rules

### Font Families
- **Display / Headlines:** EB Garamond or Cormorant Garamond (Google Fonts). High-contrast editorial serif. The "magazine cover" voice.
- **Body / UI:** DM Sans (Google Fonts). Clean, modern, quiet. Weight 300-400.
- **Labels / Captions:** DM Sans or DM Mono. Small, uppercase, tracked out. The "field notes" voice.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Hero Display | EB Garamond | clamp(52px, 7vw, 96px) | 300 | 1.06-1.08 | -0.5px | Often italic for warmth |
| Section Title | EB Garamond | clamp(40px, 6vw, 80px) | 300 | 1.08-1.12 | -0.5px | At least one word italic |
| Card Title | EB Garamond | clamp(24px, 3vw, 36px) | 400 | 1.15-1.20 | 0 | |
| Body Lead | DM Sans | 18-20px | 300 | 1.80 | 0 | Light weight, generous leading |
| Body | DM Sans | 16px | 300 | 1.70 | 0 | Quiet, whispering body voice |
| Body Small | DM Sans | 14-15px | 400 | 1.60 | 0 | |
| Eyebrow / Label | DM Sans | 12px | 500 | 1.80 | 3px | ALL CAPS always |
| Caption / Meta | DM Mono or DM Sans | 11px | 400 | 1.80 | 2.5px | ALL CAPS, field-notes feel |
| F.R.E.S.H. Letters | EB Garamond | clamp(56px, 6vw, 96px) | 300 italic | 1.0 | 0 | Light sage on dark |

### Principles
- **Scale is the hierarchy, not weight.** Headlines are big and light (weight 300). Body is small and quiet. No bold (700+) headlines.
- **Italic is the editorial signature.** Use italic on at least one word in every major headline. It adds warmth and breaks the grid.
- **Body text whispers.** DM Sans at weight 300 with 1.70-1.80 line-height. Generous, quiet, magazine-column feel.
- **Uppercase for all labels and captions.** Always tracked out (2-3px letter-spacing). This creates the "editorial index" feel.

## 4. Component Stylings

### Buttons

**Primary (Sage)**
- Background: `#6e8e77`
- Text: `#ffffff`, DM Sans 13px, weight 500, uppercase, 1.5px letter-spacing
- Border radius: `4px`
- Padding: `16px 40px`
- Hover: darken to `#567260`

**Dark (Teal)**
- Background: `#1e3735`
- Text: `#f6f4f1`
- Border radius: `4px`
- Hover: darken to `#162c2a`

**Outline**
- Background: transparent
- Border: `1px solid #d4d0ca`
- Text: `#313131`, uppercase
- Hover: border darkens to `#313131`

**Ghost (Text Link)**
- No background, no border
- Text: `#6e8e77`, uppercase, 1px underline bottom
- Hover: darken to `#567260`

### Navigation
- Sticky, position fixed
- Background: `rgba(246, 244, 241, 0.88)` with `backdrop-filter: blur(16px)`
- Border bottom: `1px solid rgba(232, 221, 208, 0.6)`
- Logo: brand wordmark image, tinted to teal via CSS filter
- Links: DM Sans 12px, uppercase, 1.8px tracking, color `#727272`, hover `#313131`
- CTA: charcoal or sage button, right-aligned
- Mobile: hamburger with full-screen teal overlay, italic serif links

### Image Treatment
- **Scrapbook Shadow:** `rgba(30, 55, 53, 0.12) -3px -3px 16px 0px, rgba(30, 55, 53, 0.18) 11px 3px 36px 0px`
- Border radius: `4px`
- Object-fit: cover
- Photography style: warm, bright, real lifestyle moments

### Section Eyebrows
- DM Sans or DM Mono, 12px, uppercase, 3px letter-spacing
- Sage green (`#6e8e77`) on light backgrounds
- Light sage (`#a8c4a0`) on dark teal backgrounds

### Cards
- No card grids. Prefer editorial layouts.
- If cards are needed: `1px solid #d4d0ca` border, `4px` radius, no shadow
- On dark backgrounds: no border, colour differentiation only

### Testimonials
- Full-width, centred, single quote at a time
- Large italic serif text (clamp 26-44px)
- Giant faded quotation mark as background watermark (300-600px, 6% opacity)
- Attribution in small caps below

## 5. Layout Principles

### Spacing System
- **Section padding:** `clamp(100px, 14vw, 187px)` vertical. This is the editorial heartbeat.
- **Content max-width:** `1100px` for text content
- **Wide max-width:** `1400px` for hero and proof bar
- **Micro spacing:** 8px, 16px, 24px for intra-element gaps
- **Macro spacing:** 48px, 80px, 120px, 187px for section-level rhythm

### Grid
- Single-column editorial flow is the default
- Asymmetric grids for image+text pairings: `5fr 6fr` or similar. Never 50/50.
- F.R.E.S.H. grid: 5 equal columns with 1px gaps on desktop, stacks on mobile

### Whitespace Philosophy
Whitespace is content. Every section should have 120px minimum vertical padding. If it feels crowded, add more space. The editorial pace is deliberate. This is a print magazine that scrolls, not a SaaS landing page.

### Border Radius
- `4px` everywhere. Sharp, architectural, precise.
- No pills, no large radius, no rounded corners on containers
- Exception: `50%` for circular avatar frames if needed

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | No shadow, no border | Default text on canvas |
| 1 | `1px solid #d4d0ca` | Subtle card outlines, dividers |
| 2 | Scrapbook shadow (dual-direction, teal-tinted) | Featured images, CTA cards |
| 3 | Colour-block separation | Full-bleed teal/sage/cream sections |

No generic gray drop shadows. No gradients. No glows. No glassmorphism on content.

## 7. Do's and Don'ts

### Do
- Use italic serif for at least one word in every major headline
- Create colour-block rhythm by alternating teal/cream/warm-white/sage sections
- Use generous whitespace: 120px minimum between sections
- Keep body text at weight 300 (light) with generous line-height
- Use scrapbook-style teal-tinted shadows on featured images
- Treat every section like a magazine spread
- Use real lifestyle photography of Tracy (warm, bright, Bali, family, working)
- Write "Freedom Filled®" with the registered trademark symbol always

### Don't
- Don't use pure white (#ffffff) as canvas. Use #f6f4f1.
- Don't use pure black (#000000) for text. Use #313131.
- Don't use bold weights (700+) on display text. Weight 300 is the brand voice.
- Don't use rounded pills or large border radius. 4px max.
- Don't use gradients, glows, or glassmorphism on content areas
- Don't crowd sections. Space is the luxury.
- Don't use em dashes in any copy
- Don't use generic stock photos. Real Tracy photos only.
- Don't use "tech startup" colours (blue, purple, neon green)
- Don't use card grids of 6 icons in a row

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, hamburger nav, hero image above text, section padding tightens to 64-100px, display type scales to 36-48px |
| Desktop | >=768px | Full layout, asymmetric grids, monumental display type 52-96px, 100-187px section padding |

### Touch Targets
- All buttons minimum 44px tall
- Nav links need 44x44px touch areas on mobile

### Collapsing
- F.R.E.S.H. grid: 5 columns > single column with horizontal flex (letter + text side by side)
- About grid: 2 columns > stacked (image on top)
- Pathway cards: 3 columns > stacked
- Podcast grid: 2 columns > stacked

## 9. Agent Prompt Guide

### Quick Colour Reference
```
--teal-dark:   #1e3735   (primary dark, hero bg, dark sections)
--sage:        #6e8e77   (accent, buttons, eyebrows)
--charcoal:    #313131   (body text)
--gray:        #727272   (secondary text)
--canvas:      #f6f4f1   (background)
--warm-white:  #edeae6   (alt section bg)
--sand:        #d4d0ca   (borders, dividers)
--light-sage:  #a8c4a0   (accent on dark bg)
```

### Example Component Prompt
"Create a hero section on deep teal (#1e3735) background. Headline at clamp(52px, 7vw, 96px) EB Garamond weight 300, one word italic in sage accent. Subtext at 18px DM Sans weight 300, color rgba(246,244,241,0.7). Two buttons: primary sage green and outline light. Portrait photo on right with 3:4 aspect ratio and scrapbook shadow."

### Iteration Rules
1. If it looks like Bootstrap or Tailwind defaults, start over
2. If the body text feels heavy, reduce to weight 300
3. If sections feel cramped, add 40% more vertical padding
4. If it could be any brand, add more editorial character
5. Check: would this page look good printed in a magazine? If not, refine.
