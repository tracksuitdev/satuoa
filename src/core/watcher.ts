import { CURRENCY_SYMBOL } from "./parser";

export function watch(replace: (node: Node) => void, walk: (node: Node) => void) {
  const observer = new MutationObserver((mutation) => {
    mutation.forEach((m) => {
      if (
        m.type === "characterData" &&
        m.target.nodeType == Node.TEXT_NODE &&
        m.target.textContent.indexOf(CURRENCY_SYMBOL) > -1
      ) {
        replace(m.target);
      }
      if (m.type === "childList" && m.addedNodes) {
        m.addedNodes.forEach((n) => {
          walk(n);
        });
      }
    });
  });
  observer.observe(document, { subtree: true, characterData: true, childList: true });
}
