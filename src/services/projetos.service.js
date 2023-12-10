import axios from "axios";

const baseURL = "https://api-portifolio-ohio-br.onrender.com"

export function getRecentes() {
    const res = axios.get(`${baseURL}/projetos/recentes`)
    return res
}

export function getRelevantes() {
    const res = axios.get(`${baseURL}/projetos/relevantes`)
    return res
}

export function visualizar(projetoId) {
    const res = axios.patch(`${baseURL}/projetos/visualizacoes/${projetoId}`)
    return res.data
}

export function compartilhar(projetoId) {
    const res = axios.patch(`${baseURL}/projetos/compartilhar/${projetoId}`)
    return res.data
}

export function acessarRep(projetoId) {
    const res = axios.patch(`${baseURL}/projetos/acessRepositorio/${projetoId}`)
    return res.data
}