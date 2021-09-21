import { CURRENCY_SYMBOL } from "./parser";

export function createWalker(node: Node) {
  return document.createTreeWalker(node, NodeFilter.SHOW_TEXT, {
    acceptNode(node: Node): number {
      if (node.textContent.indexOf(CURRENCY_SYMBOL) > -1) {
        return NodeFilter.FILTER_ACCEPT;
      }
    },
  });
}

export function walk(root: Node, callback: (node: Node) => void) {
  const walker = createWalker(root);
  let node;
  while ((node = walker.nextNode())) {
    callback(node);
  }
}
