import axios from "axios";

const baseURL = "http://18.231.155.174:3000";

const axiosInstance = axios.create({
    baseURL,
    timeout: 40000,
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
