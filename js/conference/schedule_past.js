(function () {
  'use strict';

  var defaultDetail = {
    meta: '2025. 05. 20.(화) ~ 05. 22.(목) | 전시장 컨퍼런스룸',
    host: '한국환경보전원',
    scale: '취합 중',
    content: '취합 중',
    result: '취합 중'
  };

  var pastDetails = {
    '한국수자원공사 물산업 중소기업 구매상담회': {
      meta: '2025. 06. 12.(목), 10:00-12:00 | 컨퍼런스룸 318호',
      host: '한국수자원공사, 한국환경보전원',
      scale:
        '구매 담당자 : 한국수자원공사 물 관련 설비 구매 담당자 10명<br>' +
        '상담기업 : (주)고려기술, (주)시노텍스 등 국내기업 29개사',
      content: '서울시 산하 공공기관 환경산업 분야 구매 담당자와 1:1 사전 매칭 상담',
      result: '펌프, 밸브, 수처리장비, 수질 측정 및 TMS 설비 등 상담 추진, 상담건수 39건, 상담액 71억 원'
    },
    '한국환경공단 환경산업 구매상담회': {
      meta: '2025. 05. 21.(수), 09:00-12:00 | 컨퍼런스룸 317호',
      host: '한국환경공단, 한국환경보전원',
      scale: '구매 담당자 및 환경산업 중소기업 참가',
      content: '환경산업 분야 공공 구매 담당자와 참가기업 간 1:1 구매상담',
      result: '상담건수 및 상담액 취합 중'
    },
    '제19회 한·중 환경기업 기술협력 교류회': {
      meta: '2025. 05. 20.(화), 13:00-15:00 | 컨퍼런스룸 317호',
      host: '한국환경보전원',
      scale: '참가기업 10개사, 중국 의흥시 환경기업 10개사',
      content: '국내 중소환경기업 기술 발표 및 중국 환경기업과의 1:1 현장 상담',
      result: '기술교류 및 협력 MOU 추진'
    }
  };

  var pastSections = [
    {
      title: '해외 비즈니스 지원 프로그램',
      gridClass: 'conf-past-grid--2',
      items: [
        '제19회 한·중 환경기업 기술협력 교류회',
        '개발도상국 환경 분야 진출 B2G 자문상담회'
      ]
    },
    {
      title: '국내 비즈니스 지원 프로그램',
      gridClass: '',
      items: [
        '한국환경공단 환경산업 구매상담회',
        '한국수자원공사 물산업 중소기업 구매상담회',
        '환경산업&탄소중립 공공 구매상담회',
        '경기도 환경산업 공공 구매상담회',
        '개발도상국 환경 분야 진출 B2G 자문상담회',
        '허청 중소환경기업 지식재산권 상담',
        '서울물재생시설공단 물산업 구매상담회'
      ]
    },
    {
      title: '동시 개최 행사',
      gridClass: '',
      items: [
        '2025 글로벌 그린 허브 코리아 (GGHK2025)',
        '2025년 통합환경관리 컨퍼런스',
        '세미나 및 포럼'
      ]
    }
  ];

  var detailModal = document.getElementById('conf-past-detail-modal');

  function getDetail(title) {
    return pastDetails[title] || defaultDetail;
  }

  function fillDetailModal(title) {
    var data = getDetail(title);
    var titleEl = document.querySelector('[data-past-detail-title]');
    var metaEl = document.querySelector('[data-past-detail-meta]');
    var hostEl = document.querySelector('[data-past-detail-host]');
    var scaleEl = document.querySelector('[data-past-detail-scale]');
    var contentEl = document.querySelector('[data-past-detail-content]');
    var resultEl = document.querySelector('[data-past-detail-result]');

    if (titleEl) titleEl.textContent = title;
    if (metaEl) metaEl.textContent = data.meta;
    if (hostEl) hostEl.textContent = data.host;
    if (scaleEl) scaleEl.innerHTML = data.scale;
    if (contentEl) contentEl.textContent = data.content;
    if (resultEl) resultEl.textContent = data.result;
  }

  function openDetailModal(title) {
    if (!detailModal) return;
    fillDetailModal(title);
    detailModal._lastFocused = document.activeElement;
    detailModal.hidden = false;
    detailModal.classList.add('is-open');
    detailModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('conf-past-detail-open');
    var closeBtn = detailModal.querySelector('.conf-past-detail-modal__close-x');
    if (closeBtn) closeBtn.focus();
  }

  function closeDetailModal() {
    if (!detailModal) return;
    detailModal.classList.remove('is-open');
    detailModal.hidden = true;
    detailModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('conf-past-detail-open');
    if (detailModal._lastFocused && typeof detailModal._lastFocused.focus === 'function') {
      detailModal._lastFocused.focus();
    }
  }

  function createPastCard(title) {
    var card = document.createElement('button');
    card.type = 'button';
    card.className = 'conf-past-card';
    card.innerHTML =
      '<div class="conf-past-card__body"><h3 class="conf-past-card__title">' + title + '</h3></div>' +
      '<div class="conf-past-card__foot">+ 자세히 보기</div>';
    card.addEventListener('click', function () {
      openDetailModal(title);
    });
    return card;
  }

  function renderPastResults() {
    var wrap = document.querySelector('[data-conf-past-sections]');
    if (!wrap) return;

    pastSections.forEach(function (section) {
      var block = document.createElement('section');
      block.className = 'conf-past-section';

      var gridClass = 'conf-past-grid' + (section.gridClass ? ' ' + section.gridClass : '');

      block.innerHTML = '<h3 class="conf-past-section__title">' + section.title + '</h3>';
      var grid = document.createElement('div');
      grid.className = gridClass;
      section.items.forEach(function (title) {
        grid.appendChild(createPastCard(title));
      });
      block.appendChild(grid);
      wrap.appendChild(block);
    });
  }

  renderPastResults();

  if (detailModal) {
    detailModal.querySelectorAll('[data-conf-past-detail-close]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        closeDetailModal();
      });
    });

    detailModal.addEventListener('click', function (e) {
      if (e.target === detailModal.querySelector('.conf-past-detail-modal__overlay')) {
        closeDetailModal();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && detailModal && detailModal.classList.contains('is-open')) {
      closeDetailModal();
    }
  });

  var refLink = document.querySelector('[data-conf-past-ref]');
  if (refLink) {
    refLink.addEventListener('click', function (e) {
      var target = document.getElementById('past-results');
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  var printBtn = document.querySelector('[data-conf-past-print]');
  if (printBtn) {
    printBtn.addEventListener('click', function () {
      window.print();
    });
  }

  var shareBtn = document.querySelector('[data-conf-past-share]');
  if (shareBtn) {
    shareBtn.addEventListener('click', function () {
      if (navigator.share) {
        navigator.share({
          title: document.title,
          url: window.location.href
        }).catch(function () {});
      } else {
        alert('공유 기능은 준비 중입니다.');
      }
    });
  }

  var scrollBtn = document.querySelector('[data-scroll-top]');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
