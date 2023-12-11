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
  width: 360px;
  height: 520px;
  padding: 0 0.6em 0.6em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1em;
  background-color: #d4d4d4;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;

  .banner {
    border-radius: 1em 1em 0 0;
    display: flex;
    width: 100%;
    height: 40%;
    background-color: #ffffff;
    .skeleton {
      animation: ${pulse} 1.5s infinite;
      background: linear-gradient(90deg, #d4d4d4 25%, #ffffff 50%, #d4d4d4 75%);
      background-size: 200% 100%;
    }
  }

  .descricao {
    background-color: #d4d4d4;
    border: 1px solid #ffffff;

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

    h3,
    p,
    .skeleton {
      animation: ${pulse} 1.5s infinite;
      background: linear-gradient(90deg, #d4d4d4 25%, #ffffff 50%, #d4d4d4 75%);
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
    border: 1px solid #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15%;
    width: 100%;
    padding: 0 1em;
    border-radius: 0 0 1em 1em;
    background-color: #d4d4d4;

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
          #d4d4d4 25%,
          #ffffff 50%,
          #d4d4d4 75%
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
`;
