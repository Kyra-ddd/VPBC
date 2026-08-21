/**
 * nav.js — Shared navigation for Product Center prototypes
 * - Sidebar links open in a NEW BROWSER TAB
 * - Clicking the same link again focuses the EXISTING tab (no duplicate)
 */

function openPage(url, windowName) {
  // window.open with a fixed name = if that name already has an open window,
  // the browser focuses it instead of opening a duplicate
  window.open(url, windowName);
}

// Named windows — one per page type
const WINDOW_NAMES = {
  '01-product-management.html': 'vpProductManagement',
  '02-product-detail.html':    'vpProductDetail',
  '03-share-class.html':       'vpShareClass',
};

// Hijack sidebar nav-item links that point to .html pages
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.nav-item[href]').forEach(function (link) {
    const href = link.getAttribute('href');
    if (!href.endsWith('.html')) return;
    const name = WINDOW_NAMES[href];
    if (!name) return;

    link.removeAttribute('href');
    link.style.cursor = 'pointer';
    link.addEventListener('click', function (e) {
      e.preventDefault();
      openPage(href, name);
    });
  });
});
