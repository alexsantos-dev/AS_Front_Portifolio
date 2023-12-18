import { Projetos } from "./Projetos";
import { SecoesContainer } from "./Secoes.styles";
import { Container } from "./Projetos.styles";
import { ProjetoSkeleton } from "./ProjetoSkeleton";
import JsIcon from "../assets/javascript.webp";
import ReactIcon from "../assets/react.webp";
import NodeIcon from "../assets/node.webp";
import ExpressIcon from "../assets/express.webp";
import RestApiIcon from "../assets/rest-api.webp";
import MongodbIcon from "../assets/mongodb.webp";
import GitIcon from "../assets/git.webp";
import StyledComponentsIcon from "../assets/styled-components.webp";
import CssIcon from "../assets/css.webp";
import HtmlIcon from "../assets/html.webp";

import { useState, useEffect, useCallback } from "react";
import {
  getRecentes,
  getRelevantes,
  compartilhar,
  visualizar,
  acessarRep,
} from "../services/projetos.service";

export function Secoes() {
  const [projetos, setProjetos] = useState([]);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("recentes");
  const [exibirSkeleton, setExibirSkeleton] = useState(true);
  const [carregando, setCarregando] = useState(false);

  const handleSelectChange = (event) => {
    setOpcaoSelecionada(event.target.value);
    setExibirSkeleton(true);
  };

  const fetchData = useCallback(async () => {
    try {
      setCarregando(true);
      const inicioChamada = new Date().getTime();
      let response;

      if (opcaoSelecionada === "recentes") {
        response = await getRecentes();
      } else if (opcaoSelecionada === "relevantes") {
        response = await getRelevantes();
      }

      const fimChamada = new Date().getTime();
      const tempoResposta = fimChamada - inicioChamada;

      setTimeout(() => {
        setCarregando(false);
        setExibirSkeleton(false);
        setProjetos(response.data);
      }, tempoResposta);
    } catch (error) {
      console.error("Erro na requisição:", error);
      setCarregando(false);
    }
  }, [opcaoSelecionada, setProjetos]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <SecoesContainer>
      <div className="bg-nav-section">
        <section id="bem-vindo">
          <h1>Bem vindo(a) ao meu portifólio!</h1>
        </section>
      </div>
      <section id="Sobre">
        <h2>
          <span>#</span>Sobre
        </h2>
        <p>
          Olá, sou <span>Alex Santos</span>, desenvolvedor web fullstack de 19
          anos com 5 meses de experiência prática. Destaco-me por participação
          ativa em projetos e treinamento de versionamento de código com Git em
          equipe. Minha facilidade de aprendizado e dedicação refletem confiança
          em contribuir para equipes profissionais. Com determinação e
          mentalidade de aprendizado constante, busco oferecer soluções de alta
          qualidade.
        </p>
        <p>
          Explore a seção de <span>Projetos</span> para executar, compartilhar e
          acessar os repositórios de cada um dos meus trabalhos. Além disso,
          você pode escolher entre as ordenações &quot;Mais recentes&quot; e
          &quot;Mais Relevantes&quot;.
        </p>
      </section>
      <section id="Habilidades">
        <h2>
          <span>#</span>Habilidades
        </h2>

        <div className="container">
          <div className="item">
            <figure>
              <img src={JsIcon} alt="javascript logo" />
              <figcaption>Javascript</figcaption>
            </figure>
            <p>
              Linguagem de programação de alto nível, amplamente utilizada para
              desenvolvimento web.
            </p>
          </div>
          <hr />
          <div className="item">
            <figure>
              <img src={ReactIcon} alt="react logo" />
              <figcaption>React</figcaption>
            </figure>
            <p>
              Biblioteca JavaScript para construir interfaces de usuário
              reativas e eficientes.
            </p>
          </div>
          <hr />
          <div className="item">
            <figure>
              <img src={NodeIcon} alt="node logo" />
              <figcaption>Node</figcaption>
            </figure>
            <p>
              Ambiente de execução JavaScript do lado do servidor, permitindo o
              desenvolvimento de aplicações web escaláveis.
            </p>
          </div>
          <hr />
          <div className="item">
            <figure>
              <img src={ExpressIcon} alt="express logo" />
              <figcaption>Express</figcaption>
            </figure>
            <p>
              Framework para Node.js que simplifica o desenvolvimento de
              aplicações web, fornecendo recursos adicionais.
            </p>
          </div>
          <hr />
          <div className="item">
            <figure>
              <img src={RestApiIcon} alt="rest api logo" />
              <figcaption>REST API</figcaption>
            </figure>
            <p>
              Arquitetura de comunicação entre sistemas, baseada em princípios
              como{" "}
              <a href="https://restfulapi.net/statelessness/" target="_blanck">
                statelessness
              </a>{" "}
              e recursos representacionais.
            </p>
          </div>
          <hr />
          <div className="item">
            <figure>
              <img src={MongodbIcon} alt="mongodb  logo" />
              <figcaption>MongoDB</figcaption>
            </figure>
            <p>
              Banco de dados{" "}
              <span title="Banco de dados não relacional">NoSQL</span> orientado
              a documentos, adequado para armazenar grandes volumes de dados sem
              esquema fixo.
            </p>
          </div>
          <hr />
          <div className="item">
            <figure>
              <img src={GitIcon} alt="git logo" />
              <figcaption>Git</figcaption>
            </figure>
            <p>
              Sistema de controle de versão distribuído para rastrear alterações
              no código-fonte durante o desenvolvimento de software.
            </p>
          </div>
          <hr />
          <div className="item">
            <figure>
              <img src={StyledComponentsIcon} alt="styled components logo" />
              <figcaption>Styled Components</figcaption>
            </figure>
            <p>
              Biblioteca para React que permite escrever estilos CSS diretamente
              em arquivos JavaScript, facilitando a estilização de componentes.
            </p>
          </div>
          <hr />
          <div className="item">
            <figure>
              <img src={CssIcon} alt="css3 logo" />
              <figcaption>CSS3</figcaption>
            </figure>
            <p>
              Última versão do Cascading Style Sheets, linguagem usada para
              estilizar elementos HTML em páginas web.
            </p>
          </div>
          <hr />
          <div className="item">
            <figure>
              <img src={HtmlIcon} alt="html5 logo" />
              <figcaption>HTML5</figcaption>
            </figure>
            <p>
              Quinta versão da linguagem de marcação utilizada para estruturar e
              apresentar conteúdo na web.
            </p>
          </div>
        </div>
      </section>
      <section id="Projetos">
        <h2>
          <span>#</span>Projetos
        </h2>
        <div className="opcoes">
          <div className="ContainerStatus">
            Status:<span className="conceito">conceito</span>
            <span className="desenvolvimento">em desenvolvimento</span>
            <span className="concluido">concluído</span>
          </div>
          <select value={opcaoSelecionada} onChange={handleSelectChange}>
            <option value="recentes">Mais Recentes</option>
            <option value="relevantes">Mais Relevantes</option>
          </select>
        </div>
        <Container>
          {exibirSkeleton &&
            Array.from({ length: 4 }).map((_, index) => (
              <ProjetoSkeleton key={index} />
            ))}
          {!carregando &&
            !exibirSkeleton &&
            projetos.map((item) => (
              <Projetos
                key={item.id}
                id={item._id}
                titulo={item.titulo}
                resumo={item.resumo}
                banner={item.banner}
                status={item.status}
                tecnologiasUsadas={item.tecnologiasUsadas}
                compartilhamentos={item.compartilhamentos}
                acessRepositorio={item.acessRepositorio}
                visualizacoes={item.visualizacoes}
                repositorio={item.repositorio}
                deploy={item.deploy}
                onCompartilhar={(projetoId) => compartilhar(projetoId)}
                onAcessarRepositorio={(projetoId) => acessarRep(projetoId)}
                onVisualizar={(projetoId) => visualizar(projetoId)}
              />
            ))}
        </Container>
      </section>
      <footer>Alex Santos&copy; All Rights Reserved</footer>
    </SecoesContainer>
  );
}
