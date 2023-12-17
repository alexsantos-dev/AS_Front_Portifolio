import styled, { keyframes } from "styled-components";

const Reveal = keyframes`
  0%{
    transform: translateY(100%);
  }
  100%{
    transform: translateY(0);
  }
`;

export const MobileFootCont = styled.nav`
  width: 100%;
  height: 3.5em;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  background-color: #ffffff;
  border-top: 2px solid #0d0d0d;
  animation: ${Reveal} 1.5s forwards;

  div {
    width: 80%;
    height: 3em;
    max-width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      position: relative;
      outline: none;
      border: none;
      background: transparent;
      opacity: 0.5;
      &::after {
        content: "";
        width: 0%;
        height: 0.3em;
        border-radius: 1em;
        background-color: transparent;
        position: absolute;
        top: 0;
        left: 0;
        transition: 0.4s ease-in-out;
      }

      a {
        padding: 0.7em 1em;
        display: flex;
        align-items: center;
        justify-items: center;
        font-weight: 600;
        flex-direction: column;
        gap: 0.3em;
        color: #0d0d0d;

        img {
          width: 1.5em;
        }
      }
    }
    .ativo {
      opacity: 1;

      &::after {
        background-color: #0d0d0d;
        width: 100%;
      }
    }
    .sobreBtn::after {
      top: 0.25em;
    }

    .projectBtn {
      img {
        margin-left: 0.46em;
      }
      &::after {
        top: 0.01em;
      }
    }
    .habBtn::after {
      top: 0.1em;
    }
  }
  /* @media (dpi: 360px) {
    height: 1em;

    div {
      height: 2.5em;

      button {
        a {
          padding: 0.6em;
          img {
            width: 0.5em;
          }
        }
      }
    }
  } */

  @media (min-width: 884px) {
    display: none;
  }
`;
