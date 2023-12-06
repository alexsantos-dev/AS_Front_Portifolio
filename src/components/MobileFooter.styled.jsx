import styled from "styled-components";

export const MobileFootCont = styled.nav`
  width: 100%;
  height: 5.4em;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: #ededed;
  border-top: 2px solid #2e2473;

  div {
    width: 80%;
    height: 5.6em;
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
        top: -0.2em;
        left: 0;
        transition: 0.4s ease-in-out;
      }

      a {
        padding: 1.2em;
        display: flex;
        align-items: center;
        justify-items: center;
        font-weight: 600;
        flex-direction: column;
        gap: 0.3em;
        color: #2e2473;

        img {
          width: 2em;
        }
      }
    }
    .ativo {
      opacity: 1;

      &::after {
        background-color: #2e2473;
        width: 100%;
      }
    }
    .sobreBtn::after {
      top: -0.1em;
    }

    .projectBtn {
      img {
        margin-left: 0.46em;
      }
      &::after {
        top: -0.4em;
      }
    }
    .habBtn::after {
      top: -0.3em;
    }
  }
  @media (min-width: 884px) {
    display: none;
  }
`;
