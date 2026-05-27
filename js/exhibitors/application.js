(function () {
  'use strict';

  var scrollBtn = document.querySelector('[data-scroll-top]');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  var agreeCheck = document.querySelector('[data-app-agree]');
  var submitBtn = document.querySelector('[data-app-submit]');

  if (agreeCheck && submitBtn) {
    agreeCheck.addEventListener('change', function () {
      submitBtn.disabled = !agreeCheck.checked;
    });

    submitBtn.addEventListener('click', function () {
      if (submitBtn.disabled) {
        return;
      }
      window.location.href = 'application_write.html';
    });
  }
})();

