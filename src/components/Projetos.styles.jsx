import styled from "styled-components";

export const Container = styled.div`
  flex-wrap: wrap;
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2.5em;

  .item {
    width: 360px;
    height: 520px;
    padding: 0 0.6em 0.6em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1em;
    background: linear-gradient(-50deg, #d4d4d4 30%, #ffffff 70%);
    border-right: solid 3px #000;
    border-bottom: solid 3px #000;
    box-shadow: rgb(0, 0, 0) 3px 1px 8px;

    .banner {
      border-radius: 1em 1em 0 0;
      display: flex;
      position: relative;
      width: 100%;
      height: 40%;

      img {
        border-top: solid 1px #000;
        border-left: solid 1px #000;
        border-bottom: solid 1px #000;

        border-radius: 0.8em 0.8em 0 0;
        width: 100%;
      }
      h3 {
        font-size: 2.8em;
        font-variant: small-caps;
        font-family: Poppins-extraBold;
        color: #000;
        text-shadow: 3px 3px #fff;
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .descricao {
      border-left: solid 1px #000;
      background-color: #fff;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50%;

      p {
        width: 95%;
        text-align: center;
      }
      p {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60%;
      }

      div.tecnologias {
        margin-bottom: 1em;
        height: 40%;
        width: 100%;
        display: flex;
        gap: 0.4em;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 1em;
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
      border-top: solid 1px #000;
      border-left: solid 1px #000;
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 15%;
      width: 100%;
      padding: 0 1em;
      border-radius: 0 0 1em 1em;
      background-color: #f9f9f9;

      button {
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
          left: 3em;
          width: 3em;
          padding-left: 0.2em;
          font-style: normal;
          display: flex;
          justify-content: left;
          position: absolute;
          z-index: 0;
        }
      }
      button:nth-child(1) {
        span {
          left: 3.1em;
        }
      }
      button:nth-child(2) {
        span {
          left: 3.3em;
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
      width: 360px;
      height: 480px;
    }
  }
`;
