import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3030";

export async function AxSign(userInformation) {
  return axios
    .post("http://localhost:3030/post", { userInformation })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}
