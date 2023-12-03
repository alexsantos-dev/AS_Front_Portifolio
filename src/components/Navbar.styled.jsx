import styled, { keyframes } from "styled-components";

// 6cf5f5

const container = keyframes`
    0%{
      transform: translateX(4em);
      opacity: 0;
    }
    50%{
      transform: translateX(2em);
      opacity: 0;
    }
    100% {
      opacity: 1;
     transform: translateX(0);
    }
  `;

export const Nav = styled.nav`
  width: 100%;
  background-color: #fafafa;
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
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

  div.btn {
    display: none;
  }

  ul {
    display: flex;
    /* width: 33%; */
    align-items: center;
    gap: 1em;

    &.logo {
      width: 10.5%;
      /* height: 4em; */
      justify-content: right;
      align-items: center;
      .logoIcon {
        width: 3em;
        /* background-color: #fff; */
      }
    }

    &.sections {
      justify-content: space-between;
      align-items: center;
      width: 19%;
      height: 100%;
      a {
        transition: 0.3s ease-in;
        position: relative;
        padding-bottom: 0.6em;
        color: #bbbbbb;
        height: 100%;
        padding: 1em 0;
        &:hover {
          color: #ffffff;
        }

        &::after {
          content: "";
          width: 0%;
          height: 0.3em;
          border-radius: 1em;
          background-color: #000;
          position: absolute;
          bottom: 0;
          left: 0;
          transition: 0.4s ease-in-out;
        }

        &:hover::after {
          background-color: #ffffff;
          width: 100%;
        }
      }
    }

    &.contato {
      width: 10em;
      height: 3em;

      border-radius: 6em;
      justify-content: center;
      /* gap: 1.6em; */

      &:hover > :not(:hover) {
        transform: scale(1);
      }
      &:hover > :hover {
        opacity: 1;
        transform: scale(1.1);
      }

      li {
        transition: all 0.3s ease-in;
        width: 100%;
        display: flex;
        align-items: center;
        opacity: 0.7;
        justify-content: center;

        img {
          width: 2.6em;
        }
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 2.6em;
        }
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

    div.btn {
      transition: all 0.3s ease-in-out;
      position: absolute;
      z-index: 100;
      /* height: 8em; */
      padding: 0.56em;
      display: block;
      background: #00ffff;
      border-radius: 6em;
      margin-right: 1em;
      border: solid 2px #000;

      button {
        z-index: 10;
        cursor: pointer;
        background: transparent;
        border: none;
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        img {
          width: 3em;
        }
      }
    }

    div.btnOn {
      padding: 0.56em;
      border-radius: 0 6rem 6rem 0;
      border-top: solid 2px #000;
      border-right: solid 2px#000;
      border-bottom: solid 2px #000;
      border-left: solid 0 #000;
    }
    ul.contato {
      transition: all 0.2s ease-in;

      display: none;
      width: 4em;
      justify-content: left;
      height: 3em;
      border-radius: 6em 0 0 6rem;
      gap: 0.5em;
      position: absolute;
      z-index: 10;
      right: 4.17em;
      background: #00ffff;
      border: solid 2px #000;
      flex-direction: row-reverse;
      padding: 1.8em 0.5em;

      &:hover > :not(:hover) {
        opacity: 1;
      }

      li {
        opacity: 1;
      }

      li {
        display: none;
      }

      li {
        padding: 0;
        position: absolute;
        z-index: -1;
      }

      li:last-child {
        margin-left: 0.2em;
      }
    }

    ul.item-ativo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: auto;
      right: 5.2em;
      height: 3.6em;
      animation: ${container} 0.4s ease-in-out;
      li {
        position: static;
        display: block;
        transition: 1s ease-in-out;
      }
    }
    ul.sections {
      display: none;
    }
  }
`;
