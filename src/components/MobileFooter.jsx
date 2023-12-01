import { MobileFootCont } from "./MobileFooter.styled";

export function MobileFooter() {
  return (
    <MobileFootCont>
      <ul>
        <li>
          <button>
            <a href="#Home">
              <img src="/house.svg" alt="home" />
              Home
            </a>
          </button>
        </li>
        <li>
          <button>
            <a href="#Habilidades">
              <img src="/tools.svg" alt="habilidades" />
              Habilidades
            </a>
          </button>
        </li>
        <li>
          <button>
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
