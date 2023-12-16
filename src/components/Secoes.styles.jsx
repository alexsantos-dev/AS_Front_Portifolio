import styled from "styled-components";

export const SecoesContainer = styled.div`
  position: relative;
  width: 100%;
  top: 4.5em;
  padding-bottom: 4em;
  background-color: #590b28;

  section {
    background-color: #fff;
    min-width: 300px;
    max-width: 1280px;
    border-radius: 1em;
    padding: 5em 0;
    margin: 0 auto 2em auto;

    h1 {
      color: #000;
    }

    h2 {
      color: #0d0d0d;
      span {
        margin-right: 0.15em;
        text-shadow: 2px 2px #49f2e1;
      }
    }

    h1,
    h2,
    p {
      width: 90%;
      max-width: 800px;
    }

    p {
      font-size: 1em;
      color: #434343;
    }

    h2 {
      margin-bottom: 1.5em;
      text-align: left;
    }
  }

  #Sobre {
    span {
      font-family: Poppins-semiBold, sans-serif;
      color: #000000;
    }
  }

  #Sobre,
  #Habilidades,
  #Projetos,
  #bem-vindo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: rgb(0, 0, 0) 10px 8px 20px;
    border: none;
  }

  #Projetos {
    .opcoes {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 82%;
      margin-bottom: 1em;

      select {
        transition: all 0.4s ease-in-out;
        border-radius: 0.4em;
        background-color: #fff;
        border: solid 3px #49f2e1;
        font-size: 1em;
        font-weight: 500;
        padding: 0.2em 0.4em;
        height: 2em;
        outline: none;
      }
    }
  }

  #Projetos {
    h2 {
      margin-bottom: 1em;
    }
  }
  #Projetos > * {
    box-shadow: none;
  }

  section#bem-vindo {
    border-radius: 0.4em;
    width: 100%;
    max-width: 100%;
    height: 12em;
    margin-top: 1.4em;
    background-color: #fff;

    h1 {
      z-index: 1;
      text-shadow: 1px 1px #bf0404;
      padding-bottom: 1em;
    }
  }
  section:not(:first-child) {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .bg-nav-section {
    padding: 1em;
    background-color: #49f2e1;
  }

  div.container {
    flex-wrap: wrap;
    gap: 2em;
    padding: 1em;
    max-width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    hr {
      width: 95%;
      background-color: #2e2473;
    }

    div.item {
      width: 100%;
      padding: 1em;
      gap: 0.5em;
      display: flex;
      justify-content: center;
      align-items: center;

      figure {
        gap: 0.3em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 6em;

        figcaption {
          text-align: center;
          font-size: 0.8em;
        }

        img {
          width: 4em;
        }
      }

      p {
        text-align: justify;

        a {
          color: #0000ff;
        }

        a:hover {
          text-decoration: underline;
        }

        span {
          font-weight: bold;
          color: #000;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 360px) {
    top: 3em;
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 2em;
    }
  }

  @media (max-width: 884px) {
    h1 {
      font-size: 2em;
    }
    section#Projetos {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .opcoes {
        width: 95%;
        position: relative;
        padding: 1em;
        align-items: flex-start;
        flex-direction: column;

        select {
          margin-right: 0.7em;
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
    }

    section#Sobre {
      border-radius: 0 0 1em 1em;
    }

    div.container {
      padding: 0;
    }

    div.item {
      flex-direction: column;
      p {
        width: 100%;
      }
    }
  }
  @media (min-width: 1280px) {
    section#Sobre {
      margin-top: 2em;
    }
  }
`;
