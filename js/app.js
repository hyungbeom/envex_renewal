(function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
  const mobileNavClose = document.querySelector('.mobile-nav-close');

  if (menuToggle && mobileNav && mobileNavOverlay) {
    const TRANSITION_MS = 300;

    function openMenu() {
      mobileNav.classList.add('is-open');
      mobileNavOverlay.hidden = false;
      mobileNavOverlay.classList.add('is-open');
      mobileNav.setAttribute('aria-hidden', 'false');
      menuToggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('menu-open');
    }

    function closeMenu() {
      mobileNav.classList.remove('is-open');
      mobileNavOverlay.classList.remove('is-open');
      mobileNav.setAttribute('aria-hidden', 'true');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');

      window.setTimeout(function () {
        if (!mobileNavOverlay.classList.contains('is-open')) {
          mobileNavOverlay.hidden = true;
        }
      }, TRANSITION_MS);
    }

    function isOpen() {
      return mobileNav.classList.contains('is-open');
    }

    menuToggle.addEventListener('click', function () {
      if (isOpen()) {
        closeMenu();
        return;
      }
      openMenu();
    });
    if (mobileNavClose) {
      mobileNavClose.addEventListener('click', closeMenu);
    }
    mobileNavOverlay.addEventListener('click', closeMenu);

    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) {
        closeMenu();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 1024) {
        closeMenu();
      }
    });
  }

  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
  if (mobileNavItems.length > 0) {
    mobileNavItems.forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (!item.open) {
          return;
        }
        mobileNavItems.forEach(function (other) {
          if (other !== item) {
            other.open = false;
          }
        });
      });
    });
  }

  const mobileNavSubs = document.querySelectorAll('.mobile-nav-sub');
  if (mobileNavSubs.length > 0) {
    mobileNavSubs.forEach(function (sub) {
      const links = sub.querySelectorAll('a');
      links.forEach(function (link, index) {
        // 메뉴(섹션)별로 0부터 스태거가 시작해야 딜레이가 과도해지지 않음
        link.style.setProperty('--stagger-index', String(index));
      });
    });
  }

  function getOnlineExhibitionPath() {
    const scriptEl = document.querySelector('script[src*="app.js"]');
    if (!scriptEl) {
      return 'online/online.html';
    }
    const srcAttr = scriptEl.getAttribute('src') || '';
    if (!srcAttr) {
      return 'online/online.html';
    }
    return srcAttr.replace(/js\/app\.js(\?.*)?$/i, 'online/online.html');
  }

  function isOnlineExhibitionPage() {
    return /\/online(\/|$)/i.test(window.location.pathname) ||
      /\/online2\.html/i.test(window.location.pathname);
  }

  const PAGE_FLOATS_MARKUP =
    '<aside class="page-floats" aria-label="바로가기">' +
    '<a href="#" class="page-floats__online">온라인<br>전시회</a>' +
    '<button type="button" class="page-floats__top" data-scroll-top aria-label="맨 위로">' +
    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
    '<path d="M12 5l7 7H5l7-7z" fill="currentColor"></path>' +
    '</svg></button></aside>';

  function normalizeLegacyPageFloats() {
    document.querySelectorAll('aside[aria-label="바로가기"]').forEach(function (aside) {
      if (aside.classList.contains('page-floats')) {
        return;
      }

      aside.className = 'page-floats';

      const onlineLink = aside.querySelector('a');
      if (onlineLink) {
        onlineLink.className = 'page-floats__online';
        if (!onlineLink.innerHTML.includes('<br')) {
          onlineLink.innerHTML = '온라인<br>전시회';
        }
      }

      const topBtn = aside.querySelector('[data-scroll-top]');
      if (topBtn) {
        topBtn.className = 'page-floats__top';
      }
    });

    document.querySelectorAll('.page-floats').forEach(function (aside) {
      if (!aside.querySelector('.page-floats__online')) {
        const onlineLink = document.createElement('a');
        onlineLink.href = '#';
        onlineLink.className = 'page-floats__online';
        onlineLink.innerHTML = '온라인<br>전시회';
        aside.insertBefore(onlineLink, aside.firstChild);
      }
      if (!aside.querySelector('[data-scroll-top]')) {
        const wrap = document.createElement('div');
        wrap.innerHTML = PAGE_FLOATS_MARKUP;
        const btn = wrap.querySelector('[data-scroll-top]');
        if (btn) {
          aside.appendChild(btn);
        }
      }
    });
  }

  function ensurePageFloats() {
    if (!document.querySelector('.page-floats')) {
      const footer = document.querySelector('.footer-section');
      const template = document.createElement('div');
      template.innerHTML = PAGE_FLOATS_MARKUP;
      const floats = template.firstElementChild;
      if (footer && footer.parentNode) {
        footer.parentNode.insertBefore(floats, footer);
      } else {
        document.body.appendChild(floats);
      }
    }
  }

  function setupPageFloatsLinks() {
    const href = getOnlineExhibitionPath();

    document.querySelectorAll('.page-floats__online').forEach(function (link) {
      link.setAttribute('href', href);
    });

    if (isOnlineExhibitionPage()) {
      document.querySelectorAll('.page-floats').forEach(function (aside) {
        aside.classList.add('page-floats--online-only');
      });
    }
  }

  function setupScrollToTop() {
    document.querySelectorAll('[data-scroll-top]').forEach(function (btn) {
      if (btn.dataset.scrollTopBound === 'true') {
        return;
      }
      btn.dataset.scrollTopBound = 'true';
      btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }

  const onlineCtaLinks = document.querySelectorAll('.mobile-nav-cta');
  if (onlineCtaLinks.length > 0) {
    const onlineHref = getOnlineExhibitionPath();
    onlineCtaLinks.forEach(function (link) {
      link.setAttribute('href', onlineHref);
    });
  }

  const footerWrap = document.querySelector('.footer-bg-text');
  const footerMark = document.querySelector('.footer-brand-mark');

  function fitFooterBrand() {
    if (!footerWrap || !footerMark) {
      return;
    }

    footerMark.style.removeProperty('font-size');

    const wrapStyle = getComputedStyle(footerWrap);
    const horizontalPadding =
      parseFloat(wrapStyle.paddingLeft) + parseFloat(wrapStyle.paddingRight);
    const available = footerWrap.clientWidth - horizontalPadding;

    if (available <= 0) {
      return;
    }

    const baseSize = parseFloat(getComputedStyle(footerMark).fontSize);
    if (!baseSize) {
      return;
    }

    let needed = footerMark.scrollWidth;
    if (needed <= available) {
      return;
    }

    footerMark.style.fontSize = (baseSize * (available / needed) * 0.98) + 'px';

    needed = footerMark.scrollWidth;
    if (needed > available) {
      const currentSize = parseFloat(getComputedStyle(footerMark).fontSize);
      footerMark.style.fontSize = (currentSize * (available / needed) * 0.98) + 'px';
    }
  }

  let resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(fitFooterBrand, 80);
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(fitFooterBrand);
  }

  function setupCustomScrollbarThumb() {
    const DESKTOP_MIN_WIDTH = 1025;
    let thumb = null;
    let hideTimer;
    let onScroll = null;
    let onResize = null;

    function isDesktopViewport() {
      return window.innerWidth >= DESKTOP_MIN_WIDTH;
    }

    function teardownCustomScrollbar() {
      if (onScroll) {
        window.removeEventListener('scroll', onScroll);
        onScroll = null;
      }
      if (onResize) {
        window.removeEventListener('resize', onResize);
        onResize = null;
      }
      if (thumb) {
        thumb.remove();
        thumb = null;
      }
      clearTimeout(hideTimer);
    }

    function updateThumb() {
      if (!thumb) {
        return;
      }

      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - doc.clientHeight;

      if (maxScroll <= 0) {
        thumb.classList.remove('is-visible');
        return;
      }

      const thumbHeight = Math.max(36, (doc.clientHeight / doc.scrollHeight) * doc.clientHeight);
      const maxTop = doc.clientHeight - thumbHeight - 2;
      const top = (doc.scrollTop / maxScroll) * maxTop;

      thumb.style.height = thumbHeight + 'px';
      thumb.style.transform = 'translateY(' + top + 'px)';
      thumb.classList.add('is-visible');
      thumb.classList.add('is-active');

      clearTimeout(hideTimer);
      hideTimer = window.setTimeout(function () {
        if (thumb) {
          thumb.classList.remove('is-active');
        }
      }, 220);
    }

    function mountCustomScrollbar() {
      if (!isDesktopViewport()) {
        teardownCustomScrollbar();
        return;
      }

      if (!thumb) {
        thumb = document.createElement('div');
        thumb.className = 'custom-scrollbar-thumb';
        document.body.appendChild(thumb);

        onScroll = updateThumb;
        onResize = updateThumb;
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onResize);
      }

      updateThumb();
    }

    function syncCustomScrollbar() {
      if (isDesktopViewport()) {
        mountCustomScrollbar();
        return;
      }
      teardownCustomScrollbar();
    }

    window.addEventListener('resize', syncCustomScrollbar);
    window.addEventListener('load', syncCustomScrollbar);
    syncCustomScrollbar();
  }

  function getPrivacyPolicyPath() {
    const scriptEl = document.querySelector('script[src*="app.js"]');
    if (!scriptEl) {
      return 'private_info.html';
    }
    const srcAttr = scriptEl.getAttribute('src') || '';
    if (!srcAttr) {
      return 'private_info.html';
    }
    return srcAttr.replace(/js\/app\.js(\?.*)?$/i, 'private_info.html');
  }

  function getSitemapPath() {
    const scriptEl = document.querySelector('script[src*="app.js"]');
    if (!scriptEl) {
      return 'sitemap.html';
    }
    const srcAttr = scriptEl.getAttribute('src') || '';
    if (!srcAttr) {
      return 'sitemap.html';
    }
    return srcAttr.replace(/js\/app\.js(\?.*)?$/i, 'sitemap.html');
  }

  function setupFooterPrivacyLinks() {
    const href = getPrivacyPolicyPath();

    document.querySelectorAll('.footer-links').forEach(function (footerLinks) {
      Array.prototype.forEach.call(footerLinks.children, function (node) {
        if (node.classList && node.classList.contains('divider')) {
          return;
        }
        if (node.textContent.trim() !== '개인정보 처리방침') {
          return;
        }
        if (node.tagName === 'A') {
          node.setAttribute('href', href);
          return;
        }
        const link = document.createElement('a');
        link.href = href;
        link.textContent = '개인정보 처리방침';
        node.replaceWith(link);
      });
    });
  }

  function getMypagePath() {
    const scriptEl = document.querySelector('script[src*="app.js"]');
    if (!scriptEl) {
      return 'mypage.html';
    }
    const srcAttr = scriptEl.getAttribute('src') || '';
    if (!srcAttr) {
      return 'mypage.html';
    }
    return srcAttr.replace(/js\/app\.js(\?.*)?$/i, 'mypage.html');
  }

  function setupHeaderMypageLinks() {
    const href = getMypagePath();

    document.querySelectorAll('.mypage_text').forEach(function (node) {
      if (node.tagName === 'A') {
        if (!node.classList.contains('is-current')) {
          node.setAttribute('href', href);
        }
        return;
      }
      const link = document.createElement('a');
      link.href = href;
      link.className = 'mypage_text';
      link.textContent = '마이페이지';
      node.replaceWith(link);
    });

    document.querySelectorAll('.mobile-nav-header-right .mobile-nav-icon[aria-label="마이페이지"]').forEach(function (node) {
      if (node.tagName === 'A') {
        if (!node.classList.contains('is-current')) {
          node.setAttribute('href', href);
        }
        return;
      }
      const link = document.createElement('a');
      link.href = href;
      link.className = node.className;
      link.setAttribute('aria-label', '마이페이지');
      link.innerHTML = node.innerHTML;
      node.replaceWith(link);
    });

    document.querySelectorAll('.online-mypage').forEach(function (node) {
      if (node.tagName === 'A') {
        node.setAttribute('href', href);
        return;
      }
    });
  }

  function setupFooterSitemapLinks() {
    const href = getSitemapPath();

    document.querySelectorAll('.footer-links').forEach(function (footerLinks) {
      Array.prototype.forEach.call(footerLinks.children, function (node) {
        if (node.classList && node.classList.contains('divider')) {
          return;
        }
        if (node.textContent.trim() !== '사이트맵') {
          return;
        }
        if (node.tagName === 'A') {
          node.setAttribute('href', href);
          return;
        }
        const link = document.createElement('a');
        link.href = href;
        link.textContent = '사이트맵';
        node.replaceWith(link);
      });
    });
  }

  window.addEventListener('load', fitFooterBrand);
  fitFooterBrand();
  setupCustomScrollbarThumb();
  setupFooterPrivacyLinks();
  setupFooterSitemapLinks();
  setupHeaderMypageLinks();
  normalizeLegacyPageFloats();
  ensurePageFloats();
  setupPageFloatsLinks();
  setupScrollToTop();
})();
