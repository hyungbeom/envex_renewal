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

  window.addEventListener('load', fitFooterBrand);
  fitFooterBrand();
})();
