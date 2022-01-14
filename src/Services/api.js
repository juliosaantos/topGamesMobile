import axios from "axios";

const api = axios.create({
    baseURL: 'https://www.mmobomb.com/api1/'
});

export default api;
