import { replace } from "./replace";

describe("replace tests", () => {
  test("replace", () => {
    const node = document.createElement("div");
    node.textContent = "1$";
    document.body.appendChild(node);

    replace(node, 100_000_000);

    expect(node.textContent).toEqual("BTC 0.00000001");
  });
});
