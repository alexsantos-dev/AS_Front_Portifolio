import { useState, useEffect } from "react";
import Error from "../assets/error.svg";
import Share from "../assets/share.svg";
import Folder from "../assets/folder.svg";
import Play from "../assets/play.svg";

export function Projetos(props) {
  const [imagensTecnologias, setImagensTecnologias] = useState({});
  const [deployText, setDeployText] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
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

  const handleCompartilharClick = async () => {
    const author = "Alex Santos";
    try {
      await props.onCompartilhar(props.id);
      if (navigator.share) {
        await navigator.share({
          title: `${author}: ${props.titulo}`,
          text: `${author}: ${props.titulo} - ${props.resumo}`,
          url: props.deploy,
        });
      } else {
        const shareUrl = props.deploy;
        window.open(shareUrl, "_blank");
      }
    } catch (error) {
      console.error("Erro ao compartilhar:", error);
    }
  };
  const handleAcessarRepositorioClick = async () => {
    await props.onAcessarRepositorio(props.id);
  };

  const handleVisualizarClick = async () => {
    await props.onVisualizar(props.id);
  };

  const fecharModal = () => {
    setModalOpen(false);
    setDeployText("");
  };

  const copiarTexto = () => {
    const textArea = document.createElement("textarea");
    textArea.value = deployText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Texto copiado para a área de transferência!");
    fecharModal();
  };

  return (
    <div className="item" key={props.id}>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={fecharModal}>
              &times;
            </span>
            <p>{deployText}</p>
            <button onClick={copiarTexto}>Copiar</button>
          </div>
        </div>
      )}
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
        <button key={props.id} onClick={handleCompartilharClick}>
          <img src={Share} alt="compartilhar" />
          <span>{props.compartilhamentos}</span>
        </button>
        <button id={props.id} onClick={handleAcessarRepositorioClick}>
          <a href={props.repositorio} target="_blank" rel="external">
            <img src={Folder} alt="repositórios" />
            <span>{props.acessRepositorio}</span>
          </a>
        </button>
        <button id={props.id} onClick={handleVisualizarClick}>
          <a href={props.deploy} target="_blank" rel="external">
            <img src={Play} alt="play" />
            <span>{props.visualizacoes}</span>
          </a>
        </button>
      </div>
    </div>
  );
}
