import { MobileFootCont } from "./MobileFooter.styled";
import { useState } from "react";

export function MobileFooter() {
  const [homeAtivo, setHomeAtivo] = useState(false);
  const [habAtivo, setHabAtivo] = useState(false);
  const [projAtivo, setProjAtivo] = useState(false);

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
    <MobileFootCont>
      <ul>
        <li>
          <button onClick={HomeAtivo} className={`${homeAtivo ? "ativo" : ""}`}>
            <a href="#Home">
              <img src="/house.svg" alt="home" />
              Home
            </a>
          </button>
        </li>
        <li>
          <button
            onClick={HabAtivo}
            className={`habBtn ${habAtivo ? "ativo" : ""}`}>
            <a href="#Habilidades">
              <img src="/tools.svg" alt="habilidades" />
              Habilidades
            </a>
          </button>
        </li>
        <li>
          <button onClick={ProjAtivo} className={`${projAtivo ? "ativo" : ""}`}>
            <a href="#Projetos">
              <img src="/projects.svg" alt="projetos" className="projectIcon" />
              Projetos
            </a>
          </button>
        </li>
      </ul>
    </MobileFootCont>
  );
}
