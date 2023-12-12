import axios from "axios";

const baseURL = "https://api-portifolio-ohio-br.onrender.com";

const axiosInstance = axios.create({
    baseURL,
    timeout: 10000,
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
