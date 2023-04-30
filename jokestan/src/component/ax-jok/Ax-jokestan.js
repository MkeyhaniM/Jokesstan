import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

const request = async () => {
  return axios.get(`/jokestanWord`).then((req) => {
    return req.data;
  });
};

export default request;