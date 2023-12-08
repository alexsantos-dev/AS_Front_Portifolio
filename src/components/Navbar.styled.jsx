import styled, { keyframes } from "styled-components";

// 6cf5f5

const heartbeat = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
    background: #0dff00 ;
    box-shadow: #ff0000 0px 2px 10px;
  }
  100% {
    transform: scale(1);
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
  background-color: #ff3995;
  padding: 1em;
  height: 6em;
  top: 0;
  left: 0;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  div.btn {
    display: none;
  }

  ul {
    display: flex;
    /* width: 33%; */
    height: 100%;
    align-items: center;
    justify-content: space-around;
    gap: 1em;

    &.logo {
      /* width: 26em; */
      align-self: center;
      .logoIcon {
        width: 4.6em;
      }
    }

    &.sections {
      justify-content: space-between;
      align-items: center;
      /* width: 19%; */
      /* height: 100%; */

      a {
        transition: 0.3s ease-in;
        position: relative;
        color: #cbcbcbe8;
        font-weight: 600;
        font-size: 1.1em;
        padding: 0.7em 0.4em;
        &:hover {
          color: #fff;
        }

        &::after {
          content: "";
          width: 0%;
          height: 0.35em;
          border-radius: 1em;
          background-color: transparent;
          position: absolute;
          bottom: 0;
          left: 0;
          transition: 0.4s ease-in-out;
        }

        &:hover::after {
          background-color: #f2f2f2;
          width: 100%;
        }
      }
      .linkAtivo {
        color: #fff;

        &::after {
          background-color: #f2f2f2;
          width: 100%;
        }
      }
    }

    &.contato {
      width: 18em;
      border-radius: 6em;

      &:hover > :not(:hover) {
        opacity: 0.7;
        transform: scale(1);
      }
      &:hover > :hover {
        opacity: 1;
        transform: scale(1.1);
        box-shadow: #05f2db 0px 2px 10px;
      }

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
      }
      li:first-child {
        display: none;
      }
      li:nth-child(3) {
        background: #fff center center;
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
        /* margin-left: 1em; */
        width: 4em;
      }
    }
    ul.contato {
      width: 5em;
      height: 5em;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      border-radius: 6em;
      z-index: 10;
      background: #f1f1f1;
      border: inset 3px #0d0d0d;
      padding: 2em;
      flex-direction: row-reverse;

      &:hover > :not(:hover) {
        opacity: 1;
        transform: scale(1);
      }
      &:hover > :hover {
        opacity: 1;
        transform: scale(1.1);
        box-shadow: #2e2473 0px 2px 10px;
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
          width: 2em;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 50%;
        }
        button.heartBeat {
          animation: ${heartbeat} 2s infinite;
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

  @media (min-width: 1280px) {
    justify-content: space-around;
  }
`;
