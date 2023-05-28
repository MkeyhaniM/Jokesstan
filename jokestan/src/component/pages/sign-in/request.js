import { AxSign } from "../../ax-jok/Ax-sign";

import { regexPhonenumber } from "./regexPhonenumber";

export function request(user, gmail, number) {
  // const getResult = regexPhonenumber(number.value);

  var information = {
    user: user.value,
    gmail: gmail.value,
    number: number.value,
  };

  return AxSign(information)
    .then((re) => re)
    .catch((e) => e);
}
