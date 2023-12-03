import { useState } from "react";
import { Nav } from "./Navbar.styled";

export function Navbar() {
  const [isAtivo, setIsAtivo] = useState(false);

  function ativo() {
    setIsAtivo((prevIsAtivo) => !prevIsAtivo);
  }

  return (
    <Nav>
      <ul className={`contato ${isAtivo ? "item-ativo" : ""}`}>
        <li>
          <button onClick={ativo} title="Contatos">
            <img src="/telefone.png" alt="contato" title="Contato" />
          </button>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alex-santos-b020b5296"
            target="blank">
            <img src="/linkedin2.png" alt="linkedIn" title="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://github.com/alexsantos-dev" target="blank">
            <img src="/github2.png" alt="github" title="Github" />
          </a>
        </li>
        <li>
          <a href="https://wa.me/+5598981630767" target="blank">
            <img src="/whatsapp2.png" alt="whatsapp" title="Whatsapp" />
          </a>
        </li>
      </ul>

      <ul className="logo">
        <li>
          <a href="#">
            <img src="/logo3.webp" alt="logo" className="logoIcon" />
          </a>
        </li>
      </ul>

      <ul className="sections">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#Habilidades">Habilidades</a>
        </li>
        <li>
          <a href="#Projetos">Projetos</a>
        </li>
      </ul>
    </Nav>
  );
}
