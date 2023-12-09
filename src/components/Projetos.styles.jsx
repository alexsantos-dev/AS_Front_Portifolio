import styled, { keyframes } from "styled-components";

const heartbeat = keyframes`
  from {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
    box-shadow: rgba(252, 0, 0, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
  to {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  flex-wrap: wrap;
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2.5em;

  .item {
    width: 360px;
    max-width: 500px;
    height: 500px;
    padding: 0.8em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1em;
    background-color: #faebd7;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;

    .banner {
      border-radius: 1em 1em 0 0;
      display: flex;

      width: 100%;
      height: 40%;

      img {
        border-radius: 0.8em 0.8em 0 0;
        width: 100%;
      }
    }
    .descricao {
      background-color: #fff;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50%;

      h3,
      p {
        width: 95%;
        text-align: center;
      }

      h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 5%;
      }
      p {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40%;
      }

      div.tecnologias {
        height: 55%;
        width: 100%;
        display: flex;
        gap: 0.4em;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: flex-start;
        span {
          width: auto;
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
          justify-content: left;
          font-size: 0.7em;
          img {
            display: flex;
            width: 2em;
          }
        }
      }
    }
    .interacoes {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 10%;
      width: 100%;
      padding: 0 1em;
      border-radius: 0 0 1em 1em;
      background-color: #f9f9f9;

      button {
        border: solid 1px black;

        position: relative;
        border: none;
        background: none;
        cursor: pointer;
        padding: 1em;
        img {
          width: 2em;
        }

        span {
          top: 0.6em;
          right: 0.1em;
          font-style: normal;
          position: absolute;
          z-index: 0;
        }
      }
      .ativo {
        animation: ${heartbeat} 0.4s;
      }
      button:last-child {
        padding: 0.6em;
        img {
          width: 2.8em;
        }
      }
    }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 999;
    }

    dialog {
      display: block;
      position: fixed;
      top: 50%;
      left: 50%;
      border-radius: 1em;
      transform: translate(-50%, -50%);
      padding: 20px;
      background-color: #fff;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      z-index: 1000;
    }

    .dialog p {
      text-align: center;
    }

    button {
      background: none;
      outline: none;
      border: none;
      cursor: pointer;
    }

    button.copiarBtn {
      border-radius: 0.4em;
      padding: 10px;
      margin-top: 10px;
      background-color: #ffd9a8;
      color: #000;
      border: none;
    }

    button.copiarBtn:hover {
      background-color: #e0be91;
    }

    button.dialog-close {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 2em;
      width: 2em;
      height: 2em;
    }
    button.dialog-close:hover {
      opacity: 0.7;
    }
  }

  @media (min-width: 1280px) {
    .item {
      width: 40%;
      height: 480px;
    }
  }
`;
