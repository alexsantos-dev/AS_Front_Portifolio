import { useState } from "react";

export function Projetos(props) {
  const [isAtivo, setIsAtivo] = useState(false);

  function ativo() {
    setIsAtivo((prevIsAtivo) => !prevIsAtivo);
  }
  return (
    <div className="item">
      <div className="banner">
        <img src={props.banner} />
      </div>
      <div className="descricao">
        <h3>{props.titulo}</h3>
        <p>{props.resumo}</p>
        <h4>{props.tecnologiasUsadas}</h4>
      </div>
      <div className="interacoes">
        <button onClick={ativo}>
          <img
            src={`${
              isAtivo ? "./src/assets/heart-fill.svg" : "./src/assets/heart.svg"
            }`}
            className={`${isAtivo ? "ativo" : ""}`}
            alt="like"
          />
          <span>{props.likes}</span>
        </button>
        <button>
          <img src="./src/assets/share.svg" alt="compartilhar" />
        </button>
        <button>
          <img src="./src/assets/folder.svg" alt="repositórios" />
        </button>
        <button>
          <img src="./src/assets/play.svg" alt="play" />
        </button>
      </div>
    </div>
  );
}
