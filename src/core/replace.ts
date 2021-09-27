import { parse } from "./parser";

export function replace(node: Node, btcPrice: number) {
  const num = parse(node.textContent);
  if (num) {
    const format = new Intl.NumberFormat(navigator.language, {
      style: "currency",
      currency: "BTC",
      maximumFractionDigits: 9,
    });
    node.textContent = format.format(num / btcPrice);
  }
}
