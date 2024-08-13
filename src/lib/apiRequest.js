import axios from "axios";

const apiRequest = axios.create({
    baseURL: "http://192.168.29.86:8080",
    withCredentials: true,
})

export default apiRequest;