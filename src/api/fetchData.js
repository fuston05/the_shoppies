// ** API CALLS **

import axios from "axios";
import { apiUrl } from "../config";

export const fetchData = (searchTitle, page) => {
  return axios.get(`${apiUrl()}&s=${searchTitle}&page= ${page}`);
};
