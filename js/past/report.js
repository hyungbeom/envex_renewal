(function () {
  'use strict';

  var BAR_COLORS = ['#c5cae9', '#90caf9', '#42a5f5', '#1e88e5', '#1565c0', '#0d47a1', '#263238', '#111'];
  var DONUT_COLORS = ['#bbdefb', '#64b5f6', '#1e88e5', '#1565c0', '#0d47a1'];

  var reports = {
    '2025': {
      summary: {
        name: '제46회 국제환경산업기술&그린에너지전 / ENVEX2025',
        place: '코엑스(COEX) A홀',
        date: '2025. 06. 11.(수) ~ 06. 13.(금)',
        exhibitors: { main: '총 13개국 262개 기업 626부스', sub: '국내 : 188개 기업, 해외 : 74개 기업' },
        visitors: { main: '총 44,969명', sub: '국내 : 44,335명, 해외 : 634명' }
      },
      countries: [
        [['대한민국', '188'], ['중국', '28'], ['독일', '17'], ['미국', '10'], ['일본', '6']],
        [['스위스', '3'], ['노르웨이', '2'], ['이탈리아', '2'], ['스웨덴', '1'], ['영국', '1']],
        [['오스트리아', '1'], ['프랑스', '1'], ['호주', '1'], ['UN', '1'], ['', '']]
      ],
      countryTotal: '총 13개국 262기업',
      purpose: {
        lead: '응답기업 대부분이 바이어 접촉 및 잠재 고객 발굴, 신제품 소개 / 시장반응 확인 등을 주요 목적으로 참가',
        items: [
          { label: '바이어 접촉 및 잠재 고객 발굴', pct: 68.6 },
          { label: '신제품 소개 / 시장반응 확인', pct: 60.8 },
          { label: '기업 및 제품 이미지 제고', pct: 56.9 },
          { label: '현장 상담 및 계약(판매)', pct: 43.1 },
          { label: '기존 거래업체와의 관계 유지 및 개선', pct: 29.4 },
          { label: '경쟁사 정보 수집 및 시장 조사', pct: 28.4 },
          { label: '회사 직원들의 마케팅 능력 향상', pct: 13.8 },
          { label: '기타', pct: 1.0 }
        ]
      },
      participation: {
        lead: 'ENVEX 2회 이상 참가기업은 76.5%로 국내 무역 전시회 평균 재참가율(60%) 대비 16.5% 높은 편임',
        items: [
          { label: '1회', pct: 23.5 },
          { label: '2~3회', pct: 31.4 },
          { label: '4~5회', pct: 19.6 },
          { label: '6~10회', pct: 13.7 },
          { label: '10회 이상', pct: 11.8 }
        ]
      },
      visitors: {
        total: '참관객 분석 총 44,969명(국내 44,335명 / 해외 634명)',
        purposeLead: '국내기술 구매, 시장조사, 자료수집 등이 주요 참관 목적',
        purpose: [
          { label: '국내기술구매', pct: 39.3, color: '#c5cae9' },
          { label: '시장조사', pct: 27.4, color: '#42a5f5' },
          { label: '자료수집', pct: 15.8, color: '#1e88e5' },
          { label: '일반관람', pct: 9.3, color: '#0d47a1' },
          { label: '해외기술구매', pct: 1.6, color: '#e8eaf6' },
          { label: '기타', pct: 6.6, color: '#263238' }
        ],
        interestLead: '수질(17.3%), 친환경 에너지(15.0%), 대기·폐기물/재활용(13.3%) 순으로 관심 높음',
        interestTop: [
          { name: '수질', pct: '17.2%', bg: '#0d47a1' },
          { name: '친환경 에너지', pct: '15.0%', bg: '#1e88e5' },
          { name: '폐기물/재활용', pct: '13.3%', bg: '#42a5f5' },
          { name: '대기', pct: '13.3%', bg: '#c5cae9', dark: true }
        ],
        interestRest: [
          ['7.1%', '기타'], ['7.0%', '환경경영'], ['6.7%', '친환경 상품'], ['6.2%', '계측기/분석기'],
          ['3.9%', '소음/진동'], ['2.8%', '정책홍보'], ['2.6%', '탄소저감'], ['2.2%', '토양'],
          ['1.5%', '자원순환'], ['1.4%', '수소저장/이송/충전']
        ]
      },
      domesticPrograms: [
        '2025 글로벌 그린 허브 코리아 발주처 & 바이어 1:1 상담회(상담 233건, 상담액 5,397억원)',
        '제19회 한·중 환경기업 기술협력 교류회(상담 13건, 상담액 약 361억원)',
        '개발도상국 환경 분야 진출 B2G 자문상담회(상담 53건)',
        '한국환경공단 환경산업 구매상담회(상담 72건, 상담액 약 34억원)',
        '한국수자원공사 물산업 중소기업 구매상담회(상담 39건, 상담액 약 71억원)',
        '서울물재생시설공단 물산업 구매상담회(상담 19건, 상담액 약 37억원)',
        '환경산업&탄소중립 공공 구매상담회(상담 51건, 상담액 약 9억원)',
        '경기도 환경산업 공공 구매상담회(상담 42건, 상담액 약 32억원)'
      ],
      supportPrograms: [
        {
          title: '참가기업 홍보지원 서비스',
          subs: [
            '공식 미디어파트너 활용한 사전 및 현장 기사보도 지원(총 107건)',
            '사전 스튜디오 인터뷰 및 전시기간 영상취재 진행하여 참가기업 만족도 제고(총 102건)',
            'ENVEX뉴스레터, 공식블로그, 유튜브, 인스타그램을 통해 참가기업 홍보'
          ]
        },
        '신기술보유 벤처 및 스타트업 기업(22개) 부스 참가 지원',
        '전시기간 참가기업 기술 발표회 개최 지원(27개 기업)',
        '온라인 전시서비스 지원으로 9,124여 명(6월기준) 온라인 전시관 관람',
        '우수환경기업 대상 환경부 장관 표창(3개 기업) 및 한국환경보전원장상(4개 기업) 수여'
      ],
      overseas: [
        '항공 및 숙박지원(29명)',
        '홈투어 제공(50개 기업) 및 통역지원센터 운영'
      ],
      promotion: {
        title: '홍보결과',
        sub: '홍보 및 보도실적 : 총 890건',
        items: [
          '유튜브 영상게재 108건, 영상뉴스 2건, 기사보도 378건, 일간지·전문지 광고 142건, 온라인홍보(블로그, 인스타그램 등) 188건, 숏폼 30건, 뉴스레터 42건',
          '무료초대권 202,000매 배포, 공공 바이어 및 참관객 사전등록 이벤트 진행 등'
        ]
      },
      seminar: {
        title: '세미나 및 포럼',
        items: [
          '참가기업 기술 발표회, 해외 환경시장 투자설명회, 환경정책설명회 및 최신기술 발표회, 개도국 환경시장 진출전략 세미나 등 총 20건의 세미나 개최, 1,200여 명 참석'
        ]
      },
      download: '#'
    },
    '2024': {
      summary: {
        name: '제45회 국제환경산업기술&그린에너지전 / ENVEX2024',
        place: '코엑스(COEX)',
        date: '2024. 06. 12.(수) ~ 06. 14.(금)',
        exhibitors: { main: '총 12개국 248개 기업', sub: '국내 : 175개 기업, 해외 : 73개 기업' },
        visitors: { main: '총 42,100명', sub: '국내 : 41,500명, 해외 : 600명' }
      },
      emptyDetail: true
    },
    '2026': {
      summary: {
        name: '제47회 국제환경산업기술&그린에너지전 / ENVEX2026',
        place: '코엑스(COEX)',
        date: '2026. 05. 20.(수) ~ 05. 22.(금)',
        exhibitors: { main: '개최 예정', sub: '' },
        visitors: { main: '개최 예정', sub: '' }
      },
      emptyDetail: true
    },
    '2023': {
      summary: {
        name: '제44회 국제환경산업기술&그린에너지전 / ENVEX2023',
        place: '코엑스(COEX)',
        date: '2023. 06. 07.(수) ~ 06. 09.(금)',
        exhibitors: { main: '총 11개국 230개 기업', sub: '' },
        visitors: { main: '총 40,200명', sub: '' }
      },
      emptyDetail: true
    }
  };

  var yearTabs = ['2026', '2025', '2024', '2023'];
  var olderYears = ['2022', '2021', '2020'];

  var state = { year: '2025' };

  function getYearFromUrl() {
    var params = new URLSearchParams(window.location.search);
    var y = params.get('year');
    if (y && reports[y]) return y;
    return '2025';
  }

  function el(tag, cls, html) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (html != null) node.innerHTML = html;
    return node;
  }

  function renderYears() {
    document.querySelectorAll('[data-report-year]').forEach(function (link) {
      var year = link.getAttribute('data-report-year');
      var isActive = state.year === year;
      link.classList.toggle('is-active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    var more = document.querySelector('[data-report-years-more]');
    if (!more || more.dataset.bound === 'true') return;

    more.classList.add('report-years__more');

    var moreBtn = el('button', 'report-years__more-btn', '이전 전시회 <span aria-hidden="true">▼</span>');
    moreBtn.type = 'button';
    var list = el('ul', 'report-years__more-list');
    olderYears.forEach(function (year) {
      if (!reports[year]) {
        reports[year] = {
          summary: {
            name: 'ENVEX' + year,
            place: '코엑스(COEX)',
            date: year + '년 개최',
            exhibitors: { main: '자료 준비 중', sub: '' },
            visitors: { main: '자료 준비 중', sub: '' }
          },
          emptyDetail: true
        };
      }
      var li = document.createElement('li');
      var link = document.createElement('a');
      link.className = 'report-years__more-link';
      link.href = 'report.html?year=' + year;
      link.textContent = year;
      li.appendChild(link);
      list.appendChild(li);
    });
    moreBtn.addEventListener('click', function () {
      more.classList.toggle('is-open');
    });
    more.appendChild(moreBtn);
    more.appendChild(list);
    more.dataset.bound = 'true';

    document.addEventListener('click', function (e) {
      if (!more.contains(e.target)) more.classList.remove('is-open');
    });
  }

  function renderSummary(data) {
    var box = document.querySelector('[data-report-summary]');
    if (!box || !data.summary) return;
    var s = data.summary;
    box.innerHTML =
      '<div class="report-summary__row"><span class="report-summary__label">전시명칭</span><span class="report-summary__value">' + s.name + '</span></div>' +
      '<div class="report-summary__row"><span class="report-summary__label">장소</span><span class="report-summary__value">' + s.place + '</span></div>' +
      '<div class="report-summary__row"><span class="report-summary__label">날짜</span><span class="report-summary__value">' + s.date + '</span></div>' +
      '<div class="report-summary__row"><span class="report-summary__label">참가기업</span><span class="report-summary__value">' + s.exhibitors.main +
      (s.exhibitors.sub ? '<span class="report-summary__sub">' + s.exhibitors.sub + '</span>' : '') + '</span></div>' +
      '<div class="report-summary__row"><span class="report-summary__label">참관객수</span><span class="report-summary__value">' + s.visitors.main +
      (s.visitors.sub ? '<span class="report-summary__sub">' + s.visitors.sub + '</span>' : '') + '</span></div>';
  }

  function renderBars(items, maxPct) {
    var wrap = el('div', 'report-bars');
    var max = maxPct || Math.max.apply(null, items.map(function (i) { return i.pct; }));
    items.forEach(function (item, idx) {
      var row = el('div', 'report-bar-row');
      var color = item.color || BAR_COLORS[idx % BAR_COLORS.length];
      row.innerHTML =
        '<span class="report-bar-row__label">' + item.label + '</span>' +
        '<div class="report-bar-row__track"><div class="report-bar-row__fill" style="width:' + (item.pct / max * 100) + '%;background:' + color + '"></div></div>' +
        '<span class="report-bar-row__pct">' + item.pct + '%</span>';
      wrap.appendChild(row);
    });
    return wrap;
  }

  function renderDonut(items) {
    var total = items.reduce(function (sum, i) { return sum + i.pct; }, 0);
    var acc = 0;
    var stops = [];
    items.forEach(function (item, idx) {
      var start = (acc / total) * 100;
      acc += item.pct;
      var end = (acc / total) * 100;
      stops.push(DONUT_COLORS[idx] + ' ' + start + '% ' + end + '%');
    });
    var donut = el('div', 'report-donut');
    donut.style.background = 'conic-gradient(' + stops.join(', ') + ')';
    var legend = document.createElement('ul');
    legend.className = 'report-donut-legend';
    items.forEach(function (item, idx) {
      var li = document.createElement('li');
      li.innerHTML = '<span class="dot" style="background:' + DONUT_COLORS[idx] + '"></span>' + item.label + ' ' + item.pct + '%';
      legend.appendChild(li);
    });
    var wrap = el('div', 'report-donut-wrap');
    wrap.appendChild(donut);
    wrap.appendChild(legend);
    return wrap;
  }

  function formatCountryTotal(text) {
    return String(text).replace(/(\d+)/g, '<span class="report-country-foot__num">$1</span>');
  }

  function renderCountryTable(data) {
    var table = el('table', 'report-country-table');
    table.innerHTML =
      '<thead><tr>' +
      '<th scope="col">국가명</th><th scope="col">출품업체수</th>' +
      '<th scope="col">국가명</th><th scope="col">출품업체수</th>' +
      '<th scope="col">국가명</th><th scope="col">출품업체수</th>' +
      '</tr></thead>';

    var tbody = document.createElement('tbody');
    var maxRows = 0;
    data.countries.forEach(function (col) {
      if (col.length > maxRows) maxRows = col.length;
    });
    for (var r = 0; r < maxRows; r++) {
      var tr = document.createElement('tr');
      data.countries.forEach(function (col) {
        var cell = col[r] || ['', ''];
        tr.innerHTML += '<td>' + (cell[0] || '') + '</td><td>' + (cell[1] || '') + '</td>';
      });
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);

    var tfoot = document.createElement('tfoot');
    var footRow = document.createElement('tr');
    var footCell = document.createElement('td');
    footCell.colSpan = 6;
    footCell.className = 'report-country-table__total';
    footCell.innerHTML = formatCountryTotal(data.countryTotal);
    footRow.appendChild(footCell);
    tfoot.appendChild(footRow);
    table.appendChild(tfoot);

    return table;
  }

  function renderSections(data) {
    var wrap = document.querySelector('[data-report-sections]');
    var downloadWrap = document.querySelector('[data-report-download-wrap]');
    if (!wrap) return;
    wrap.innerHTML = '';

    if (data.emptyDetail) {
      wrap.innerHTML = '<p class="report-empty">상세 결과 자료는 준비 중입니다.</p>';
      if (downloadWrap) downloadWrap.hidden = true;
      return;
    }
    if (downloadWrap) downloadWrap.hidden = false;

    var sec1 = el('section', 'report-section report-section--country');
    sec1.innerHTML =
      '<span class="content-title-wrap"><h2 class="report-section__title">참가기업 분석</h2></span>';
    var block1 = el('div', 'report-block report-block--country');
    block1.innerHTML =
      '<div class="report-block__side"><h3>국가별 분석</h3></div>' +
      '<div class="report-block__main"></div>';
    block1.querySelector('.report-block__main').appendChild(renderCountryTable(data));
    sec1.appendChild(block1);

    var sec2 = el('section', 'report-section');
    sec2.innerHTML = '<span class="content-title-wrap"><h2 class="report-section__title">참가기업 설문 분석</h2></span>';
    var block2a = el('div', 'report-block');
    block2a.innerHTML = '<div class="report-block__side"><h3>전시회 참가 목적</h3><p>' + data.purpose.lead + '</p></div><div class="report-block__main"></div>';
    block2a.querySelector('.report-block__main').appendChild(renderBars(data.purpose.items));
    var block2b = el('div', 'report-block');
    block2b.innerHTML = '<div class="report-block__side"><h3>참가 횟수</h3><p>' + data.participation.lead + '</p></div><div class="report-block__main"></div>';
    block2b.querySelector('.report-block__main').appendChild(renderDonut(data.participation.items));
    sec2.appendChild(block2a);
    sec2.appendChild(block2b);

    var sec3 = el('section', 'report-section');
    sec3.innerHTML = '<span class="content-title-wrap"><h2 class="report-section__title">' + data.visitors.total + '</h2></span>';
    var block3a = el('div', 'report-block');
    block3a.innerHTML = '<div class="report-block__side"><h3>참관 목적</h3><p>' + data.visitors.purposeLead + '</p></div><div class="report-block__main"></div>';
    block3a.querySelector('.report-block__main').appendChild(renderBars(data.visitors.purpose));
    var block3b = el('div', 'report-block');
    block3b.innerHTML = '<div class="report-block__side"><h3>참관객 관심 분야</h3><p>' + data.visitors.interestLead + '</p></div><div class="report-block__main"></div>';
    var interestMain = block3b.querySelector('.report-block__main');
    var grid = el('div', 'report-interest-grid');
    data.visitors.interestTop.forEach(function (card) {
      var c = el('div', 'report-interest-card');
      c.style.background = card.bg;
      if (card.dark) c.style.color = '#111';
      c.innerHTML = '<span class="report-interest-card__pct">' + card.pct + '</span><span class="report-interest-card__name">' + card.name + '</span>';
      grid.appendChild(c);
    });
    interestMain.appendChild(grid);
    var list = el('div', 'report-interest-list');
    data.visitors.interestRest.forEach(function (pair) {
      var item = el('div', 'report-interest-item');
      item.innerHTML = '<span>' + pair[0] + '</span><span>' + pair[1] + '</span>';
      list.appendChild(item);
    });
    interestMain.appendChild(list);
    sec3.appendChild(block3a);
    sec3.appendChild(block3b);

    var sec4 = el('section', 'report-section report-list-section');
    var row4 = el('div', 'report-block');
    row4.innerHTML = '<div class="report-block__side"><h3>국내 비즈니스 프로그램</h3></div><div class="report-block__main"><ol></ol></div>';
    var ol4 = row4.querySelector('ol');
    data.domesticPrograms.forEach(function (text) {
      var li = document.createElement('li');
      li.textContent = text;
      ol4.appendChild(li);
    });
    sec4.appendChild(row4);

    var sec5 = el('section', 'report-section report-list-section');
    var row5 = el('div', 'report-block');
    row5.innerHTML = '<div class="report-block__side"><h3>다양한 참가기업 지원 프로그램 운영</h3></div><div class="report-block__main"><ol></ol></div>';
    var ol5 = row5.querySelector('ol');
    data.supportPrograms.forEach(function (item) {
      var li = document.createElement('li');
      if (typeof item === 'string') {
        li.textContent = item;
      } else {
        li.innerHTML = '<strong>' + item.title + '</strong>';
        if (item.subs) {
          var ul = document.createElement('ul');
          item.subs.forEach(function (sub) {
            var sli = document.createElement('li');
            sli.textContent = sub;
            ul.appendChild(sli);
          });
          li.appendChild(ul);
        }
      }
      ol5.appendChild(li);
    });
    sec5.appendChild(row5);

    var sec6 = el('section', 'report-section report-list-section');
    var overseasRow = el('div', 'report-block');
    overseasRow.innerHTML = '<div class="report-block__side"><h3>해외바이어 초청지원</h3></div><div class="report-block__main"><ol></ol></div>';
    data.overseas.forEach(function (t) {
      var li = document.createElement('li');
      li.textContent = t;
      overseasRow.querySelector('ol').appendChild(li);
    });
    sec6.appendChild(overseasRow);

    var split = el('div', 'report-split');
    var mid = el('div', 'report-list-section');
    mid.innerHTML = '<h3>' + data.promotion.title + '</h3><p><strong>' + data.promotion.sub + '</strong></p><ul></ul>';
    data.promotion.items.forEach(function (t) {
      var li = document.createElement('li');
      li.textContent = t;
      mid.querySelector('ul').appendChild(li);
    });
    var right = el('div', 'report-list-section');
    right.innerHTML = '<h3>' + data.seminar.title + '</h3><ul></ul>';
    data.seminar.items.forEach(function (t) {
      var li = document.createElement('li');
      li.textContent = t;
      right.querySelector('ul').appendChild(li);
    });
    split.appendChild(mid);
    split.appendChild(right);
    sec6.appendChild(split);

    wrap.appendChild(sec1);
    wrap.appendChild(sec2);
    wrap.appendChild(sec3);
    wrap.appendChild(sec4);
    wrap.appendChild(sec5);
    wrap.appendChild(sec6);

    var dl = document.querySelector('[data-report-download]');
    if (dl && data.download) {
      dl.href = data.download;
    }
  }

  function updateUrl() {
    var url = new URL(window.location.href);
    url.searchParams.set('year', state.year);
    window.history.replaceState({}, '', url);
  }

  function renderAll() {
    renderYears();
    var data = reports[state.year];
    if (!data) return;
    renderSummary(data);
    renderSections(data);
    document.title = '지난전시회 ' + state.year + ' | ENVEX 2026';
  }

  state.year = getYearFromUrl();

  renderAll();

  var scrollBtn = document.querySelector('[data-scroll-top]');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  var downloadBtn = document.querySelector('[data-report-download]');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function (e) {
      if (downloadBtn.getAttribute('href') === '#') {
        e.preventDefault();
        alert('전시회 결과보고서 파일은 준비 중입니다.');
      }
    });
  }
})();
