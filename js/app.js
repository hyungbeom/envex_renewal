(function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
  const mobileNavClose = document.querySelector('.mobile-nav-close');

  if (menuToggle && mobileNav && mobileNavOverlay) {
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
      mobileNavOverlay.hidden = true;
      mobileNav.setAttribute('aria-hidden', 'true');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    }

    menuToggle.addEventListener('click', openMenu);
    if (mobileNavClose) {
      mobileNavClose.addEventListener('click', closeMenu);
    }
    mobileNavOverlay.addEventListener('click', closeMenu);

    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });
  }

  const footerWrap = document.querySelector('.footer-bg-text');
  const footerMark = document.querySelector('.footer-brand-mark');

  function fitFooterBrand() {
    if (!footerWrap || !footerMark) {
      return;
    }

    if (window.innerWidth > 1024) {
      footerMark.style.removeProperty('--footer-fit');
      return;
    }

    footerMark.style.setProperty('--footer-fit', '1');

    const available = footerWrap.clientWidth;
    const needed = footerMark.scrollWidth;

    if (needed > available && available > 0) {
      const scale = (available / needed) * 0.98;
      footerMark.style.setProperty('--footer-fit', String(scale));
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
