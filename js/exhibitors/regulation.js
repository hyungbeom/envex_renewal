(function () {
  'use strict';
var regTitle = document.getElementById('reg-terms-title');
  if (regTitle && typeof regTitle.focus === 'function') {
    setTimeout(function () {
      regTitle.focus();
    }, 0);
  }

  var downloadBtn = document.querySelector('[data-reg-download]');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function (e) {
      e.preventDefault();
      alert('참가 가이드 다운로드 파일은 준비 중입니다.');
    });
  }
})();
