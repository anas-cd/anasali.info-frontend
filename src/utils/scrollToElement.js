import { scroll } from "quasar";

const { getScrollTarget, setVerticalScrollPosition } = scroll;

export default function ({
  el, // one of
  elId, // them is
  url, // a must
  marginTop = 20,
  duration = 150,
  styleClass = "card__highlight",
  styleDuration = 3000,
} = {}) {
  if (el || elId) {
    // for same page rendered elements only
    if (!el) {
      el = document.getElementById(elId);
    }
    const target = getScrollTarget(el);
    const offset = el.offsetTop + marginTop;
    setVerticalScrollPosition(target, offset, duration);

    // -- styling --
    el.classList.add(styleClass);
    setTimeout(() => {
      el.classList.remove(styleClass);
    }, styleDuration);
  } else if (url) {
    // for # usage with router
  }
}
