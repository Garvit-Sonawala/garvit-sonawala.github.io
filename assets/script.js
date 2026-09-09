// Research entries: click a project title to expand its full writeup.
// One entry open at a time.
document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('.entry-trigger');

  triggers.forEach((btn) => {
    btn.addEventListener('click', () => {
      const entry = btn.closest('.entry');
      if (!entry) return;
      const willOpen = !entry.classList.contains('is-open');

      document.querySelectorAll('.entry.is-open').forEach((openEntry) => {
        if (openEntry !== entry) {
          openEntry.classList.remove('is-open');
          const otherTrigger = openEntry.querySelector('.entry-trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      entry.classList.toggle('is-open', willOpen);
      btn.setAttribute('aria-expanded', String(willOpen));
    });
  });
});
