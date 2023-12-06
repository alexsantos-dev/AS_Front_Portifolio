import { useState } from "react";

export function Projetos(props) {
  const [isAtivo, setIsAtivo] = useState(false);

  function ativo() {
    setIsAtivo((prevIsAtivo) => !prevIsAtivo);
    const audio = new Audio("./src/assets/like-sound.mp3");
    isAtivo ? audio.pause() : audio.play();
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
              isAtivo
                ? "./src/assets/coracao-ativo.webp"
                : "./src/assets/coracao.webp"
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
