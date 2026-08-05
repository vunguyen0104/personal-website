/* vunguyen.io — Transit Authority
   Wayfinding behaviour only: mobile nav, you-are-here, line tracing, track draw.
   No dependencies. Everything degrades to a fully readable page without it. */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Mobile nav ------------------------------------------------------- */

  var toggle = document.getElementById('navToggle');
  var panel = document.getElementById('navPanel');

  function closeNav() {
    if (!panel || !toggle) return;
    panel.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      var open = panel.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    panel.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeNav();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('is-open')) {
        closeNav();
        toggle.focus();
      }
    });
  }

  /* --- Line tracing ----------------------------------------------------- */

  var line = document.querySelector('.line');
  var legendButtons = Array.prototype.slice.call(document.querySelectorAll('.line-legend__btn'));

  function setFocus(mode) {
    if (!line) return;
    line.setAttribute('data-focus', mode);
    legendButtons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.dataset.focus === mode));
    });
    syncCurrent();
  }

  legendButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setFocus(btn.dataset.focus);
    });
  });

  /* Any link that names a track (nav or hero destination) traces it on arrival. */
  Array.prototype.slice.call(document.querySelectorAll('a[data-focus]')).forEach(function (link) {
    link.addEventListener('click', function () {
      setFocus(link.dataset.focus);
    });
  });

  /* --- Track extents ----------------------------------------------------- */

  /* Each track spans only its own stations: the work line begins at the first job,
     not at the top of the corridor. Without JS both tracks run the full height,
     which still reads as a corridor. */
  function layoutTracks() {
    if (!line) return;

    var lineTop = line.getBoundingClientRect().top;

    ['study', 'work'].forEach(function (kind) {
      var track = line.querySelector('.line__track--' + kind);
      /* Hidden or zero-size dots would collapse the measured extent */
      var dots = Array.prototype.slice.call(
        line.querySelectorAll('.station--' + kind + ' .station__dot')
      ).filter(function (dot) {
        var box = dot.getBoundingClientRect();
        return box.width > 0 && box.height > 0;
      });

      if (!track || !dots.length) return;

      var first = dots[0].getBoundingClientRect();
      var last = dots[dots.length - 1].getBoundingClientRect();
      var top = first.top - lineTop + first.height / 2;
      var bottom = last.top - lineTop + last.height / 2;

      track.style.top = Math.round(top) + 'px';
      track.style.bottom = 'auto';
      track.style.height = Math.max(0, Math.round(bottom - top)) + 'px';
    });
  }

  var resizeTimer;
  window.addEventListener('resize', function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(layoutTracks, 150);
  });

  window.addEventListener('load', layoutTracks);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layoutTracks);
  layoutTracks();

  /* --- Track draw: the one authored moment ------------------------------ */

  if (line && 'IntersectionObserver' in window) {
    if (reduceMotion) {
      line.classList.add('is-drawn');
    } else {
      var drawObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-drawn');
            drawObserver.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -15% 0px', threshold: 0.05 });
      drawObserver.observe(line);
    }
  } else if (line) {
    line.classList.add('is-drawn');
  }

  /* --- You are here ----------------------------------------------------- */

  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.bar__link'));
  var sections = ['home', 'project', 'experience', 'contact']
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  var currentId = 'home';

  function syncCurrent() {
    var wanted = currentId;

    /* The line section owns two destinations; the traced track picks which one reads
       as current, and Experience is the default when both are shown. */
    if (wanted === 'experience' && line && line.getAttribute('data-focus') === 'study') {
      wanted = 'education';
    }

    navLinks.forEach(function (link) {
      var target = link.getAttribute('href').slice(1);
      if (target === wanted) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  if (sections.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          currentId = entry.target.id;
          syncCurrent();
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (section) { spy.observe(section); });
  }

  syncCurrent();

  /* --- Copyright year ---------------------------------------------------- */

  /* The markup ships a literal year so the footer is never blank or wrong
     without JS; this only keeps it current. Reads the visitor's clock. */
  Array.prototype.slice.call(document.querySelectorAll('[data-current-year]'))
    .forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });

  /* --- Form ------------------------------------------------------------- */

  /* smart-forms.min.js owns submission. This only stops a double-send and tells the
     visitor the click registered, since the handler gives no immediate feedback. */
  var form = document.querySelector('.form');

  if (form) {
    form.addEventListener('submit', function () {
      var button = form.querySelector('button[type="submit"]');
      if (!button || !form.checkValidity()) return;

      var original = button.innerHTML;
      button.disabled = true;
      button.textContent = 'Sending…';

      window.setTimeout(function () {
        button.disabled = false;
        button.innerHTML = original;
      }, 6000);
    });
  }
})();
