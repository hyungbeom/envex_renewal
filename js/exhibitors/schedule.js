(function () {
  'use strict';

  var scheduleSteps = [
    { no: '01', type: 'required', name: '참가신청서 제출(온라인)', desc: '', date: '' },
    { no: '02', type: 'required', name: '부스비 계약금 50% 납입', desc: '', date: '' },
    { no: '03', type: 'required', name: '부대시설 신청서 제출', desc: '', date: '2026. 03. 25.(수)' },
    { no: '04', type: 'required', name: '온라인 전시 신청서 제출', desc: '', date: '2026. 03. 25.(수)' },
    { no: '05', type: 'required', name: '출품물 신고서 제출', desc: '', date: '2026. 03. 25.(수)' },
    { no: '06', type: 'required', name: '부스비 잔금 납입(완납)', desc: '', date: '2026. 04. 03.(금)' },
    { no: '07', type: 'required', name: '참가기업 사전설명회 개최', desc: '', date: '2026. 04월 1주 예정' },
    { no: '08', type: 'optional', name: '보세전시품 신고서 제출', desc: '', date: '2026. 04. 08.(수)' },
    { no: '09', type: 'optional', name: '자체시공도면 및 작업신청서 제출', desc: '', date: '2026. 04. 08.(수)' },
    { no: '10', type: 'optional', name: '위험물반입(반출) 신청서 제출', desc: '', date: '2026. 04. 08.(수)' },
    { no: '11', type: 'optional', name: '전시장 내부 광고 신청서 제출', desc: '', date: '2026. 04. 15.(수)' },
    { no: '12', type: 'optional', name: '전시장 내부광고 파일 (4m x 3m) 제출', desc: '', date: '2026. 04. 29.(수)' },
    { no: '13', type: 'optional', name: '전시장 시간외 사용 신청서 제출', desc: '', date: '' },
    { no: '14', type: 'required', name: '출입증 신청서 제출', desc: '', date: '2026. 05. 14.(목)' },
    { no: '15', type: 'required', name: '전시품반입(반출)신청서 제출', desc: '', date: '2026. 05. 14.(목)' },
    { no: '16', type: 'optional', name: '기본 및 독립부스공사 설치', desc: '', date: '2026. 05. 18.(월) ~ 05. 19.(화)' },
    { no: '17', type: 'onsite', name: '출입증 발급', desc: '* 전시기간중 추가발급 가능', date: '2026. 05. 18.(월) ~ 05. 19.(화)' },
    { no: '18', type: 'onsite', name: '전시품 반입', desc: '독립부스 참가기업', date: '2026. 05. 18.(월) ~ 05. 19.(화)' },
    { no: '19', type: 'onsite', name: '전시품 반입', desc: '기본부스 참가기업', date: '2026. 05. 19.(화)' },
    { no: '20', type: 'onsite', name: '개막식', desc: '', date: '2026. 05. 20.(수) 예정' },
    { no: '21', type: 'onsite', name: '전시회 진행', desc: '', date: '2026. 05. 20.(수) ~ 05. 22.(금)' },
    { no: '22', type: 'onsite', name: '부스철거', desc: '* 전시종료 당일철거', date: '2026. 05. 22.(금)' }
  ];

  function renderScheduleGrid() {
    var grid = document.querySelector('[data-schedule-grid]');
    if (!grid) return;

    scheduleSteps.forEach(function (step) {
      var li = document.createElement('li');
      li.className = 'schedule-card';
      li.setAttribute('data-step', step.no);
      li.setAttribute('data-type', step.type);

      var badge = document.createElement('div');
      badge.className = 'schedule-card__badge schedule-card__badge--' + step.type;
      badge.textContent = step.no;

      var content = document.createElement('div');
      content.className = 'schedule-card__content';

      var name = document.createElement('div');
      name.className = 'schedule-card__name';
      name.textContent = step.name;
      content.appendChild(name);

      if (step.desc) {
        var desc = document.createElement('div');
        desc.className = 'schedule-card__desc';
        desc.textContent = step.desc;
        content.appendChild(desc);
      }

      if (step.date) {
        var date = document.createElement('div');
        date.className = 'schedule-card__date';
        date.textContent = step.date;
        content.appendChild(date);
      }

      li.appendChild(badge);
      li.appendChild(content);
      grid.appendChild(li);
    });
  }

  renderScheduleGrid();

  var scrollBtn = document.querySelector('[data-scroll-top]');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
