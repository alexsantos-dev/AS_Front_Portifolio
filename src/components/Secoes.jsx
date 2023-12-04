import { SecoesContainer } from "./Secoes.styles";
export function Secoes() {
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
          <span>compartilhar</span>, acessar <span>repositórios</span> e ver a
          <span>executar</span> cada projeto. Além disso, tem a opção de
          escolher entre as ordenações <span>&quot;Mais recentes&quot;</span> e{" "}
          <span>&quot;Mais Relevantes&quot;</span>. Fique à vontade para
          explorar e interagir com meus trabalhos.
        </p>
      </section>
      <section id="Habilidades">
        <h2>#Habilidades</h2>
        <div className="Container">
          <div>
            <figure>
              <img src="" alt="" />
              <figcaption></figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section id="Projetos">
        <h2>#Projetos</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus
          quo quas ipsam tempore modi impedit, tenetur at. Numquam tempore neque
          et aliquid voluptatibus perferendis at alias voluptate doloribus
          magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          delectus quo quas ipsam tempore modi impedit, tenetur at. Numquam
          tempore neque et aliquid voluptatibus perferendis at alias voluptate
          doloribus magnam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nemo delectus quo quas ipsam tempore modi impedit, tenetur at.
          Numquam tempore neque et aliquid voluptatibus perferendis at alias
          voluptate doloribus magnam.
        </p>
      </section>
    </SecoesContainer>
  );
}
