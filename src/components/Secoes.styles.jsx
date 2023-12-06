import styled from "styled-components";

export const SecoesContainer = styled.div`
  position: relative;
  width: 100%;
  top: 6em;
  padding-bottom: 4em;
  background-color: #faebd7;

  section {
    background-color: #fff;
    min-width: 300px;
    max-width: 1000px;
    border-radius: 1em;
    padding: 5em 0;
    margin: 0 auto 2em auto;

    span {
      font-style: italic;
      color: #434343;
    }

    h1 {
      color: #000;
    }

    h2 {
      color: #2e2473;
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

  #Sobre,
  #Habilidades,
  #Projetos,
  #bem-vindo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #Projetos {
    h2 {
      margin-bottom: 0;
    }
  }
  #Projetos > * {
    box-shadow: none;
  }

  section#bem-vindo {
    border-radius: 0.4em;
    width: 100%;
    margin-bottom: 0;
    max-width: 100%;
    height: 14em;
    padding-bottom: 2em;
    background-color: #fff;
    box-shadow: rgb(0, 0, 0) 10px 8px 20px, rgb(51, 51, 51) 0px 0px 0px 3px;

    h1 {
      z-index: 1;
      text-shadow: 1px 1px #f22786;
      padding-bottom: 1em;
    }
  }
  section:not(:first-child) {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .bg-nav-section {
    padding: 1.5em 1em;
    background-color: #05f2db;
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
        text-align: left;

        a {
          font-style: italic;
          font-weight: 400;
        }

        a:hover {
          color: #5139eb;
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

  @media (max-width: 400px) {
    h1 {
      font-size: 2em;
    }
  }

  @media (max-width: 884px) {
    section#Sobre {
      margin-top: 0.2em;
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
