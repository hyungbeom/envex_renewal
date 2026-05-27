(function () {
  'use strict';

  var sections = [
    {
      title: '미디어 킷 MEDIA KIT',
      lead: 'ENVEX2026 공식 홍보 인쇄물을 다운로드하여 행사 홍보에 활용하세요',
      items: [
        {
          image: '../img/brochure_kor_1.jpg',
          imageAlt: '국제환경산업기술·그린에너지전 공식 브로슈어',
          title: '국제환경산업기술 · 그린에너지전 공식 브로슈어',
          desc: '전시회 참가 안내 및 주요 프로그램 일정을 한눈에 확인하세요',
          buttons: [
            { label: '국문 다운로드', href: '../img/brochure_kor_1.jpg', download: 'ENVEX2026_브로슈어_국문.jpg' },
            { label: '영문 다운로드', href: '../img/brochure_kor_2.jpg', download: 'ENVEX2026_Brochure_EN.jpg' }
          ]
        },
        {
          image: '../img/brochure_kor_2.jpg',
          imageAlt: 'ENVEX2026 포스터',
          title: 'ENVEX2026 포스터',
          desc: '국제환경산업기술 · 그린에너지전 2026. 5. 20.(수) - 5. 22.(금)',
          buttons: [
            { label: '국문 다운로드', href: '../img/brochure_kor_2.jpg', download: 'ENVEX2026_포스터_국문.jpg' },
            { label: '영문 다운로드', href: '../img/brochure_kor_2.jpg', download: 'ENVEX2026_Poster_EN.jpg' }
          ]
        }
      ]
    },
    {
      title: '브랜드 자료',
      lead: '공식 로고 및 CI 파일은 허가된 용도 내에서만 사용하세요',
      items: [
        {
          image: '../img/logo.svg',
          imageAlt: 'ENVEX 로고',
          title: 'ENVEX 로고',
          desc: '홍보물 제작 및 미디어 활용을 위한 공식 로고 파일을 제공합니다',
          logo: true,
          buttons: [
            { label: '다운로드', href: '../img/logo.svg', download: 'ENVEX_logo.svg', single: true }
          ]
        },
        {
          image: '../img/partner/item1.svg',
          imageAlt: '한국환경보전원 로고',
          title: '한국환경보전원 로고',
          desc: '한국환경보전원 공식 CI 파일을 제공합니다',
          logo: true,
          buttons: [
            { label: '다운로드', href: '../img/partner/item1.svg', download: 'KECI_logo.svg', single: true }
          ]
        }
      ]
    }
  ];

  function createButton(btn) {
    if (btn.href) {
      var link = document.createElement('a');
      link.className = 'promo-btn';
      link.href = btn.href;
      link.textContent = btn.label;
      if (btn.download) {
        link.setAttribute('download', btn.download);
      }
      return link;
    }

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'promo-btn';
    button.textContent = btn.label;
    button.addEventListener('click', function () {
      alert('다운로드 파일 준비 중입니다.');
    });
    return button;
  }

  function createCard(item) {
    var card = document.createElement('article');
    card.className = 'promo-card';

    var visual = document.createElement('div');
    visual.className = 'promo-card__visual' + (item.logo ? ' promo-card__visual--logo' : '');
    var img = document.createElement('img');
    img.src = item.image;
    img.alt = item.imageAlt || '';
    visual.appendChild(img);

    var body = document.createElement('div');
    body.className = 'promo-card__body';

    var title = document.createElement('h3');
    title.className = 'promo-card__title';
    title.textContent = item.title;

    var desc = document.createElement('p');
    desc.className = 'promo-card__desc';
    desc.textContent = item.desc;

    var actions = document.createElement('div');
    actions.className = 'promo-card__actions';
    if (item.buttons.length === 1) {
      actions.classList.add('promo-card__actions--single');
    }
    item.buttons.forEach(function (btn) {
      actions.appendChild(createButton(btn));
    });

    body.appendChild(title);
    body.appendChild(desc);
    body.appendChild(actions);
    card.appendChild(visual);
    card.appendChild(body);
    return card;
  }

  function renderSections() {
    var wrap = document.querySelector('[data-promo-sections]');
    if (!wrap) return;

    sections.forEach(function (section) {
      var block = document.createElement('section');
      block.className = 'promo-section';

      block.innerHTML =
        '<header class="promo-section__head">' +
        '<h2 class="promo-section__title">' +
        '<span class="promo-section__bar" aria-hidden="true"></span>' +
        section.title +
        '</h2>' +
        '<p class="promo-section__lead">' + section.lead + '</p>' +
        '</header>';

      var grid = document.createElement('div');
      grid.className = 'promo-grid';
      section.items.forEach(function (item) {
        grid.appendChild(createCard(item));
      });
      block.appendChild(grid);
      wrap.appendChild(block);
    });
  }

  renderSections();

  var scrollBtn = document.querySelector('[data-scroll-top]');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
