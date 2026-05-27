(function () {
  'use strict';

  var sections = [
    {
      titleKo: '미디어 킷',
      titleEn: 'MEDIA KIT',
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
          desc: '국제환경산업기술 · 그린에너지전 2026. 5. 20.(수) ~ 5. 22.(금)',
          buttons: [
            { label: '국문 다운로드', href: '../img/brochure_kor_2.jpg', download: 'ENVEX2026_포스터_국문.jpg' },
            { label: '영문 다운로드', href: '../img/brochure_kor_2.jpg', download: 'ENVEX2026_Poster_EN.jpg' }
          ]
        }
      ]
    },
    {
      titleKo: '브랜드 자료',
      titleEn: '',
      lead: '공식 로고 및 CI 파일은 허가된 용도 내에서만 사용하세요',
      layout: 'brand',
      items: [
        {
          image: '../img/logo.svg',
          imageAlt: 'ENVEX 로고',
          title: 'ENVEX 로고',
          desc: '홍보물 제작 및 미디어 활용을 위한 공식 로고 파일을 제공합니다',
          buttons: [
            { label: '다운로드', href: '../img/logo.svg', download: 'ENVEX_logo.svg' }
          ]
        },
        {
          image: '../img/partner/item1.svg',
          imageAlt: '한국환경보전원 로고',
          title: '한국환경보전원 로고',
          desc: '한국환경보전원 공식 CI 파일을 제공합니다',
          buttons: [
            { label: '다운로드', href: '../img/partner/item1.svg', download: 'KECI_logo.svg' }
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

  function createCardInfo(item) {
    var info = document.createElement('div');
    info.className = 'promo-card__info';

    var title = document.createElement('h3');
    title.className = 'promo-card__title';
    title.textContent = item.title;

    var desc = document.createElement('p');
    desc.className = 'promo-card__desc';
    desc.textContent = item.desc;

    info.appendChild(title);
    info.appendChild(desc);
    return info;
  }

  function createCardActions(item) {
    var actions = document.createElement('div');
    actions.className = 'promo-card__actions';
    if (item.buttons.length === 1) {
      actions.classList.add('promo-card__actions--single');
    }
    item.buttons.forEach(function (btn) {
      actions.appendChild(createButton(btn));
    });
    return actions;
  }

  function createMediaCard(item) {
    var card = document.createElement('article');
    card.className = 'promo-card promo-card--media';

    var top = document.createElement('div');
    top.className = 'promo-card__top';

    var thumb = document.createElement('div');
    thumb.className = 'promo-card__thumb';
    var img = document.createElement('img');
    img.src = item.image;
    img.alt = item.imageAlt || '';
    thumb.appendChild(img);

    top.appendChild(thumb);
    top.appendChild(createCardInfo(item));

    var divider = document.createElement('div');
    divider.className = 'promo-card__divider';
    divider.setAttribute('aria-hidden', 'true');

    card.appendChild(top);
    card.appendChild(divider);
    card.appendChild(createCardActions(item));
    return card;
  }

  function createBrandCard(item) {
    var card = document.createElement('article');
    card.className = 'promo-card promo-card--brand';

    var inner = document.createElement('div');
    inner.className = 'promo-card__inner';

    var logo = document.createElement('div');
    logo.className = 'promo-card__logo';
    var img = document.createElement('img');
    img.src = item.image;
    img.alt = item.imageAlt || '';
    logo.appendChild(img);

    inner.appendChild(logo);
    inner.appendChild(createCardInfo(item));
    inner.appendChild(createCardActions(item));
    card.appendChild(inner);
    return card;
  }

  function createCard(item, layout) {
    if (layout === 'brand') {
      return createBrandCard(item);
    }
    return createMediaCard(item);
  }

  function renderSectionTitle(section) {
    var titleHtml = '<span class="promo-section__title-ko">' + section.titleKo + '</span>';
    if (section.titleEn) {
      titleHtml += '<span class="promo-section__title-en">' + section.titleEn + '</span>';
    }
    return titleHtml;
  }

  function renderSections() {
    var wrap = document.querySelector('[data-promo-sections]');
    if (!wrap) return;

    sections.forEach(function (section) {
      var block = document.createElement('section');
      block.className = 'promo-section' + (section.layout === 'brand' ? ' promo-section--brand' : '');

      block.innerHTML =
        '<header class="promo-section__head">' +
        '<h2 class="promo-section__title">' + renderSectionTitle(section) + '</h2>' +
        '<p class="promo-section__lead">' + section.lead + '</p>' +
        '</header>';

      var grid = document.createElement('div');
      grid.className = 'promo-grid';
      section.items.forEach(function (item) {
        grid.appendChild(createCard(item, section.layout || 'media'));
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
