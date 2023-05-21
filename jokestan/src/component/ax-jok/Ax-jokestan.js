import axios from "axios";

// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
 
// axios.defaults.baseURL = 'http://localhost:1010';

const request = async () => {
  return axios.get(`http://localhost:1010/jokestanWord/`).then((req) => {
    return req.data;
  });
};

export default request;