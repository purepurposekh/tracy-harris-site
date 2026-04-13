# Tracy Harris Co - Component Library

Modular HTML components extracted from the approved v4b.html design. Assemble pages by picking components and dropping them into a page shell.

## Files

| File | What it is |
|---|---|
| `tokens.css` | Design system foundation. CSS custom properties, reset, typography, buttons, and all section-specific styles. Every page loads this. |
| `nav.html` | Fixed header navigation + mobile overlay |
| `hero.html` | Full-viewport hero with headline + photo |
| `proof-bar.html` | "As Featured In" social proof strip |
| `about.html` | Bio section with asymmetric photo + text |
| `programs.html` | FFB + FFM program cards |
| `fresh.html` | F.R.E.S.H. framework grid on dark teal |
| `testimonial.html` | Single centred testimonial quote |
| `community.html` | Photo gallery grid |
| `podcast.html` | Podcast section with player card visual |
| `cta.html` | Call-to-action block on dark teal |
| `footer.html` | Footer with links, social icons, copyright |
| `reveal.js` | Scroll reveal (IntersectionObserver), podcast waveform, nav scroll shadow |
| `demo.html` | Complete assembled page using all components (proves the system works) |

## How to Build a Page

### 1. Start with the page shell

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Page Title | Tracy Harris</title>
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="components/tokens.css"/>
</head>
<body>

  <!-- Paste component HTML here -->

  <script src="components/reveal.js"></script>
</body>
</html>
```

### 2. Pick your components

Copy the HTML from any component file and paste it into the body. Order matters for visual flow, but each component works independently.

### 3. Customise the variables

Each component file has a comment block at the top listing exactly what to change: headlines, copy, image paths, links, CTAs.

### Minimal Example (Landing Page)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Apply Now | Tracy Harris</title>
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="components/tokens.css"/>
</head>
<body>

  <!-- nav.html -->
  <!-- hero.html (customise headline + CTA) -->
  <!-- testimonial.html -->
  <!-- cta.html -->
  <!-- footer.html -->

  <script src="components/reveal.js"></script>
</body>
</html>
```

That gives you: nav, hero, a testimonial, CTA, footer. Five components, complete landing page.

## Image Paths

All image paths are relative. Default structure:

```
images/tracy/web/hero.jpg
images/tracy/web/teaching.jpg
images/tracy/web/community.jpg
images/tracy/web/retreat.jpg
images/tracy/web/speaking.jpg
images/tracy/web/fitness.jpg
images/tracy/web/portrait2.jpg
```

## Design Tokens Quick Reference

### Colours
- `--canvas: #f4f1ec` (page background)
- `--white: #ffffff`
- `--near-black: #1d1d1d` (body text)
- `--teal: #1e3735` (dark sections, nav logo)
- `--sage: #6e8e77` (primary accent, buttons)
- `--sage-hover: #5a7a63`
- `--light-sage: #a8c4a0` (accents on dark backgrounds)
- `--warm-gray: #8a8a8a` (secondary text)
- `--sand: #d4cec6` (borders, subtle elements)
- `--warm-white: #eae7e1` (alternate section backgrounds)

### Fonts
- `--font-display: 'EB Garamond', serif` (headlines)
- `--font-body: 'DM Sans', sans-serif` (body text, buttons)

### Button Classes
- `.btn-primary` - Sage green, white text (default)
- `.btn-secondary` - Teal, canvas text
- `.btn-outline` - Transparent, sand border
- `.btn-ghost` - Text link with arrow
- `.btn-primary-dark` - Light sage, for dark backgrounds

### Typography Classes
- `.headline-hero` - Largest headline
- `.headline-section` - Section headers
- `.headline-sub` - Subheadings
- `.eyebrow` - Uppercase small label
- `.body-large` - 18px body copy
- `.body-small` - 14px body copy

## Rules

- Do NOT redesign or modify the component styles. These are locked, approved designs.
- Freedom Filled always carries the registered trademark symbol.
- Never fabricate testimonials or revenue figures. Use placeholders.
- Every CTA needs a real destination link before publishing.
