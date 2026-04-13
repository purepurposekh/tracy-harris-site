/*
 * ============================================================
 * Tracy Harris Co - Scroll Reveal + UI Scripts
 * ============================================================
 * Load at the bottom of the page, before </body>:
 *   <script src="components/reveal.js"></script>
 *
 * Handles:
 * 1. Scroll reveal animations (IntersectionObserver)
 * 2. Podcast waveform bar generation
 * 3. Nav shadow on scroll
 * ============================================================
 */

/* Scroll Reveal */
(function() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal').forEach(function(el) {
    observer.observe(el);
  });
})();

/* Podcast waveform bars */
(function() {
  var container = document.getElementById('podcastWaveform');
  if (!container) return;
  var heights = [12, 24, 16, 32, 20, 36, 14, 28, 18, 34, 22, 30, 16, 26, 38, 12, 32, 20, 28, 14, 36, 24, 18, 30, 22, 34, 16, 26, 20, 38, 12, 28, 24, 32, 18];
  for (var i = 0; i < heights.length; i++) {
    var bar = document.createElement('div');
    bar.className = 'podcast-waveform-bar';
    bar.style.height = heights[i] + 'px';
    container.appendChild(bar);
  }
})();

/* Nav background on scroll */
(function() {
  var nav = document.querySelector('.site-nav');
  if (!nav) return;
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      nav.style.boxShadow = '0 4px 20px rgba(30, 55, 53, 0.06)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });
})();
