import { walk } from "./core/walker";
import { replace } from "./core/replace";
import { watch } from "./core/watcher";

fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd", {
  method: "GET",
  headers: {
    accept: "application/json",
  },
}).then((response) => {
  response.json().then((body: { bitcoin: { usd: number } }) => {
    const btcPrice = body.bitcoin.usd;
    walk(document.body, (node) => replace(node, btcPrice));
    watch(
      (node: Node) => replace(node, btcPrice),
      (node: Node) => walk(node, (node: Node) => replace(node, btcPrice))
    );
  });
});
