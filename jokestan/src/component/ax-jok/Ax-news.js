import axios from "axios";

const request = () => {
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=272a8a293ef049aa93bed7979ab8c41d";

  return axios.get(url, (e) => {
    console.log(e);
  });
};

export default request;