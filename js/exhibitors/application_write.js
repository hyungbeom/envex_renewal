(function () {
  'use strict';

  var VAT_RATE = 0.1;
function formatNumber(num) {
    return String(Math.round(num)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function parseAmount(str) {
    return parseInt(String(str).replace(/[^\d]/g, ''), 10) || 0;
  }

  function updateBoothAmounts() {
    var subtotal = 0;

    document.querySelectorAll('[data-booth-type]').forEach(function (qtyInput) {
      var qty = parseInt(qtyInput.value, 10) || 0;
      var unit = parseInt(qtyInput.getAttribute('data-unit-price'), 10) || 0;
      var amount = qty * unit;
      var type = qtyInput.getAttribute('data-booth-type');
      var amountInput = document.querySelector('[data-booth-amount="' + type + '"]');

      if (amountInput) {
        amountInput.value = formatNumber(amount);
      }

      subtotal += amount;
    });

    var subtotalEl = document.getElementById('appw-subtotal');
    var totalVatEl = document.getElementById('appw-total-vat');

    if (subtotalEl) {
      subtotalEl.value = formatNumber(subtotal);
    }

    if (totalVatEl) {
      totalVatEl.value = formatNumber(subtotal + subtotal * VAT_RATE);
    }
  }

  document.querySelectorAll('[data-booth-type]').forEach(function (input) {
    input.addEventListener('input', updateBoothAmounts);
    input.addEventListener('change', updateBoothAmounts);
  });

  updateBoothAmounts();

  var postcodeMap = {
    ko: {
      zip: 'appw-zip-ko',
      road: 'appw-addr-ko',
      detail: 'appw-addr-detail-ko',
      zipEn: 'appw-zip-en',
      roadEn: 'appw-addr-en'
    },
    biz: {
      zip: 'appw-biz-zip',
      road: 'appw-biz-addr',
      detail: 'appw-biz-addr-detail'
    }
  };

  function openPostcode(target) {
    if (typeof daum === 'undefined' || !daum.Postcode) {
      alert('우편번호 서비스를 불러오는 중입니다. 잠시 후 다시 시도해 주세요.');
      return;
    }

    var map = postcodeMap[target];
    if (!map) {
      return;
    }

    new daum.Postcode({
      oncomplete: function (data) {
        var zipEl = document.getElementById(map.zip);
        var roadEl = document.getElementById(map.road);

        if (zipEl) {
          zipEl.value = data.zonecode;
        }

        if (roadEl) {
          roadEl.value = data.roadAddress || data.jibunAddress;
        }

        if (target === 'ko' && map.zipEn && map.roadEn) {
          var zipEnEl = document.getElementById(map.zipEn);
          var roadEnEl = document.getElementById(map.roadEn);

          if (zipEnEl) {
            zipEnEl.value = data.zonecode;
          }

          if (roadEnEl && data.roadAddressEnglish) {
            roadEnEl.value = data.roadAddressEnglish;
          }
        }

        var detailEl = document.getElementById(map.detail);
        if (detailEl) {
          detailEl.focus();
        }
      }
    }).open();
  }

  document.querySelectorAll('[data-appw-postcode]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openPostcode(btn.getAttribute('data-appw-postcode'));
    });
  });

  var licenseFile = document.getElementById('appw-license-file');
  var licenseDisplay = document.getElementById('appw-license-display');

  if (licenseFile && licenseDisplay) {
    licenseFile.addEventListener('change', function () {
      if (licenseFile.files && licenseFile.files.length) {
        licenseDisplay.value = licenseFile.files[0].name;
      } else {
        licenseDisplay.value = '선택된 파일 없음';
      }
    });
  }

  var regionNone = document.querySelector('[data-region-none]');
  if (regionNone) {
    regionNone.addEventListener('change', function () {
      if (!regionNone.checked) {
        return;
      }

      document.querySelectorAll('.appw-checks input[name="region"]').forEach(function (cb) {
        if (cb !== regionNone) {
          cb.checked = false;
        }
      });
    });

    document.querySelectorAll('.appw-checks input[name="region"]').forEach(function (cb) {
      if (cb === regionNone) {
        return;
      }

      cb.addEventListener('change', function () {
        if (cb.checked) {
          regionNone.checked = false;
        }
      });
    });
  }

  var contractCheck = document.querySelector('[data-appw-contract]');
  var submitBtn = document.querySelector('[data-appw-submit]');

  function updateSubmitState() {
    if (submitBtn && contractCheck) {
      submitBtn.disabled = !contractCheck.checked;
    }
  }

  if (contractCheck) {
    contractCheck.addEventListener('change', updateSubmitState);
    updateSubmitState();
  }

  var pw = document.getElementById('appw-pw');
  var pw2 = document.getElementById('appw-pw2');

  var form = document.getElementById('appw-form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (pw && pw2 && pw.value !== pw2.value) {
        alert('비밀번호가 일치하지 않습니다.');
        pw2.focus();
        return;
      }

      if (submitBtn && submitBtn.disabled) {
        return;
      }

      alert('참가신청이 접수되었습니다. (서버 연동 예정)');
      window.location.href = 'schedule.html';
    });
  }

  var dupCheckBtn = document.querySelector('[data-appw-dup-check]');
  if (dupCheckBtn) {
    dupCheckBtn.addEventListener('click', function () {
      var idInput = document.getElementById('appw-id');
      if (!idInput || !idInput.value.trim()) {
        alert('사업자등록번호를 입력해 주세요.');
        if (idInput) {
          idInput.focus();
        }
        return;
      }
      alert('사용 가능한 아이디입니다. (서버 연동 예정)');
    });
  }

  var importBtn = document.querySelector('[data-appw-import]');
  if (importBtn) {
    importBtn.addEventListener('click', function () {
      alert('지난 데이터 가져오기 기능은 준비 중입니다.');
    });
  }
})();
