// Research page: click a project to open its full writeup in the side panel.
document.addEventListener('DOMContentLoaded', () => {
  const sidePanel = document.getElementById('side-panel');
  const backdrop = document.getElementById('panel-backdrop');
  const closeBtn = document.getElementById('panel-close');
  if (!sidePanel || !backdrop || !closeBtn) return; // not on this page

  const items = document.querySelectorAll('.topic-item');
  const panels = document.querySelectorAll('.panel-body');

  function openPanel(id) {
    panels.forEach((panel) => {
      panel.hidden = panel.dataset.panelId !== id;
    });
    sidePanel.classList.add('is-open');
    backdrop.classList.add('is-visible');
    sidePanel.scrollTop = 0;
  }

  function closePanel() {
    sidePanel.classList.remove('is-open');
    backdrop.classList.remove('is-visible');
  }

  items.forEach((btn) => {
    btn.addEventListener('click', () => openPanel(btn.dataset.panel));
  });

  closeBtn.addEventListener('click', closePanel);
  backdrop.addEventListener('click', closePanel);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePanel();
  });
});
