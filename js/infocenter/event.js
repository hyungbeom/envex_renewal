(function () {
  'use strict';

  var PAGE_SIZE = 11;
  var TOTAL_PAGES = 10;

  var eventTitles = [
    '[한국환경산업협회] ENVEX 2026 개막식 및 환경산업 네트워킹 행사 안내',
    '[KIWW 연계] 국제물산업전시회 연계 수처리 기술 세미나 개최 안내',
    '[한국환경산업협회] ENVEX 2026 환경기술 혁신 시상식 및 시연회 안내',
    '[KIWW 연계] 물·환경 융합 기술 교류회 및 기업 매칭 프로그램 안내',
    '[한국환경산업협회] ENVEX 2026 그린에너지 포럼 및 정책 토론회 개최',
    '[KIWW 연계] 해외 바이어 초청 수출상담회 및 네트워킹 데이 안내',
    '[한국환경산업협회] ENVEX 2026 환경교육 체험관 운영 및 참가 안내',
    '[KIWW 연계] 스마트 수자원 관리 기술 컨퍼런스 연계 행사 안내'
  ];

  var eventItems = [];

  (function buildItems() {
    var i;
    var title;
    for (i = 107; i >= 1; i -= 1) {
      if (i <= 8) {
        title = eventTitles[8 - i];
      } else if (i % 2 === 0) {
        title = '[한국환경산업협회] ENVEX 2026 부대행사 및 컨퍼런스 프로그램 안내 (' + i + ')';
      } else {
        title = '[KIWW 연계] 환경·물산업 연계 세미나 및 기업 매칭 행사 안내 (' + i + ')';
      }
      eventItems.push({
        no: i,
        title: title,
        date: '2026.03.08',
        views: Math.max(111717, 999999 - (107 - i) * 8123)
      });
    }
  })();

  var state = {
    page: 10,
    query: '',
    field: 'title'
  };

  var tbody = document.querySelector('[data-event-tbody]');
  var paginationEl = document.querySelector('[data-event-pagination]');
  var emptyEl = document.querySelector('[data-event-empty]');
  var searchForm = document.querySelector('[data-event-search]');
  var searchInput = document.querySelector('[data-event-search-input]');
  var searchField = document.querySelector('[data-event-search-field]');

  function formatViews(n) {
    return n.toLocaleString('ko-KR');
  }

  function getFilteredItems() {
    var q = state.query.trim().toLowerCase();
    if (!q) return eventItems.slice();
    return eventItems.filter(function (item) {
      var hay = (state.field === 'content' ? item.title + ' ' + (item.content || '') : item.title).toLowerCase();
      return hay.indexOf(q) !== -1;
    });
  }

  function getTotalPages(filtered) {
    if (state.query) {
      return Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    }
    return TOTAL_PAGES;
  }

  function getPageItems(filtered) {
    var totalPages = getTotalPages(filtered);

    if (state.query) {
      var start = (state.page - 1) * PAGE_SIZE;
      return filtered.slice(start, start + PAGE_SIZE);
    }

    if (state.page < totalPages) {
      var offset = (state.page - 1) * PAGE_SIZE;
      return filtered.slice(offset, offset + PAGE_SIZE);
    }

    var lastStart = (totalPages - 1) * PAGE_SIZE;
    return filtered.slice(lastStart);
  }

  function renderRow(item) {
    var tr = document.createElement('tr');

    var noCell = document.createElement('td');
    noCell.textContent = String(item.no);

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
    dateCell.textContent = item.date;

    var viewsCell = document.createElement('td');
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
        state.page = 10;
        render();
      }
    });
  }

  if (searchField) {
    searchField.addEventListener('change', function () {
      state.field = searchField.value;
    });
  }

  var scrollBtn = document.querySelector('[data-scroll-top]');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  render();
})();
