(function () {
  'use strict';

  var seminars = [
    '2025년 제2차 유해화학물질 안전관리 정책 및 기술·장비 설명회',
    '화학 안전 기술 세미나',
    '환경부 생물자원 연구기관 보유 기술 설명회',
    '녹색환경지원센터 기업환경기술 지원사업 성과공유회',
    'Green Up을 위한 통합환경 솔루션',
    '해외 환경시장 투자 설명회',
    '민관협력 자연환경복원 ESG사업 설명회',
    '제33회 환경정책설명회 및 최신 기술 발표회',
    '2025년도 환경정책세미나 및 ESG 전문인력 실무교육',
    '지속가능한 미래를 위한 감량기 정책 개선 및 추진방향',
    '제20회 수자원환경기술포럼 AI 시대 스마트 물 관리 기술 현황 및 발전 방안',
    '개도국 환경시장 진출전략 세미나',
    '미국공급망을 통한 미국연방(주정부) 공공조달 수출 및 글로벌 민간 수출 관련 사업 설명회',
    '제1회 기후테크 × AI 융합 기술 포럼',
    '제7회 한국실내공기포럼 - 「건강하고 쾌적한 삶!」을 위한 환경관리 제도개선 방안'
  ];

  function renderSeminars() {
    var grid = document.querySelector('[data-conf2-seminar-grid]');
    if (!grid) return;

    seminars.forEach(function (title, index) {
      var label = document.createElement('label');
      label.className = 'conf2-seminar-item';
      label.innerHTML =
        '<input type="checkbox" name="seminar" value="' + index + '">' +
        '<span>' + title + '</span>';
      grid.appendChild(label);
    });
  }

  renderSeminars();
var importBtn = document.querySelector('[data-conf2-import]');
  if (importBtn) {
    importBtn.addEventListener('click', function () {
      alert('사전 참관등록 정보 불러오기 기능은 준비 중입니다.');
    });
  }

  var cancelBtn = document.querySelector('[data-conf2-cancel]');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', function () {
      window.location.href = 'schedule_1.html';
    });
  }

  var submitBtn = document.querySelector('[data-conf2-submit]');
  if (submitBtn) {
    submitBtn.addEventListener('click', function () {
      var checked = document.querySelectorAll('[name="seminar"]:checked');
      if (!checked.length) {
        alert('신청할 세미나를 1개 이상 선택해 주세요.');
        return;
      }
      alert('세미나 신청이 접수되었습니다. (서버 연동 예정)');
    });
  }
})();
