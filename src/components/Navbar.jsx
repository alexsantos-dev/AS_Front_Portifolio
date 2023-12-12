import { useState } from "react";
import { Nav } from "./Navbar.styled";
import PhoneIcon from "../assets/telefone.png";
import LinkedInIcon from "../assets/linkedin.webp";
import GithubIcon from "../assets/github.webp";
import WhatsappIcon from "../assets/whatsapp.webp";
import LogoIcon from "../assets/logo1.webp";

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
            <img loading="lazy" src={PhoneIcon} alt="contato" title="Contato" />
          </button>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alex-santos-b020b5296"
            target="blank">
            <img loading="lazy" src={LinkedInIcon} alt="linkedIn" title="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://github.com/alexsantos-dev" target="blank">
            <img loading="lazy" src={GithubIcon} alt="github" title="Github" />
          </a>
        </li>
        <li>
          <a href="https://wa.me/+5598981630767" target="blank">
            <img loading="lazy" src={WhatsappIcon} alt="whatsapp" title="Whatsapp" />
          </a>
        </li>
      </ul>

      <ul className="logo">
        <li>
          <a href="#">
            <img loading="lazy" src={LogoIcon} alt="logo" className="logoIcon" />
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
