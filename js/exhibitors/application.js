(function () {
  'use strict';
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

