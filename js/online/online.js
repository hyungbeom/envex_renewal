(function () {
  const topButton = document.querySelector('.online-float-top');
  const langButtons = document.querySelectorAll('.online-lang');
  const filterWrap = document.querySelector('.online-filter');
  const filterBtn = document.querySelector('.online-filter-btn');
  const filterPanel = document.getElementById('online-filter-panel');
  const filterKeys = document.querySelectorAll('.online-filter-key, .online-filter-all');
  const exhibitorCards = document.querySelectorAll('.exhibitor-card');

  const CHO = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
  const CHO_NORMALIZE = {
    'ㄲ': 'ㄱ',
    'ㄸ': 'ㄷ',
    'ㅃ': 'ㅂ',
    'ㅆ': 'ㅅ',
    'ㅉ': 'ㅈ',
  };

  if (topButton) {
    topButton.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (langButtons.length > 0) {
    langButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        langButtons.forEach(function (item) {
          item.classList.remove('online-lang--active');
        });
        button.classList.add('online-lang--active');
      });
    });
  }

  function getHangulInitial(text) {
    if (!text) {
      return null;
    }

    const normalized = text.replace(/^\(주\)\s*/i, '').trim();

    for (let i = 0; i < normalized.length; i += 1) {
      const code = normalized.charCodeAt(i);
      if (code >= 0xac00 && code <= 0xd7a3) {
        const choseong = CHO[Math.floor((code - 0xac00) / 588)];
        return CHO_NORMALIZE[choseong] || choseong;
      }
    }

    return null;
  }

  function getEnglishInitial(text) {
    if (!text) {
      return null;
    }

    const match = text.trim().match(/[A-Za-z]/);
    return match ? match[0].toUpperCase() : null;
  }

  function getCardNames(card) {
    const nameKo = card.querySelector('.exhibitor-company-text strong');
    const nameEn = card.querySelector('.exhibitor-company-text p');
    return {
      ko: nameKo ? nameKo.textContent.trim() : '',
      en: nameEn ? nameEn.textContent.trim() : '',
    };
  }

  function cardMatchesFilter(card, filterValue) {
    if (filterValue === 'all') {
      return true;
    }

    const names = getCardNames(card);

    if (filterValue === 'num') {
      const firstKo = names.ko.charAt(0);
      const firstEn = names.en.charAt(0);
      return /\d/.test(firstKo) || /\d/.test(firstEn);
    }

    if (/^[A-Z]$/.test(filterValue)) {
      return getEnglishInitial(names.en) === filterValue;
    }

    if (/^[ㄱ-ㅎ]$/.test(filterValue)) {
      return getHangulInitial(names.ko) === filterValue;
    }

    return true;
  }

  function applyFilter(filterValue) {
    exhibitorCards.forEach(function (card) {
      const visible = cardMatchesFilter(card, filterValue);
      card.classList.toggle('is-filtered-out', !visible);
    });
  }

  function setActiveKey(activeButton) {
    filterKeys.forEach(function (key) {
      key.classList.toggle('is-active', key === activeButton);
    });
  }

  function openFilterPanel() {
    if (!filterPanel || !filterBtn) {
      return;
    }
    filterPanel.hidden = false;
    filterBtn.setAttribute('aria-expanded', 'true');
  }

  function closeFilterPanel() {
    if (!filterPanel || !filterBtn) {
      return;
    }
    filterPanel.hidden = true;
    filterBtn.setAttribute('aria-expanded', 'false');
  }

  function toggleFilterPanel() {
    if (!filterPanel) {
      return;
    }
    if (filterPanel.hidden) {
      openFilterPanel();
    } else {
      closeFilterPanel();
    }
  }

  if (filterBtn && filterPanel) {
    filterBtn.addEventListener('click', function (event) {
      event.stopPropagation();
      toggleFilterPanel();
    });

    document.addEventListener('click', function (event) {
      if (!filterWrap || filterPanel.hidden) {
        return;
      }
      if (!filterWrap.contains(event.target)) {
        closeFilterPanel();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !filterPanel.hidden) {
        closeFilterPanel();
      }
    });

    filterKeys.forEach(function (key) {
      key.addEventListener('click', function () {
        const filterValue = key.getAttribute('data-filter') || 'all';
        setActiveKey(key);
        applyFilter(filterValue);
        closeFilterPanel();
      });
    });
  }
})();
