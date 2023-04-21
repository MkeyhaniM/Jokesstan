import axios from "axios";

axios.defaults.baseURL = "http://localhost:1010";

const request = async () => {
  return axios.get(`/jokestanWord`);
};

export default request;
