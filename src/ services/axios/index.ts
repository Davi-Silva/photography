import axios, { AxiosRequestConfig } from "axios";

export const getFetch = async (url: string) => {
  const data = await axios.get(url);

  return data;
};
