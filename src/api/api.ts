import axios from "axios";

import { SearchParamsType } from "./types";

const instance = axios.create({
  baseURL: "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Token 84b471e90260340c9f2da2ece5e9733d35422919`,
  },
});

export const addressAPI = {
  getAddress(params: SearchParamsType) {
    return instance.get("address", { params });
  },
};
