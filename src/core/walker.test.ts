import { walk } from "./walker";

function createNode() {
  const node = document.createElement("div");
  node.innerHTML = "<div>100$<div><div>1</div><div>2</div></div></div>";
  return node;
}

describe("walker tests", () => {
  test("callback is called for text nodes with currency symbol", () => {
    document.body.appendChild(createNode());
    const callback = jest.fn();

    walk(document.body, callback);

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
