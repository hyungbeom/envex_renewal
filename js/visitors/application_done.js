(function () {
  'use strict';

  var scrollBtn = document.querySelector('[data-scroll-top]');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function loadSavedData() {
    try {
      var raw = window.localStorage.getItem('envex_visitor_application');
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  function fillSummary(data) {
    if (!data) return;

    Object.keys(data).forEach(function (key) {
      var cell = document.querySelector('[data-vd-field="' + key + '"]');
      if (cell && data[key]) {
        cell.textContent = data[key];
      }
    });
  }

  fillSummary(loadSavedData());

  var printBtn = document.querySelector('[data-vd-print]');
  if (printBtn) {
    printBtn.addEventListener('click', function () {
      window.print();
    });
  }

  var smsBtn = document.querySelector('[data-vd-sms]');
  if (smsBtn) {
    smsBtn.addEventListener('click', function () {
      alert('SMS 초청장 발송 기능은 준비 중입니다.');
    });
  }
})();
