import styled, { keyframes } from "styled-components";

// 6cf5f5

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
  background-color: #fff;
  padding: 1em;
  height: 5.5em;
  top: 0;
  left: 0;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  z-index: 10;
  border-bottom: solid 1px #909090;
  box-shadow: #909090 0px 2px 10px;

  div.btn {
    display: none;
  }

  ul {
    display: flex;
    /* width: 33%; */
    align-items: center;
    gap: 1em;

    &.logo {
      display: flex;
      width: 13%;
      justify-content: right;
      align-items: center;
      .logoIcon {
        width: 4.6em;
      }
    }

    &.sections {
      justify-content: space-between;
      align-items: center;
      width: 19%;
      height: 100%;

      a:first-child {
        .linkAtivo {
          color: #000;

          &::after {
            background-color: #000000;
            width: 100%;
          }
        }
      }

      a {
        transition: 0.3s ease-in;
        position: relative;
        color: #717171;
        height: 100%;
        padding: 0.7em 0;
        &:hover {
          color: #000000;
        }

        &::after {
          content: "";
          width: 0%;
          height: 0.3em;
          border-radius: 1em;
          background-color: #ffffff;
          position: absolute;
          bottom: 0;
          left: 0;
          transition: 0.4s ease-in-out;
        }

        &:hover::after {
          background-color: #000000;
          width: 100%;
        }
      }
      .linkAtivo {
        color: #000;

        &::after {
          background-color: #000000;
          width: 100%;
        }
      }
    }

    &.contato {
      width: 10em;
      height: 3em;
      border-radius: 6em;
      justify-content: center;

      &:hover > :not(:hover) {
        opacity: 0.7;
        transform: scale(1);
      }
      &:hover > :hover {
        opacity: 1;
        transform: scale(1.1);
        box-shadow: #909090 0px 2px 10px;
      }

      li {
        transition: 0.2s ease-in;
        border-radius: 6em;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 3em;
        }
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 3em;
        }
      }
      li:first-child {
        display: none;
      }
    }
  }
  @media (max-width: 884px) {
    flex-direction: row-reverse;

    ul.logo {
      width: 100%;
      justify-content: left;

      .logoIcon {
        margin-top: 0.4em;
        margin-left: 1em;
      }
    }
    ul.contato {
      width: 4.3em;
      height: 4.3em;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      border-radius: 6em;
      z-index: 10;
      background: #00ffffd1;
      border: inset 1px #000;
      padding: 2em;
      flex-direction: row-reverse;
      &:hover > :not(:hover) {
        opacity: 1;
      }
      &:hover > :hover {
        opacity: 1;
      }

      li {
        border-radius: 6em;
        width: 3em;
      }

      li:first-child {
        display: flex;
      }
      li {
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: none;
          border-radius: 50%;

          img {
            width: 3.7em;
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
      width: 17em;
      li:not(:first-child) {
        display: block;
      }
      li:first-child {
        margin-right: 1.5em;
      }
    }
    ul.sections {
      display: none;
    }
  }
`;
