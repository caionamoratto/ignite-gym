import { AppError } from "@utils/AppError";
import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.1.2:3333"
});

//interceptando todas as respostas feitas pelo o Backend.
api.interceptors.response.use(response => response, error => {

    // biome-ignore lint/complexity/useOptionalChain: <explanation>
    if(error.response && error.response.data){
        return Promise.reject(new AppError(error.response.data.message));
    // biome-ignore lint/style/noUselessElse: <explanation>
    } else {
        return Promise.reject(error);
    }

});

export {api};