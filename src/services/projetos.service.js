import axios from "axios";

const baseURL = "https://api-portifolio-ohio-br.onrender.com";

export function getRecentes() {
    return axios.get(`${baseURL}/projetos/recentes`);
}

export function getRelevantes() {
    return axios.get(`${baseURL}/projetos/relevantes`);
}

export function visualizar(projetoId) {
    return axios.patch(`${baseURL}/projetos/visualizacoes/${projetoId}`);
}

export function compartilhar(projetoId) {
    return axios.patch(`${baseURL}/projetos/compartilhar/${projetoId}`);
}

export function acessarRep(projetoId) {
    return axios.patch(`${baseURL}/projetos/acessRepositorio/${projetoId}`)
}