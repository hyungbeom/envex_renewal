(function () {
  'use strict';

  var seminarDays = [
    {
      id: '520',
      label: '5.20.(수)',
      items: [
        {
          time: '09:00~18:00',
          place: '전시장 내',
          title: 'ENVEX2026 참가기업 기술 발표회 - 3일간',
          org: '한국환경보전원',
          contact: '한국환경보전원 김세라 주임 02-3407-1542'
        },
        {
          time: '09:00~17:00',
          place: '컨퍼런스룸 327호',
          title: '2026년 측정대행업 CEO 교육 2기',
          org: '기후부/한국환경보전원(환경교육·사업정책실)',
          contact: '취합 중'
        },
        {
          time: '13:00~16:00',
          place: '컨퍼런스룸 308호',
          title: '2026년도 환경정책세미나 및 ESG 전문인력 실무교육',
          org: '한국환경보전원(환경연수처)',
          contact: '한국환경보전원 조현철 계장 02-3407-1558'
        },
        {
          time: '09:00~18:00',
          place: '컨퍼런스룸 301호',
          title: '[비즈니스 지원 프로그램] 수출 상담회 - 2일간',
          org: '한국환경보전원',
          contact: '취합 중'
        },
        {
          time: '09:00~12:00',
          place: '컨퍼런스룸 308호',
          title: '환경산업 혁신기술 교류 세미나',
          org: '한국환경보전원',
          contact: '취합 중'
        },
        {
          time: '13:30~17:00',
          place: '컨퍼런스룸 317호',
          title: '탄소중립 정책 및 기술 포럼',
          org: '기후에너지환경부',
          contact: '취합 중'
        },
        {
          time: '09:00~18:00',
          place: '컨퍼런스룸 328호',
          title: '(확인중) 국제 환경협력 세션',
          org: 'EU비즈니스 허브',
          contact: '취합 중'
        },
        {
          time: '14:00~17:00',
          place: '컨퍼런스룸 318호',
          title: '친환경 에너지 기술 설명회',
          org: '한국환경보전원',
          contact: '취합 중'
        }
      ]
    },
    {
      id: '521',
      label: '5.21.(목)',
      items: [
        {
          time: '09:00~18:00',
          place: '전시장 내',
          title: 'ENVEX2026 참가기업 기술 발표회 - 3일간',
          org: '한국환경보전원',
          contact: '한국환경보전원 김세라 주임 02-3407-1542'
        },
        {
          time: '09:00~18:00',
          place: '컨퍼런스룸 328호',
          title: '(확인중) - 3일간',
          org: 'EU비즈니스 허브',
          contact: '취합 중'
        },
        {
          time: '13:30~17:00',
          place: '컨퍼런스룸 301호',
          title: '제8회 한국실내공기포럼 - 『건강하고 쾌적한 삶!』을 위한 환경관리 제도 개선 방안',
          org: '(사) 한국실내환경협회, 한국환경정보연구센터',
          contact: '한국환경정보연구센터 이재성 국장 02-3407-1504'
        },
        {
          time: '09:00~18:00',
          place: '컨퍼런스룸 308호',
          title: '(확인중) 제1회 기후테크 x AI 융합 기술포럼',
          org: '기후테크AI융합진흥원',
          contact: '취합 중'
        },
        {
          time: '09:00~18:00',
          place: '컨퍼런스룸 300호',
          title: '2026 전기차 사용후 배터리 자원순환 기술 세미나',
          org: '세미나허브',
          contact: '세미나허브 김남용 매니저, 안보람 본부장 02-2088-6488'
        },
        {
          time: '13:30~17:00',
          place: '컨퍼런스룸 317호',
          title: '환경R&D 기술이전 설명회 In ENVEX',
          org: '기후부/한국환경산업기술원 (기술산업기획실)',
          contact: '취합 중'
        },
        {
          time: '09:00~16:30',
          place: '컨퍼런스룸 327호',
          title: '2026년도 중소환경기업·탄소중립 사업화 지원사업 2차 코칭데이(자금 확보등)',
          org: '한국산업기술진흥원',
          contact: '취합 중'
        },
        {
          time: '13:30~17:00',
          place: '컨퍼런스룸 318호',
          title: '환경R&D 기술이전 설명회 In ENVEX',
          org: '기후부/한국환경산업기술원 (기술산업기획실)',
          contact: '취합 중'
        }
      ]
    },
    {
      id: '522',
      label: '5.22.(금)',
      items: [
        {
          time: '09:00~18:00',
          place: '전시장 내',
          title: 'ENVEX2026 참가기업 기술 발표회 - 3일간',
          org: '한국환경보전원',
          contact: '한국환경보전원 김세라 주임 02-3407-1542'
        },
        {
          time: '09:00~18:00',
          place: '컨퍼런스룸 328호',
          title: '(확인중) - 3일간',
          org: 'EU비즈니스 허브',
          contact: '취합 중'
        },
        {
          time: '13:30~17:00',
          place: '컨퍼런스룸 301호',
          title: '제8회 한국실내공기포럼 - 『건강하고 쾌적한 삶!』을 위한 환경관리 제도 개선 방안',
          org: '(사) 한국실내환경협회, 한국환경정보연구센터',
          contact: '한국환경정보연구센터 이재성 국장 02-3407-1504'
        },
        {
          time: '09:00~18:00',
          place: '컨퍼런스룸 308호',
          title: '(확인중) 제1회 기후테크 x AI 융합 기술포럼',
          org: '기후테크AI융합진흥원',
          contact: '취합 중'
        },
        {
          time: '09:00~18:00',
          place: '컨퍼런스룸 300호',
          title: '2026 전기차 사용후 배터리 자원순환 기술 세미나',
          org: '세미나허브',
          contact: '세미나허브 김남용 매니저, 안보람 본부장 02-2088-6488'
        },
        {
          time: '13:30~17:00',
          place: '컨퍼런스룸 317호',
          title: '환경R&D 기술이전 설명회 In ENVEX',
          org: '기후부/한국환경산업기술원 (기술산업기획실)',
          contact: '취합 중'
        },
        {
          time: '09:00~16:30',
          place: '컨퍼런스룸 327호',
          title: '2026년도 중소환경기업·탄소중립 사업화 지원사업 2차 코칭데이(자금 확보등)',
          org: '한국산업기술진흥원',
          contact: '취합 중'
        },
        {
          time: '13:30~17:00',
          place: '컨퍼런스룸 318호',
          title: '환경R&D 기술이전 설명회 In ENVEX',
          org: '기후부/한국환경산업기술원 (기술산업기획실)',
          contact: '취합 중'
        }
      ]
    }
  ];

  var businessPrograms = [
    {
      datetime: '2026. 5. 20. (수) ~ 21.(목) 9:00~17:30',
      place: '컨퍼런스룸 301호',
      title: '참가기업 기술발표회',
      desc: '취합중',
      desc2: '취합중'
    },
    {
      datetime: '2026. 5. 20. (수) 13:00~15:00',
      place: '컨퍼런스룸 317호',
      title: '제22회 한·중 환경기업 기술협력 교류회',
      desc: '참가기업 10개사, 중국 의흥시 환경기업 10개사',
      desc2: '국내 중소환경기업 기술 발표 및 중국 환경기업과의 1:1 현장 상담'
    },
    {
      datetime: '2026. 5. 21. (목) 9:00~12:00',
      place: '컨퍼런스룸 317호',
      title: '[구매상담회] 한국환경공단',
      desc: '취합중',
      desc2: '취합중'
    },
    {
      datetime: '2026. 5. 21. (목) 9:00~12:00',
      place: '컨퍼런스룸 318호',
      title: '[구매상담회] 수자원공사',
      desc: '취합중',
      desc2: '취합중'
    },
    {
      datetime: '2026. 5. 21. (목) 9:00~12:00',
      place: '컨퍼런스룸 308호',
      title: '[비즈니스 지원 프로그램] VC 초청 투자 상담회',
      desc: '취합중',
      desc2: '환경산업 및 탄소중립 기술 보유 유망 중소기업 및 투자자간 기술 및 비즈니스 교류를 통해 성장 가속화 지원'
    },
    {
      datetime: '2026. 5. 22. (금) 9:00~12:00',
      place: '컨퍼런스룸 301호',
      title: '내수 구매 상담회',
      desc: '취합중',
      desc2: '취합중'
    },
    {
      datetime: '2026. 5. 22. (금) 9:00~12:00',
      place: '컨퍼런스룸 317호',
      title: '[구매상담회] 서울시',
      desc: '취합중',
      desc2: '취합중'
    },
    {
      datetime: '2026. 5. 22. (금) 9:00~12:00',
      place: '컨퍼런스룸 318호',
      title: '[구매상담회] 경기도/서울물재생시설공단',
      desc: '취합중',
      desc2: '취합중'
    }
  ];

  function createSeminarCard(item) {
    var card = document.createElement('article');
    card.className = 'conf-card';
    card.innerHTML =
      '<div class="conf-card__top">' +
        '<div class="conf-card__meta"><span>' + item.time + '</span><span>' + item.place + '</span></div>' +
        '<h3 class="conf-card__name">' + item.title + '</h3>' +
        '<p class="conf-card__org">' + item.org + '</p>' +
      '</div>' +
      '<div class="conf-card__bottom">' +
        '<p class="conf-card__inquiry-label">문의 및 신청</p>' +
        '<p class="conf-card__contact">' + item.contact + '</p>' +
        '<button type="button" class="conf-card__apply" data-conf-apply>참가신청 →</button>' +
      '</div>';
    return card;
  }

  function createBizCard(item) {
    var card = document.createElement('article');
    card.className = 'conf-biz-card';
    card.innerHTML =
      '<div class="conf-biz-card__meta">' +
        '<span>' + item.datetime + '</span>' +
        '<span>' + item.place + '</span>' +
      '</div>' +
      '<h3 class="conf-biz-card__name">' + item.title + '</h3>' +
      '<p class="conf-biz-card__desc">' + item.desc + '</p>' +
      '<p class="conf-biz-card__desc2">' + item.desc2 + '</p>';
    return card;
  }

  function renderSchedules() {
    seminarDays.forEach(function (day) {
      var grid = document.querySelector('[data-conf-grid="' + day.id + '"]');
      if (!grid) return;
      day.items.forEach(function (item) {
        grid.appendChild(createSeminarCard(item));
      });
    });

    var bizGrid = document.querySelector('[data-conf-biz-grid]');
    if (bizGrid) {
      businessPrograms.forEach(function (item) {
        bizGrid.appendChild(createBizCard(item));
      });
    }
  }

  renderSchedules();

  document.addEventListener('click', function (e) {
    var applyBtn = e.target.closest('[data-conf-apply]');
    if (!applyBtn) return;

    var card = applyBtn.closest('.conf-card');
    var seminar = {
      title: '',
      time: '',
      place: '',
      org: ''
    };

    if (card) {
      var nameEl = card.querySelector('.conf-card__name');
      var metaEl = card.querySelector('.conf-card__meta');
      var orgEl = card.querySelector('.conf-card__org');
      if (nameEl) seminar.title = nameEl.textContent.trim();
      if (orgEl) seminar.org = orgEl.textContent.trim();
      if (metaEl) {
        var spans = metaEl.querySelectorAll('span');
        if (spans[0]) seminar.time = spans[0].textContent.trim();
        if (spans[1]) seminar.place = spans[1].textContent.trim();
      }
    }

    try {
      window.sessionStorage.setItem('envex_conf_seminar', JSON.stringify(seminar));
    } catch (err) {
      // storage 실패 시에도 이동
    }

    window.location.href = 'schedule_1.html';
  });

  var checkModal = document.getElementById('conf-check-modal');
  var checkBtn = document.querySelector('[data-conf-check]');
  var checkForm = document.querySelector('[data-conf-check-form]');
  var checkStepForm = document.querySelector('[data-conf-check-step="form"]');
  var checkStepResult = document.querySelector('[data-conf-check-step="result"]');
  var resultDoneBtn = document.querySelector('[data-conf-result-done]');

  var mockSeminarResult = {
    name: '담수생물자원 기반 친환경 소재 개발과 환경 정화 기술 개발 연구 (담수 생물을 활용한 환경 문제 해결 전략)',
    time: '13:00~16:00',
    place: '컨퍼런스룸 300호',
    tel: '02-387-7282 / 010-2200-9104',
    contact: '사단법인 한국음식물감량기협회 박금숙 과장'
  };

  function showCheckStep(step) {
    if (checkStepForm) {
      checkStepForm.hidden = step !== 'form';
    }
    if (checkStepResult) {
      checkStepResult.hidden = step !== 'result';
    }
  }

  function resetCheckModal() {
    showCheckStep('form');
    if (checkForm) {
      checkForm.reset();
    }
  }

  function fillCheckResult(data) {
    var nameEl = document.querySelector('[data-conf-result-name]');
    var timeEl = document.querySelector('[data-conf-result-time]');
    var placeEl = document.querySelector('[data-conf-result-place]');
    var contactEl = document.querySelector('[data-conf-result-contact]');

    if (nameEl) nameEl.textContent = data.name;
    if (timeEl) timeEl.textContent = data.time;
    if (placeEl) placeEl.textContent = data.place;
    if (contactEl) {
      contactEl.innerHTML =
        '<span class="conf-check-result__tel">' + data.tel + '</span>' +
        '<span class="conf-check-result__person">' + data.contact + '</span>';
    }
  }

  function openCheckModal() {
    if (!checkModal) return;
    resetCheckModal();
    checkModal._lastFocused = document.activeElement;
    checkModal.hidden = false;
    checkModal.classList.add('is-open');
    checkModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('guide-modal-open');
    var closeBtn = checkModal.querySelector('.guide-modal__close-x');
    if (closeBtn) closeBtn.focus();
  }

  function closeCheckModal() {
    if (!checkModal) return;
    checkModal.classList.remove('is-open');
    checkModal.hidden = true;
    checkModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('guide-modal-open');
    resetCheckModal();
    if (checkModal._lastFocused && typeof checkModal._lastFocused.focus === 'function') {
      checkModal._lastFocused.focus();
    }
  }

  if (checkBtn && checkModal) {
    checkBtn.addEventListener('click', function (e) {
      e.preventDefault();
      openCheckModal();
    });

    checkModal.querySelectorAll('[data-conf-modal-close]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        closeCheckModal();
      });
    });

    checkModal.addEventListener('click', function (e) {
      if (e.target === checkModal.querySelector('.guide-modal__overlay')) {
        closeCheckModal();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && checkModal && checkModal.classList.contains('is-open')) {
      closeCheckModal();
    }
  });

  if (checkForm) {
    checkForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('conf-check-name');
      var phone = document.getElementById('conf-check-phone');
      if (!name || !name.value.trim()) {
        alert('이름을 입력해주세요.');
        if (name) name.focus();
        return;
      }
      if (!phone || !phone.value.trim()) {
        alert('휴대폰번호를 입력해주세요.');
        if (phone) phone.focus();
        return;
      }
      fillCheckResult(mockSeminarResult);
      showCheckStep('result');
    });
  }

  if (resultDoneBtn) {
    resultDoneBtn.addEventListener('click', function () {
      closeCheckModal();
    });
  }
})();
