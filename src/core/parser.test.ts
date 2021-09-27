import { parse } from "./parser";

describe("parser tests", () => {
  test("regular number with symbol", () => {
    expect(parse("sadasd123456$")).toEqual(123456);
  });
  test("comma separator, dot decimal", () => {
    expect(parse("asdasdsad100,000.10$")).toEqual(100_000.1);
  });
  test("dot separator, comma decimal", () => {
    expect(parse("100.000,10$")).toEqual(100_000.1);
  });
  test("large number", () => {
    expect(parse("100,000,000,000.11")).toEqual(100_000_000_000.11);
  });
  test("multiple currency symbols", () => {
    expect(parse("$100$")).toEqual(100);
  });
});
