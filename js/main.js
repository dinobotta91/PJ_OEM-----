(function () {
  const toggle = document.getElementById('navToggle');
  const nav    = document.getElementById('siteNav');
  if (!toggle || !nav) return;

  function openMenu() {
    nav.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation');
  }

  function closeMenu() {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  }

  toggle.addEventListener('click', () => {
    nav.classList.contains('open') ? closeMenu() : openMenu();
  });

  // Close on nav link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Esc
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  // Reset when resizing to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 767) closeMenu();
  });
}());

document.addEventListener('contextmenu', function (event) {
  if (event.target.closest('img')) {
    event.preventDefault();
  }
});

(function () {
  const form = document.querySelector('.contact-form[action="https://formspree.io/f/mwlepnag"]');
  if (!form) return;

  const emailInput = form.querySelector('input[name="email"]');
  const confirmEmailInput = form.querySelector('input[name="confirm_email"]');
  const confirmEmailError = form.querySelector('#confirm-email-error');
  const privacyConsentInput = form.querySelector('input[name="privacy_consent"]');
  if (!emailInput || !confirmEmailInput || !confirmEmailError || !privacyConsentInput) return;

  const successRedirectUrl = 'https://paninkret-oem.pages.dev/thanks.html';

  function clearConfirmEmailError() {
    confirmEmailError.hidden = true;
    confirmEmailInput.setAttribute('aria-invalid', 'false');
  }

  function showConfirmEmailError() {
    confirmEmailError.hidden = false;
    confirmEmailInput.setAttribute('aria-invalid', 'true');
  }

  function emailsMatch() {
    return emailInput.value.trim() === confirmEmailInput.value.trim();
  }

  function consentChecked() {
    return privacyConsentInput.checked;
  }

  emailInput.addEventListener('input', function () {
    if (confirmEmailInput.value && emailsMatch()) {
      clearConfirmEmailError();
    }
  });

  confirmEmailInput.addEventListener('input', function () {
    if (emailsMatch()) {
      clearConfirmEmailError();
    }
  });

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    if (!emailsMatch()) {
      showConfirmEmailError();
      confirmEmailInput.focus();
      return;
    }

    if (!consentChecked()) {
      privacyConsentInput.focus();
      return;
    }

    clearConfirmEmailError();

    const formData = new FormData(form);
    formData.delete('confirm_email');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        window.location.href = successRedirectUrl;
      }
    } catch (error) {
      // Keep the user on the form when submission fails.
    }
  });
}());
