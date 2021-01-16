// ** API CALLS **

import axios from "axios";
import { apiUrl } from "../../config";

export const fetchData = (searchTitle) => {
  return axios.get(`${apiUrl()}&s=${searchTitle}`);
};
