export const CURRENCY_SYMBOL = "$";

const COMMA_SEPARATOR_DOT_DECIMAL = /^\d{1,3}(,\d{3})*(\.\d+)?$/;
const DOT_SEPARATOR_COMMA_DECIMAL = /^\d{1,3}(\.\d{3})*(,\d+)?$/;
const NON_NUMBER = /[^\d.,-]/g;
const COMMA_GLOBAL = /,/g;
const DOT_GLOBAL = /\./g;

function globalRegex(search: string) {
  return new RegExp(search, "g");
}

export function parse(text: string, currencySymbol = CURRENCY_SYMBOL) {
  const cleaned = text.replace(NON_NUMBER, "").replace(globalRegex(currencySymbol), "").trim();
  if (cleaned) {
    if (COMMA_SEPARATOR_DOT_DECIMAL.test(cleaned)) {
      return parseFloat(cleaned.replace(COMMA_GLOBAL, ""));
    }
    if (DOT_SEPARATOR_COMMA_DECIMAL.test(cleaned)) {
      return parseFloat(cleaned.replace(DOT_GLOBAL, "").replace(COMMA_GLOBAL, "."));
    }
    return parseFloat(cleaned);
  }
  return NaN;
}
