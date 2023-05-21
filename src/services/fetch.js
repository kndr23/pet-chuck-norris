import axios from "axios";

import { API_URL } from "../constants/api";

export const fetchData = async (path) => {
  try {
    const { data } = await axios.get(API_URL + path);
    return data;
  } catch (error) {
    console.error(error);
  }
};
