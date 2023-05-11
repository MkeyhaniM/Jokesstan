import * as React from "react";

export const Copy = async (e) => {
  var value = e;

  try {
    await navigator.clipboard.writeText(value);
    alert("The sentence copied");
  } catch (err) {
    alert("The sentense dose not copy !");
  }
};
