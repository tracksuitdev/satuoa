export const CURRENCY_SYMBOL = "$";

const COMMA_REGEX = /^\d{1,3}(,\d{3})*(\.\d+)?$/;
const DOT_REGEX = /^\d{1,3}(\.\d{3})*(,\d+)?$/;
const NON_NUMBER = /\D/;

export function parse(text: string) {
  const cleaned = text.replace(NON_NUMBER, "").replace(CURRENCY_SYMBOL, "").trim();
  if (cleaned) {
    if (COMMA_REGEX.test(cleaned)) {
      return parseFloat(cleaned.replace(",", ""));
    }
    if (DOT_REGEX.test(cleaned)) {
      return parseFloat(cleaned.replace(".", "").replace(",", "."));
    }
    return parseFloat(cleaned);
  }
  return NaN;
}
