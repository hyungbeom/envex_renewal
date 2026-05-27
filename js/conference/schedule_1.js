(function () {
  'use strict';

  var scrollBtn = document.querySelector('[data-scroll-top]');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  var agreeCheck = document.querySelector('[data-conf-apply-agree]');
  var submitBtn = document.querySelector('[data-conf-apply-submit]');
  var cancelBtn = document.querySelector('[data-conf-apply-cancel]');

  if (agreeCheck && submitBtn) {
    agreeCheck.addEventListener('change', function () {
      submitBtn.disabled = !agreeCheck.checked;
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener('click', function () {
      window.location.href = 'schedule.html';
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', function () {
      if (submitBtn.disabled) return;
      window.location.href = 'schedule_2.html';
    });
  }
})();
