import { useState, useEffect } from "react";
import CoracaoAtivo from "../assets/coracao-ativo.webp";
import Coracao from "../assets/coracao.webp";
import Error from "../assets/error.svg";

import { LikesAnonimos } from "../services/projetos.service";

export function Projetos(props) {
  const [isAtivo, setIsAtivo] = useState(false);
  const [imagensTecnologias, setImagensTecnologias] = useState({});
  const [ativoEmAndamento, setAtivoEmAndamento] = useState(false);
  const [numLikes, setNumLikes] = useState(props.likes.length);

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

    async function verificarLike() {
      try {
        const usuarioAnonimoIdCache = localStorage.getItem("usuarioAnonimoId");
        if (usuarioAnonimoIdCache) {
          const usuarioAnonimoIdDaResposta = await LikesAnonimos(
            props.id,
            usuarioAnonimoIdCache
          );
          const usuarioAnonimoCurtiu =
            usuarioAnonimoIdDaResposta.likes.length > 0;
          setIsAtivo(usuarioAnonimoCurtiu);

          setNumLikes(usuarioAnonimoIdDaResposta.likes.length);
        }
      } catch (error) {
        console.error("Erro ao verificar like:", error);
      }
    }

    carregarImagensTecnologias();
    verificarLike();
  }, [props.tecnologiasUsadas, props.id]);

  async function ativo() {
    try {
      if (ativoEmAndamento) {
        return;
      }

      setAtivoEmAndamento(true);

      const usuarioAnonimoIdCache = localStorage.getItem("usuarioAnonimoId");
      const usuarioAnonimoIdDaResposta = await LikesAnonimos(
        props.id,
        usuarioAnonimoIdCache
      );

      if (
        usuarioAnonimoIdDaResposta !== null &&
        usuarioAnonimoIdDaResposta !== undefined
      ) {
        const audio = new Audio("./src/assets/like-sound.mp3");
        setIsAtivo((prevIsAtivo) => {
          prevIsAtivo ? audio.pause() : audio.play();
          return !prevIsAtivo;
        });

        setNumLikes(usuarioAnonimoIdDaResposta.likes.length);

        localStorage.setItem(
          "usuarioAnonimoId",
          usuarioAnonimoIdDaResposta.likes[0].usuarioAnonimoId
        );
      } else {
        console.error(
          "Erro ao obter usuarioAnonimoId:",
          usuarioAnonimoIdDaResposta
        );
      }
    } catch (error) {
      console.error("Erro ao dar like:", error);
    } finally {
      setAtivoEmAndamento(false);
    }
  }

  return (
    <div className="item" key={props.id}>
      <div className="banner">
        <img src={props.banner} alt={`Banner do projeto ${props.titulo}`} />
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
                alt={`Logo da tecnologia ${tecnologia}`}
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
          <span>{numLikes}</span>
        </button>
        <button>
          <img src="./src/assets/share.svg" alt="compartilhar" />
          <span>{props.compartilhamentos}</span>
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
