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

export async function LikesAnonimos(id) {
    try {
        const res = await axios.patch(`${baseURL}/projetos/like/${id}`);
        return res.data
    } catch (error) {
        console.error("Erro ao dar like:", error);
        throw error;
    }
}