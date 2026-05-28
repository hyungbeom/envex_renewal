(function () {
  'use strict';
var stage = document.querySelector('[data-map-stage]');
  var label = document.querySelector('[data-zoom-label]');
  if (!stage || !label) {
    return;
  }

  var scale = 1;
  var minScale = 0.5;
  var maxScale = 2;
  var step = 0.25;

  function updateZoom() {
    var img = stage.querySelector('img');
    stage.style.transform = 'scale(' + scale + ')';
    label.textContent = Math.round(scale * 100) + '%';

    if (img && img.complete) {
      var extraW = img.offsetWidth * (scale - 1);
      var extraH = img.offsetHeight * (scale - 1);
      stage.style.marginRight = extraW > 0 ? extraW + 'px' : '';
      stage.style.marginBottom = extraH > 0 ? extraH + 'px' : '';
    }
  }

  document.querySelectorAll('[data-zoom]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var dir = btn.getAttribute('data-zoom');
      if (dir === 'in') {
        scale = Math.min(maxScale, +(scale + step).toFixed(2));
      } else if (dir === 'out') {
        scale = Math.max(minScale, +(scale - step).toFixed(2));
      }
      updateZoom();
    });
  });

  var mapImg = stage.querySelector('img');
  if (mapImg) {
    mapImg.addEventListener('load', updateZoom);
    if (mapImg.complete) {
      updateZoom();
    }
  }
})();
