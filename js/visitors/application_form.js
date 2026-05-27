(function () {
  'use strict';

  var scrollBtn = document.querySelector('[data-scroll-top]');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  var prevBtn = document.querySelector('[data-vf-prev]');
  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      window.location.href = 'application_verify.html';
    });
  }

  var form = document.querySelector('.vf-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
    });
  }

  function collectFormData() {
    var grid2 = form ? form.querySelectorAll('.vf-grid-2') : [];
    var nameInput = grid2[0] ? grid2[0].querySelector('input[type="text"]') : null;
    var nationalitySelect = grid2[0] ? grid2[0].querySelector('select') : null;
    var deptInput = grid2[1] ? grid2[1].querySelectorAll('input[type="text"]')[0] : null;
    var positionInput = grid2[1] ? grid2[1].querySelectorAll('input[type="text"]')[1] : null;

    var companyInput = form ? form.querySelector('.vf-section:first-of-type > div:not(.vf-grid-2):not(.vf-grid-3) input[type="text"]') : null;
    var phoneInputs = form ? form.querySelectorAll('.vf-grid-3 input[type="text"]') : [];
    var mobileInput = form ? form.querySelector('.vf-section:first-of-type > div > input[type="text"][placeholder*="010"]') : null;
    var emailInputs = form ? form.querySelectorAll('.vf-grid-email input[type="text"]') : [];
    var addressInputs = form ? form.querySelectorAll('.vf-address input[type="text"]') : [];

    var email = '';
    if (emailInputs.length >= 2) {
      var local = emailInputs[0].value.trim();
      var domain = emailInputs[1].value.trim();
      if (local && domain) {
        email = local + '@' + domain;
      }
    }

    var phone = '';
    if (phoneInputs.length) {
      phone = Array.prototype.map.call(phoneInputs, function (input) {
        return input.value.trim();
      }).filter(Boolean).join('-');
    }

    var address = '';
    if (addressInputs.length) {
      address = Array.prototype.map.call(addressInputs, function (input) {
        return input.value.trim();
      }).filter(Boolean).join(' ');
    }

    return {
      name: nameInput && nameInput.value.trim() ? nameInput.value.trim() : '신청자',
      nationality: nationalitySelect && nationalitySelect.value !== '선택' ? nationalitySelect.value : '대한민국',
      company: companyInput && companyInput.value.trim() ? companyInput.value.trim() : '한국 환경 보전원',
      department: deptInput && deptInput.value.trim() ? deptInput.value.trim() : '기획팀',
      position: positionInput && positionInput.value.trim() ? positionInput.value.trim() : '부장',
      phone: phone || '한국 환경 보전원',
      mobile: mobileInput && mobileInput.value.trim() ? mobileInput.value.trim() : '010-9876-5432',
      email: email || 'email@example.com',
      address: address || '서울시 성동구 광나루로 320-2'
    };
  }

  function goToDonePage() {
    try {
      window.localStorage.setItem('envex_visitor_application', JSON.stringify(collectFormData()));
    } catch (e) {
      // storage 실패 시에도 완료 페이지로 이동
    }
    window.location.href = 'application_done.html';
  }

  var submitBtn = document.querySelector('[data-vf-submit]');
  if (submitBtn) {
    submitBtn.addEventListener('click', goToDonePage);
  }
})();
