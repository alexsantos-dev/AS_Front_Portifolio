import { useState } from "react";
import { Nav } from "./Navbar.styled";

export function Navbar() {
  const [isAtivo, setIsAtivo] = useState(false);
  const [homeAtivo, setHomeAtivo] = useState(true);
  const [habAtivo, setHabAtivo] = useState(false);
  const [projAtivo, setProjAtivo] = useState(false);

  function ativo() {
    setIsAtivo((prevIsAtivo) => !prevIsAtivo);
  }
  function HomeAtivo() {
    setHomeAtivo(true);
    setHabAtivo(false);
    setProjAtivo(false);
  }

  function HabAtivo() {
    setHomeAtivo(false);
    setHabAtivo(true);
    setProjAtivo(false);
  }

  function ProjAtivo() {
    setHomeAtivo(false);
    setHabAtivo(false);
    setProjAtivo(true);
  }

  return (
    <Nav>
      <ul className={`contato ${isAtivo ? "item-ativo" : ""}`}>
        <li>
          <button
            onClick={ativo}
            title="Contatos"
            className={`${isAtivo ? "" : "heartBeat"}`}>
            <img src="/telefone.png" alt="contato" title="Contato" />
          </button>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alex-santos-b020b5296"
            target="blank">
            <img src="/linkedin.webp" alt="linkedIn" title="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://github.com/alexsantos-dev" target="blank">
            <img src="/github.webp" alt="github" title="Github" />
          </a>
        </li>
        <li>
          <a href="https://wa.me/+5598981630767" target="blank">
            <img src="/whatsapp.webp" alt="whatsapp" title="Whatsapp" />
          </a>
        </li>
      </ul>

      <ul className="logo">
        <li>
          <a href="#">
            <img src="/logo1.webp" alt="logo" className="logoIcon" />
          </a>
        </li>
      </ul>

      <ul className="sections">
        <li>
          <a
            href="#Sobre"
            onClick={HomeAtivo}
            className={`${homeAtivo ? "linkAtivo" : ""}`}>
            Sobre
          </a>
        </li>
        <li>
          <a
            href="#Habilidades"
            onClick={HabAtivo}
            className={`${habAtivo ? "linkAtivo" : ""}`}>
            Habilidades
          </a>
        </li>
        <li>
          <a
            href="#Projetos"
            onClick={ProjAtivo}
            className={`${projAtivo ? "linkAtivo" : ""}`}>
            Projetos
          </a>
        </li>
      </ul>
    </Nav>
  );
}
