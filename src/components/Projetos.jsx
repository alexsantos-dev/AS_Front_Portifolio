import { useState, useEffect } from "react";
import CoracaoAtivo from "../assets/coracao-ativo.webp";
import Coracao from "../assets/coracao.webp";
import Error from "../assets/error.svg";

import { LikesAnonimos } from "../services/projetos.service";

export function Projetos(props) {
  const [isAtivo, setIsAtivo] = useState(false);
  const [imagensTecnologias, setImagensTecnologias] = useState({});

  async function ativo() {
    setIsAtivo((prevIsAtivo) => !prevIsAtivo);
    const audio = new Audio("./src/assets/like-sound.mp3");
    isAtivo ? audio.pause() : audio.play();
  }

  useEffect(() => {
    async function carregarImagensTecnologias() {
      const imagens = {};
      for (const tecnologia of props.tecnologiasUsadas) {
        const tecnologiaFormatada = tecnologia.toLowerCase();
        try {
          const imagem = await import(`../assets/${tecnologiaFormatada}.webp`);
          imagens[tecnologia] = imagem.default;
        } catch (error) {
          console.warn(
            `Arquivo de imagem não encontrado para a tecnologia: ${tecnologia}`
          );
          imagens[tecnologia] = null;
        }
      }
      setImagensTecnologias(imagens);
    }

    carregarImagensTecnologias();
  }, [props.tecnologiasUsadas]);

  return (
    <div className="item" key={props.id}>
      <div className="banner">
        <img src={props.banner} />
      </div>
      <div className="descricao">
        <h3>{props.titulo}</h3>
        <p>{props.resumo}</p>
        <div className="tecnologias">
          {props.tecnologiasUsadas.map((tecnologia, index) => (
            <span key={index}>
              {tecnologia}
              <img
                src={imagensTecnologias[tecnologia] || Error}
                alt={tecnologia}
              />
            </span>
          ))}
        </div>
      </div>
      <div className="interacoes">
        <button onClick={ativo}>
          <img
            src={`${isAtivo ? CoracaoAtivo : Coracao}`}
            className={`${isAtivo ? "ativo" : ""}`}
            alt="like"
          />
          <span>{props.likes.length}</span>
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
