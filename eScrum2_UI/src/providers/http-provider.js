import axios from "axios";
import { URL_GLOBAL } from "../config/index";

const service = axios.create({
    baseURL: URL_GLOBAL[process.env.NODE_ENV],
    timeout: 5000,
});

export default service;