import axios from "axios";

const baseURL = "https://as-api-portifolio.onrender.com"

export function getRecentes() {
    const res = axios.get(`${baseURL}/projetos/recentes`)
    return res
}

export function getRelevantes() {
    const res = axios.get(`${baseURL}/projetos/relevantes`)
    return res
}

export function LikesAnonimos() {
    const res = axios.patch(`${baseURL}/projetos/like/:id`)
    return res
}