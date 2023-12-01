import { MobileFootCont } from "./MobileFooter.styled";

export function MobileFooter() {
  return (
    <MobileFootCont>
      <ul>
        <li>
          <button>
            <a href="#">
              <img src="/house.svg" alt="home" />
              Home
            </a>
          </button>
        </li>
        <li>
          <button>
            <a href="#">
              <img src="/tools.svg" alt="habilidades" />
              Habilidades
            </a>
          </button>
        </li>
        <li>
          <button>
            <a href="#">
              <img src="/projects.svg" alt="projetos" className="projectIcon" />
              Projetos
            </a>
          </button>
        </li>
      </ul>
    </MobileFootCont>
  );
}
