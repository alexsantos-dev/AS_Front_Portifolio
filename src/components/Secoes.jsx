import { Projetos } from "./Projetos";
import { SecoesContainer } from "./Secoes.styles";
import { Container } from "./Projetos.styles";
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
import { getRecentes, getRelevantes } from "../services/projetos.service";

export function Secoes() {
  const [projetos, setProjetos] = useState([]);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("recentes");

  const handleSelectChange = (event) => {
    setOpcaoSelecionada(event.target.value);
  };

  const fetchData = useCallback(async () => {
    try {
      if (opcaoSelecionada === "recentes") {
        const Response = await getRecentes();
        console.log(Response);
        setProjetos(Response.data);
      } else if (opcaoSelecionada === "relevantes") {
        const Response = await getRelevantes();
        console.log(Response);
        setProjetos(Response.data);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  }, [opcaoSelecionada, setProjetos]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <SecoesContainer>
      <div className="bg-nav-section">
        <section id="bem-vindo">
          <h1>Bem vindo(a) ao meu portifólio!🚀✨</h1>
        </section>
      </div>
      <section id="Sobre">
        <h2>#Sobre</h2>
        <p>
          Olá, me chamo Alex, sou aspirante a{" "}
          <span>desenvolvimento web fullstack</span>, atualmente com 19 anos. Em
          minha jornada, acumulei <span>5 meses de experiência prática</span>,
          destacando-me pela participação ativa em projetos e treinamento em
          versionamento de código com Git em equipe. Minha{" "}
          <span>facilidade de aprendizado</span>,{" "}
          <span>comunicação eficaz</span> e <span>dedicação constante</span> ao
          aprimoramento refletem minha confiança em contribuir para equipes de
          programadores profissionais. Com paixão, determinação e uma
          mentalidade de aprendizado constante, busco{" "}
          <span>entregar soluções de alta qualidade</span>. Estou sempre em
          busca de aprendizado e evolução na área de{" "}
          <span>desenvolvimento web</span>. Fique à vontade para explorar e
          interagir com meus <span>projetos</span>.
        </p>
        <p>
          Na seção de projetos, você pode <span>curtir</span>,{" "}
          <span>compartilhar</span>, acessar <span>repositórios</span> e{" "}
          <span>executar</span> cada projeto. Além disso, você tem a opção de
          escolher entre as ordenações <span>&quot;Mais recentes&quot;</span> e{" "}
          <span>&quot;Mais Relevantes&quot;</span>. Fique à vontade para
          explorar e interagir com meus trabalhos.
        </p>
      </section>
      <section id="Habilidades">
        <h2>#Habilidades</h2>

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
        <div className="opcoes">
          <h2>#Projetos</h2>
          <select value={opcaoSelecionada} onChange={handleSelectChange}>
            <option value="recentes">Mais Recentes</option>
            <option value="relevantes">Mais Relevantes</option>
          </select>
        </div>
        <Container>
          {projetos.map((item) => (
            <Projetos
              key={item._id}
              titulo={item.titulo}
              resumo={item.resumo}
              banner={item.banner}
              tecnologiasUsadas={item.tecnologiasUsadas}
              likes={item.likes}
              compartilhamentos={item.compartilhamentos}
            />
          ))}
        </Container>
      </section>
    </SecoesContainer>
  );
}
