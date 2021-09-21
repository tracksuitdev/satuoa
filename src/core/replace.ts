import { parse } from "./parser";

export function replace(node: Node, btcPrice: number) {
  const num = parse(node.textContent);
  if (num) {
    node.textContent = (num / btcPrice).toString();
  }
}
