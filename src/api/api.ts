import axios from "axios";

const api = axios.create({
    baseURL:"https://api.thedogapi.com/v1/",
});

export default api;