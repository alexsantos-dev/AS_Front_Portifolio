import styled from "styled-components";

export const SecoesContainer = styled.div`
  position: relative;
  width: 100vw;
  top: 4.5em;
  left: 0;
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
      gap: 4em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      margin-bottom: 3em;

      h2 {
        width: 20%;
        padding: 0;
        display: flex;
        align-items: center;
        margin: 0;

        span {
          margin: 0;
        }
      }

      .status {
        width: 45%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          position: relative;

          &::before {
            content: "";
            width: 12px;
            height: 12px;
            border-radius: 50%;
            position: absolute;
            left: -24px;
            top: 25.5%;
          }

          &.conceito::before {
            filter: drop-shadow(1px 1px 0 #000);
            background: radial-gradient(circle at 50% 50%, #fff, #d8d8d8);
          }
          &.desenvolvimento::before {
            background: radial-gradient(circle at 50% 50%, #9effa3, #4fff57);
            filter: drop-shadow(1px 1px 0 #1c521f);
          }
          &.concluido::before {
            background: radial-gradient(circle at 50% 50%, #48a7ff, #004b92);
            filter: drop-shadow(1px 1px 0 #001427);
          }
        }
      }

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
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    height: 12em;
    margin-top: 1.4em;
    background-color: #fff;

    h1 {
      z-index: 1;
      text-shadow: 1px 1px #bf0404;
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

  @media (max-width: 884px) {
    top: 3.5em;
    section#bem-vindo {
      h1 {
        font-size: 2em;
        width: 80%;
        padding-bottom: 0.3em;
      }
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

        .status {
          width: 60%;
          font-size: 0.8em;
          flex-direction: column;
          align-items: flex-start;

          & > * {
            margin-left: 2em;
          }
        }

        select {
          width: 10em;
          margin-right: 0.7em;
          position: absolute;
          bottom: -2em;
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
  @media (min-width: 885px) {
    section#Sobre {
      margin-top: 2em;
    }
    section#Projetos {
      .opcoes {
        height: 8em;
        position: relative;
        select {
          margin-right: 2.5%;

          position: absolute;
          bottom: 0;
          right: 0;
          width: 10em;
        }
        .status {
          margin-left: 2.5%;
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
    }
  }
`;
