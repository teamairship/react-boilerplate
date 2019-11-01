import axios from "axios";

const baseAPI = axios.create({
  baseURL: process.env.REACT_APP_API,
  transformRequest: [
    data => {
      if (data !== undefined && data !== "") {
        return JSON.stringify(data);
      }
      return data;
    }
  ]
});

export default baseAPI;
