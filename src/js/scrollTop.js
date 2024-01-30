export function scrollToTop(element) {
  const cardEl = element.firstElementChild;
  const rect = cardEl.getBoundingClientRect().height * 2;

  window.scrollBy({
    top: rect,
    behavior: 'smooth',
  });
}
