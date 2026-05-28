(function () {
  'use strict';
var modalConfigs = [
    { modalId: 'guide-partner-modal', openSelector: '[data-guide-partner-open]' },
    { modalId: 'guide-facility-modal', openSelector: '[data-guide-facility-open]' },
    { modalId: 'guide-manual-modal', openSelector: '[data-guide-manual-open]' }
  ];

  function getOpenModal() {
    return document.querySelector('.guide-modal.is-open');
  }

  function openModal(modal) {
    modal._lastFocused = document.activeElement;
    modal.hidden = false;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('guide-modal-open');

    var closeBtn = modal.querySelector('.guide-modal__close-x');
    if (closeBtn) {
      closeBtn.focus();
    }
  }

  function closeModal(modal) {
    modal.classList.remove('is-open');
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');

    if (!getOpenModal()) {
      document.body.classList.remove('guide-modal-open');
    }

    if (modal._lastFocused && typeof modal._lastFocused.focus === 'function') {
      modal._lastFocused.focus();
    }
  }

  modalConfigs.forEach(function (config) {
    var modal = document.getElementById(config.modalId);
    var openBtn = document.querySelector(config.openSelector);

    if (!modal || !openBtn) {
      return;
    }

    modal.setAttribute('aria-hidden', 'true');

    openBtn.addEventListener('click', function (e) {
      e.preventDefault();
      openModal(modal);
    });

    modal.querySelectorAll('[data-guide-modal-close]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        closeModal(modal);
      });
    });

    modal.addEventListener('click', function (e) {
      if (e.target === modal.querySelector('.guide-modal__overlay')) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener('keydown', function (e) {
    var modal = getOpenModal();
    if (!modal) {
      return;
    }

    if (e.key === 'Escape') {
      closeModal(modal);
      return;
    }

    if (e.key === 'Tab') {
      var dialog = modal.querySelector('.guide-modal__dialog');
      if (!dialog) {
        return;
      }

      var focusable = dialog.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (!focusable.length) {
        return;
      }

      var first = focusable[0];
      var last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
})();
