(function () {
  'use strict';

  var submitBtn = document.querySelector('[data-visitor-submit]');
  var radioGroup = document.querySelectorAll('input[name="consent"]');
  var prevBtn = document.querySelector('[data-visitor-prev]');

  function setSubmitEnabled(isEnabled) {
    if (!submitBtn) return;
    submitBtn.disabled = !isEnabled;
  }

  function updateConsentState() {
    var agreeChecked = false;
    radioGroup.forEach(function (r) {
      if (r.checked && r.value === 'agree') agreeChecked = true;
    });
    setSubmitEnabled(agreeChecked);
  }

  radioGroup.forEach(function (r) {
    r.addEventListener('change', updateConsentState);
  });

  updateConsentState();

  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      window.location.href = 'visitor_guide.html';
    });
  }

  var reserveBtn = document.querySelector('[data-visitor-reserve-check]');
  if (reserveBtn) {
    reserveBtn.addEventListener('click', function () {
      alert('온라인 사전등록 예약 확인 기능은 준비 중입니다.');
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', function () {
      if (submitBtn.disabled) return;
      window.location.href = 'application_verify.html';
    });
  }
})();