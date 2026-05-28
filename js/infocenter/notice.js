(function () {
  'use strict';

  var PAGE_SIZE = 11;
  var TOTAL_PAGES = 10;

  var pinnedNotice = {
    pinned: true,
    title: '2026년 지자체별 중소기업 국내전시회 참가비 지원사업 안내(02. 25. 기준)',
    date: '2026.03.08',
    views: 37276
  };

  var noticeItems = [
    { no: 112, title: '[전시회 안내] ENVEX 2026 참관객·업무·행사장 정보 안내', date: '2026.03.08', views: 999999 },
    { no: 111, title: '[비즈니스 지원행사] 25년 ENVEX 현장구매상담 참석 담당자 모집', date: '2026.03.08', views: 111717 },
    { no: 110, title: '[전시회 안내] ENVEX 2026 참가·지정 협력업체 주요 일정 및 안내', date: '2026.03.08', views: 98765 },
    { no: 109, title: '[전시회 안내] ENVEX 2026 접수관리 화면에서 자주 발생하는 업무별 질문 및 처리 안내', date: '2026.03.08', views: 85432 },
    { no: 108, title: '2026년 환경 분야 R&D 우수성과 확산 및 효율적인 정책지원 확대를 위한 ENVEX 2026 안내', date: '2026.03.08', views: 72341 },
    { no: 107, title: '(954.9KB) [보도자료] 코엑스, \'2025 환경박람회\' 개최…7일간 한 자리에 모인다', date: '2026.03.08', views: 65432 },
    { no: 106, title: '[개막보도자료] 2025 국제환경·에너지 산업전시회 ENVEX, COEX 개막', date: '2026.03.08', views: 54321 },
    { no: 105, title: '[비즈니스 지원행사] 25년 ENVEX 현장구매상담 참석기업 모집 안내', date: '2026.03.08', views: 43210 },
    { no: 104, title: '4월 \'2025 국제환경·에너지 산업전시회 ENVEX\' 소개', date: '2026.03.08', views: 32109 },
    { no: 103, title: '[전시회 안내] ENVEX 2025 전시장 대관 공사 안내', date: '2026.03.08', views: 21098 },
    { no: 102, title: '[전시회 안내] ENVEX 2026 참가업체 부스배치 확정 안내', date: '2026.03.07', views: 19876 },
    { no: 101, title: '[비즈니스 지원행사] 해외 바이어 초청 수출상담회 참가기업 모집', date: '2026.03.07', views: 18765 },
    { no: 100, title: '[홍보자료] ENVEX 2026 공식 브로슈어 다운로드 안내', date: '2026.03.06', views: 17654 },
    { no: 99, title: '[FAQ] 사전등록 및 현장 입장 관련 자주 묻는 질문', date: '2026.03.06', views: 16543 },
    { no: 98, title: '[전시회 안내] ENVEX 2026 컨퍼런스룸 예약 및 이용 안내', date: '2026.03.05', views: 15432 }
  ];

  var state = {
    page: 1,
    query: '',
    field: 'title'
  };

  var tbody = document.querySelector('[data-notice-tbody]');
  var paginationEl = document.querySelector('[data-notice-pagination]');
  var emptyEl = document.querySelector('[data-notice-empty]');
  var searchForm = document.querySelector('[data-notice-search]');
  var searchInput = document.querySelector('[data-notice-search-input]');
  var searchField = document.querySelector('[data-notice-search-field]');

  function formatViews(n) {
    return n.toLocaleString('ko-KR');
  }

  function getFilteredItems() {
    var q = state.query.trim().toLowerCase();
    if (!q) return noticeItems.slice();
    return noticeItems.filter(function (item) {
      var hay = (state.field === 'content' ? item.title + ' ' + (item.content || '') : item.title).toLowerCase();
      return hay.indexOf(q) !== -1;
    });
  }

  function getPageItems(filtered) {
    var rows = [];
    var start;
    var count;

    if (!state.query && state.page === 1) {
      rows.push(pinnedNotice);
      start = 0;
      count = 10;
    } else if (!state.query) {
      start = 10 + (state.page - 2) * PAGE_SIZE;
      count = PAGE_SIZE;
    } else {
      start = (state.page - 1) * PAGE_SIZE;
      count = PAGE_SIZE;
    }

    filtered.slice(start, start + count).forEach(function (item) {
      rows.push(item);
    });

    return rows;
  }

  function getTotalPages(filtered) {
    if (state.query) {
      return Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    }
    if (filtered.length <= 10) {
      return 1;
    }
    var pages = 1 + Math.ceil((filtered.length - 10) / PAGE_SIZE);
    return Math.max(pages, TOTAL_PAGES);
  }

  function renderRow(item) {
    var tr = document.createElement('tr');
    if (item.pinned) {
      tr.className = 'is-pinned';
    }

    var noCell = document.createElement('td');
    if (item.pinned) {
      noCell.innerHTML = '<span class="notice-badge">공지</span>';
    } else {
      noCell.textContent = String(item.no);
    }

    var titleCell = document.createElement('td');
    titleCell.className = 'notice-table__title-cell';
    var link = document.createElement('a');
    link.href = '#';
    link.className = 'notice-table__link';
    link.textContent = item.title;
    link.addEventListener('click', function (e) {
      e.preventDefault();
    });
    titleCell.appendChild(link);

    var dateCell = document.createElement('td');
    dateCell.className = 'notice-table__date-cell';
    dateCell.textContent = item.date;

    var viewsCell = document.createElement('td');
    viewsCell.className = 'notice-table__views-cell';
    viewsCell.textContent = formatViews(item.views);

    tr.appendChild(noCell);
    tr.appendChild(titleCell);
    tr.appendChild(dateCell);
    tr.appendChild(viewsCell);
    return tr;
  }

  function buildPageNumbers(total) {
    if (total <= 7) {
      var all = [];
      for (var i = 1; i <= total; i++) all.push(i);
      return all;
    }
    return [1, 2, 3, 4, 5, '…', total - 1, total];
  }

  function renderPagination(total) {
    if (!paginationEl) return;
    paginationEl.innerHTML = '';

    var prev = document.createElement('button');
    prev.type = 'button';
    prev.className = 'notice-pagination__btn';
    prev.textContent = '<';
    prev.setAttribute('aria-label', '이전 페이지');
    prev.disabled = state.page <= 1;
    prev.addEventListener('click', function () {
      if (state.page > 1) {
        state.page -= 1;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    paginationEl.appendChild(prev);

    buildPageNumbers(total).forEach(function (num) {
      if (num === '…') {
        var ell = document.createElement('span');
        ell.className = 'notice-pagination__ellipsis';
        ell.textContent = '…';
        ell.setAttribute('aria-hidden', 'true');
        paginationEl.appendChild(ell);
        return;
      }

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'notice-pagination__page' + (num === state.page ? ' is-active' : '');
      btn.textContent = String(num);
      btn.setAttribute('aria-label', num + '페이지');
      if (num === state.page) btn.setAttribute('aria-current', 'page');
      btn.addEventListener('click', function () {
        state.page = num;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      paginationEl.appendChild(btn);
    });

    var next = document.createElement('button');
    next.type = 'button';
    next.className = 'notice-pagination__btn';
    next.textContent = '>';
    next.setAttribute('aria-label', '다음 페이지');
    next.disabled = state.page >= total;
    next.addEventListener('click', function () {
      if (state.page < total) {
        state.page += 1;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    paginationEl.appendChild(next);
  }

  function render() {
    if (!tbody) return;

    var filtered = getFilteredItems();
    var totalPages = getTotalPages(filtered);

    if (state.page > totalPages) state.page = totalPages;
    if (state.page < 1) state.page = 1;

    var rows = getPageItems(filtered);
    tbody.innerHTML = '';

    if (rows.length === 0) {
      if (emptyEl) emptyEl.hidden = false;
    } else {
      if (emptyEl) emptyEl.hidden = true;
      rows.forEach(function (item) {
        tbody.appendChild(renderRow(item));
      });
    }

    renderPagination(totalPages);
  }

  if (searchForm) {
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      state.query = searchInput ? searchInput.value : '';
      state.field = searchField ? searchField.value : 'title';
      state.page = 1;
      render();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('search', function () {
      if (searchInput.value === '') {
        state.query = '';
        state.page = 1;
        render();
      }
    });
  }

  if (searchField) {
    searchField.addEventListener('change', function () {
      state.field = searchField.value;
    });
  }
render();
})();
