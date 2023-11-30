import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const itens = document.querySelectorAll(".contato li");

export function ativo() {
  itens.forEach((item) => {
    item.classList.toggle(".item-ativo");
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
