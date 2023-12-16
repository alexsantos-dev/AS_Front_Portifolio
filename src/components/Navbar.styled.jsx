import styled, { keyframes } from "styled-components";

// 6cf5f5

const heartbeat = keyframes`
  37% {
    transform: scale(1);
  }
  40%{
    transform: scale(1.1) rotate(2deg);
  }
  43%{
    transform: scale(1.1) rotate(-2deg);
  }
  46%{
    transform: scale(1.15) rotate(4deg);
  }
  49%{
    transform: scale(1.15) rotate(-4deg);
  }
  52%{
    transform: scale(1.2)  rotate(6deg);
  }
  55%{
    transform: scale(1.15) rotate(-6deg);
  }
  58%{
    transform: scale(1.15) rotate(4deg);
  }
  61%{
    transform: scale(1.1) rotate(-4deg);
  }
  64%{
    transform: scale(1.1) rotate(2deg);
  }
  67%{
    transform: scale(1) rotate(-2deg);
  }
`;

const itemFade = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  background-color: #ffffff;
  padding: 1em;
  height: 4.5em;
  top: 0;
  left: 0;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-bottom: 2px solid #0d0d0d;

  div.btn {
    display: none;
  }

  ul {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    gap: 1em;

    &.logo {
      align-self: center;
      .logoIcon {
        margin-top: 0.4em;
        width: 5em;
        filter: drop-shadow(3px 3px 3px #0000008b);
      }
    }

    &.sections {
      justify-content: space-between;
      align-items: center;

      a {
        transition: 0.3s ease-in;
        position: relative;
        color: #0d0d0d7a;
        font-weight: 300;
        font-size: 1.1em;
        padding: 0.6em 0.4em;
        &:hover {
          color: #0d0d0d;
        }

        &::after {
          content: "";
          width: 0%;
          height: 0.2em;
          border-radius: 1em;
          background-color: transparent;
          position: absolute;
          bottom: 0;
          left: 5%;
          transition: 0.4s ease-in-out;
        }

        &:hover::after {
          background-color: #bf0404;
          width: 90%;
        }
      }
      .linkAtivo {
        color: #0d0d0ddd;

        &::after {
          background-color: #bf0404;
          width: 90%;
        }
      }
    }

    &.contato {
      width: 18em;
      border-radius: 6em;

      li {
        transition: 0.2s ease-in;
        border-radius: 6em;
        width: 2.1em;

        img {
          width: 3em;
        }
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 3em;
        }
        &:first-child {
          display: none;
        }
      }
    }
  }
  @media (max-width: 884px) {
    flex-direction: row-reverse;

    ul.logo {
      width: 90%;
      justify-content: left;

      .logoIcon {
        margin-top: 0.4em;
        width: 4.8em;
      }
    }
    ul.contato {
      width: 1em;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      border-radius: 6em;
      z-index: 10;
      padding: 1.7em;
      flex-direction: row-reverse;

      &:hover > :not(:hover) {
        opacity: 1;
        transform: scale(1);
      }
      &:hover > :hover {
        opacity: 1;
        transform: scale(1.1);
      }

      li {
        border-radius: 6em;
        width: 2em;
      }
      li:not(:first-child) {
        margin-right: 0.6em;
      }

      li:first-child {
        display: flex;
      }
      li {
        button {
          background: none;
          width: 2em;
          height: 2em;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 50%;

          img {
            filter: drop-shadow(#000 1px 1px 0);
          }
        }
        button.heartBeat {
          img {
            animation: ${heartbeat} 2s infinite;
          }
        }
      }
      li:not(:first-child) {
        display: none;
      }

      li:nth-child(2) {
        animation: ${itemFade} 0.8s ease-in;
      }
      li:nth-child(3) {
        animation: ${itemFade} 0.7s ease-in;
      }
      li:nth-child(4) {
        animation: ${itemFade} 0.6s ease-in;
        margin-left: 1.5em;
      }
    }

    ul.item-ativo {
      width: 16em;
      li:not(:first-child) {
        display: block;
      }
      li:first-child {
        button {
          img {
            width: 3em;
          }
        }
        &:hover {
          transform: scale(1);
        }
      }
    }
    ul.sections {
      display: none;
    }
  }

  @media (max-width: 360px) {
    height: 4em;

    ul.logo {
      .logoIcon {
        width: 3.5em;
      }
    }
    ul.contato {
      padding: 1em;
      li {
        button,
        a {
          height: 2.5em;
          img {
            width: 2.5em;
          }
        }
        button {
          img {
            transform: scale(0.85);
          }
        }
      }
    }
  }

  @media (min-width: 1280px) {
    justify-content: space-around;

    .contato {
      &:hover > :not(:hover) {
        opacity: 0.7;
        transform: scale(1);
      }
      &:hover > :hover {
        opacity: 1;
        transform: scale(1.1);
        filter: drop-shadow(#590b28 0 0 4px);
      }
    }
  }
`;
