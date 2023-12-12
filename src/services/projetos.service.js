import axios from "axios";

const baseURL = "https://api-portifolio-ohio-br.onrender.com";

const axiosInstance = axios.create({
    baseURL,
    timeout: 40000,
    withCredentials: true,
});

axiosInstance.interceptors.request.use(config => {
    config.headers['Access-Control-Allow-Origin'] = 'https://alexsantos-fullstack.vercel.app';
    config.headers['Access-Control-Allow-Methods'] = 'GET, PATCH';
    config.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
    return config;
});

export function getRecentes() {
    return axiosInstance.get("/projetos/recentes");
}

export function getRelevantes() {
    return axiosInstance.get("/projetos/relevantes");
}

export function visualizar(projetoId) {
    return axiosInstance.patch(`/projetos/visualizacoes/${projetoId}`);
}

export function compartilhar(projetoId) {
    return axiosInstance.patch(`/projetos/compartilhar/${projetoId}`);
}

export function acessarRep(projetoId) {
    return axiosInstance.patch(`/projetos/acessRepositorio/${projetoId}`);
}
