import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const SkeletonContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 360px;
  height: 600px;
  padding: 0.6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5em;
  background-color: #da0251;

  .status {
    z-index: 1;
    top: -6px;
    right: -6px;
    position: absolute;
    width: 48px;
    height: 48px;
    background-color: #424242;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    .skeleton {
      animation: ${pulse} 1.5s infinite;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: linear-gradient(90deg, #424242 25%, #ffffff 50%, #424242 75%);
      background-size: 200% 100%;
    }
  }

  .banner {
    border-radius: 0.5em 0.5em 0 0;
    display: flex;
    width: 100%;
    height: 35%;
    background-color: #ff6ca2;
    .skeleton {
      animation: ${pulse} 1.5s infinite;
      background: linear-gradient(90deg, #da0251 25%, #ffffff 50%, #da0251 75%);
      background-size: 200% 100%;
    }
  }

  .descricao {
    background-color: #590b28;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 55%;

    h3,
    p {
      width: 95%;
      text-align: center;
    }

    h3,
    p,
    .skeleton {
      animation: ${pulse} 1.5s infinite;
      background: linear-gradient(90deg, #da0251 25%, #ffffff 50%, #da0251 75%);
      background-size: 200% 100%;
    }

    h3 {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      height: 30%;
    }
    p {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      height: 30%;
    }

    div.tecnologias {
      margin-bottom: 1em;
      height: 100%;
      width: 100%;
      display: flex;
      gap: 0.4em;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 1em;

      span,
      .skeleton {
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
    justify-content: center;
    align-items: center;
    height: 10%;
    width: 100%;
    padding: 0 1em;
    border-radius: 0 0 0.5em 0.5em;
    background-color: #da0251;

    button,
    .skeleton {
      width: 33%;
      position: relative;
      border: none;
      background: none;
      cursor: pointer;
      padding: 1em;

      img,
      .skeleton {
        width: 2em;
      }

      span,
      .skeleton {
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

      .skeleton {
        animation: ${pulse} 1.5s infinite;
        background: linear-gradient(
          90deg,
          #da0251 25%,
          #ffffff 50%,
          #da0251 75%
        );
        background-size: 200% 100%;
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
  @media (min-width: 1280px) {
    width: 500px;
    height: 560px;

    .banner {
      height: 40%;
    }

    h3 {
      width: 100%;
    }
  }
`;
