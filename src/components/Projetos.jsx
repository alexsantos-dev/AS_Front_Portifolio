import { useState, useEffect } from "react";
import Share from "../assets/share.webp";
import Folder from "../assets/folder.webp";
import Play from "../assets/play.webp";

export function Projetos(props) {
  const [imagensTecnologias, setImagensTecnologias] = useState({});
  const [deployText, setDeployText] = useState("");
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [bannerImage, setBannerImage] = useState(null);
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

  useEffect(() => {
    async function carregarImagemBanner() {
      const bannerFormatado = props.banner.toLowerCase();
      try {
        const imagemBanner = await import(
          `../assets/banners/${bannerFormatado}.webp`
        );
        setBannerImage(imagemBanner.default);
      } catch (error) {
        console.warn(
          `Arquivo de imagem do banner não encontrado para o projeto com banner: ${props.banner}`
        );
        setBannerImage(null);
      }
    }

    carregarImagemBanner();
  }, [props.banner]);

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
        setDeployText(props.deploy);
        setDialogOpen(true);
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

  const fecharDialog = () => {
    setDialogOpen(false);
    setDeployText("");
  };

  const copiarTexto = () => {
    const textArea = document.createElement("textarea");
    textArea.value = deployText;
    document.body.appendChild(textArea);
    textArea.select();
    document.body.removeChild(textArea);
    alert("Texto copiado para a área de transferência!");
    fecharDialog();
  };

  return (
    <div className="item" key={props.id}>
      <div className="banner">
        <h3>{props.titulo}</h3>
        <img
          loading="lazy"
          src={bannerImage || Error}
          alt={`Banner do projeto ${props.titulo}`}
        />
      </div>
      <div className="descricao">
        <p>{props.resumo}</p>
        <div className="tecnologias">
          {props.tecnologiasUsadas.map((tecnologia) => (
            <span key={tecnologia}>
              {tecnologia}
              <img
                loading="lazy"
                src={imagensTecnologias[tecnologia]}
                alt={`Logo da tecnologia ${tecnologia}`}
              />
            </span>
          ))}
        </div>
      </div>
      <div className="interacoes">
        <button key={props.id} onClick={handleCompartilharClick}>
          <img loading="lazy" src={Share} alt="compartilhar" />
          <span>{props.compartilhamentos}</span>
        </button>
        <button id={props.id} onClick={handleAcessarRepositorioClick}>
          <a href={props.repositorio} target="_blank" rel="external">
            <img loading="lazy" src={Folder} alt="repositórios" />
            <span>{props.acessRepositorio}</span>
          </a>
        </button>
        <button id={props.id} onClick={handleVisualizarClick}>
          <a href={props.deploy} target="_blank" rel="external">
            <img loading="lazy" src={Play} alt="play" />
            <span>{props.visualizacoes}</span>
          </a>
        </button>
      </div>
      {isDialogOpen && <div className="overlay" onClick={fecharDialog}></div>}
      {isDialogOpen && (
        <dialog open className="dialog">
          <button className="popup-close" onClick={fecharDialog}>
            x
          </button>
          <p>{deployText}</p>
          <button onClick={copiarTexto} className="copiarBtn">
            Copiar
          </button>
        </dialog>
      )}
    </div>
  );
}
