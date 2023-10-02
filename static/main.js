/**
 * A user setting might discourage unnecessary motion on the page,
 * in which case the scroll animation should be not activated.
 */
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  duplicateInnerScrollersContent();
}

function duplicateInnerScrollersContent() {
  const scrollers = document.querySelectorAll(".scroller");

  scrollers.forEach((scroller) => {
    scroller.dataset.animated = ""; // The data attribute that triggers the animation.
    scroller.querySelectorAll(".scroller__inner").forEach((inner) => {
      // Duplicate list items to give the illusion of wrapping elements.
      inner.append(...inner.cloneNode(true).children);
    });
  });
}