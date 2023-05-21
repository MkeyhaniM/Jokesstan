export function regexPhonenumber(number) {
  var num = number;

  const pattern = new RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  );

  var finallResult = pattern.matchAll(num);

  return finallResult;
}
