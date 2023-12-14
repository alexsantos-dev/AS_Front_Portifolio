import axios from "axios";

const baseURL = "https://api-portifolio-ohio-br.onrender.com";

const axiosInstance = axios.create({
    baseURL,
    timeout: 60000,
    withCredentials: true,
});

axiosInstance.interceptors.request.use(config => {
    config.headers['Access-Control-Allow-Origin'] = 'https://alexsantos-fullstack.vercel.app';
    config.headers['Access-Control-Allow-Methods'] = 'GET, PATCH';
    config.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
    return config;
});

export function getRecentes() {
    return axiosInstance.get("/recentes");
}

export function getRelevantes() {
    return axiosInstance.get("/relevantes");
}

export function visualizar(projetoId) {
    return axiosInstance.patch(`/visualizacoes/${projetoId}`);
}

export function compartilhar(projetoId) {
    return axiosInstance.patch(`/compartilhar/${projetoId}`);
}

export function acessarRep(projetoId) {
    return axiosInstance.patch(`/acessRepositorio/${projetoId}`);
}
