(function () {
  const grid = document.querySelector('[data-online-hero-logos]');
  if (!grid) {
    return;
  }

  const scriptEl = document.querySelector('script[src*="online-hero-logos.js"]');
  const scriptSrc = scriptEl ? scriptEl.getAttribute('src') || '' : '';
  const dataPath = scriptSrc.replace(/js\/online\/online-hero-logos\.js.*$/i, 'data/online/hero-logos.json');

  function buildLogoCell(logo, baseUrl) {
    const cell = document.createElement('div');
    cell.className = 'online-logo-cell';

    const img = document.createElement('img');
    img.src = baseUrl + logo.file;
    img.alt = logo.alt || '';
    img.loading = 'lazy';
    img.decoding = 'async';
    img.addEventListener('error', function () {
      cell.style.display = 'none';
    });

    cell.appendChild(img);
    return cell;
  }

  function buildLogoGroup(logos, baseUrl) {
    const group = document.createElement('div');
    group.className = 'online-logo-group';
    logos.forEach(function (logo) {
      group.appendChild(buildLogoCell(logo, baseUrl));
    });
    return group;
  }

  function buildLogoRow(row, baseUrl) {
    const rowEl = document.createElement('div');
    rowEl.className = 'online-logo-row online-logo-row--' + (row.direction === 'right' ? 'right' : 'left');

    const track = document.createElement('div');
    track.className = 'online-logo-track';

    const groupA = buildLogoGroup(row.logos, baseUrl);
    const groupB = buildLogoGroup(row.logos, baseUrl);
    groupB.setAttribute('aria-hidden', 'true');

    track.appendChild(groupA);
    track.appendChild(groupB);
    rowEl.appendChild(track);
    return rowEl;
  }

  fetch(dataPath)
    .then(function (response) {
      if (!response.ok) {
        throw new Error('hero-logos.json load failed');
      }
      return response.json();
    })
    .then(function (data) {
      const baseUrl = data.baseUrl || 'https://envex.or.kr/board/upload_file/ENVEX_form2/';
      (data.rows || []).forEach(function (row) {
        grid.appendChild(buildLogoRow(row, baseUrl));
      });
    })
    .catch(function () {
      grid.hidden = true;
    });
})();
