
(function () {
  'use strict';

  var scrollBtn = document.querySelector('[data-scroll-top]');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  var title = document.getElementById('contact-title');
  if (title && typeof title.focus === 'function') {
    setTimeout(function () {
      title.focus();
    }, 0);
  }
})();

