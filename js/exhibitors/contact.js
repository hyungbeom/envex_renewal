
(function () {
  'use strict';
var title = document.getElementById('contact-title');
  if (title && typeof title.focus === 'function') {
    setTimeout(function () {
      title.focus();
    }, 0);
  }
})();

