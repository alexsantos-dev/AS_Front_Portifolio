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
  border: solid 1px red;

  .item {
    width: 360px;
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 40%;

      h3,
      h4,
      p {
        text-align: center;
      }
    }
    .interacoes {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 20%;
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
  }
  @media (min-width: 1280px) {
    .item {
      width: 40%;
    }
  }
`;
