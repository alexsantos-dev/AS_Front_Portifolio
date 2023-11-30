const itens = document.querySelectorAll(".contato li");

export function ativo() {
    itens.forEach((item) => {
        item.classList.toggle("item-ativo");
    });
}  