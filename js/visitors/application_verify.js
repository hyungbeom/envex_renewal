(function () {
  'use strict';
var prevBtn = document.querySelector('[data-verify-prev]');
  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      window.location.href = 'application.html';
    });
  }

  var startBtn = document.querySelector('[data-verify-start]');
  var nextBtn = document.querySelector('[data-verify-next]');

  if (startBtn) {
    startBtn.addEventListener('click', function () {
      alert('휴대폰 본인인증을 진행합니다. (연동 예정)');
      if (nextBtn) {
        nextBtn.disabled = false;
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      if (nextBtn.disabled) return;
      window.location.href = 'application_form.html';
    });
  }
})();

