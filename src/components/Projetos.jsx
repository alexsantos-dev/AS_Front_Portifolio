import { useState, useEffect } from "react";
import Error from "../assets/error.svg";
import Share from "../assets/share.svg";
import Folder from "../assets/folder.svg";
import Play from "../assets/play.svg";

export function Projetos(props) {
  const [imagensTecnologias, setImagensTecnologias] = useState({});
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
        <img src={props.banner} alt={`Banner do projeto ${props.titulo}`} />
      </div>
      <div className="descricao">
        <h3>{props.titulo}</h3>
        <p>{props.resumo}</p>
        <div className="tecnologias">
          {props.tecnologiasUsadas.map((tecnologia) => (
            <span key={tecnologia}>
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
        <button id={props.id} onClick={() => props.onCompartilhar(props.id)}>
          <img src={Share} alt="compartilhar" />
          <span>{props.compartilhamentos}</span>
        </button>
        <button
          id={props.id}
          onClick={() => props.onAcessarRepositorio(props.id)}>
          <a href={props.repositorio} target="_blank" rel="external">
            <img src={Folder} alt="repositórios" />
            <span>{props.acessRepositorio}</span>
          </a>
        </button>
        <button id={props.id} onClick={() => props.onVisualizar(props.id)}>
          <a href={props.deploy} target="_blank" rel="external">
            <img src={Play} alt="play" />
            <span>{props.visualizacoes}</span>
          </a>
        </button>
      </div>
    </div>
  );
}
