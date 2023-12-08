import { MobileFootCont } from "./MobileFooter.styled";
import { useState } from "react";
import ProjectIcon from "../assets/projects.svg";
import ToolsIcon from "../assets/tools.svg";
import HomeIcon from "../assets/me.svg";

export function MobileFooter() {
  const [homeAtivo, setHomeAtivo] = useState(true);
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
      <div>
        <button
          onClick={HomeAtivo}
          className={` sobreBtn ${homeAtivo ? "ativo" : ""}`}>
          <a href="#Sobre">
            <img src={HomeIcon} alt="home" />
            Sobre
          </a>
        </button>

        <button
          onClick={HabAtivo}
          className={`habBtn ${habAtivo ? "ativo" : ""}`}>
          <a href="#Habilidades">
            <img src={ToolsIcon} alt="habilidades" />
            Habilidades
          </a>
        </button>

        <button
          onClick={ProjAtivo}
          className={`projectBtn ${projAtivo ? "ativo" : ""}`}>
          <a href="#Projetos">
            <img src={ProjectIcon} alt="projetos" />
            Projetos
          </a>
        </button>
      </div>
    </MobileFootCont>
  );
}
