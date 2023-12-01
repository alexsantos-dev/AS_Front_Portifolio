import styled, { keyframes } from "styled-components";

const expandAnimation = keyframes`
  from {
    max-height: 87px;
  }
  to {
    max-height: 386px;
  }
`;

const contatoItem = keyframes`
  0% {
   opacity: 0;
  }
  100% {
    opacity: 1;

  }
`;

export const Nav = styled.nav`
  padding: 2em;
  height: 7em;
  border-bottom: inset 4px #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;

  ul {
    display: flex;
    width: 33%;
    align-items: center;
    gap: 1em;

    &.logo {
      justify-content: center;

      .logoIcon {
        width: 5.4em;
      }
    }

    &.sections {
      justify-content: right;

      a {
        transition: 0.3s ease-in;
        position: relative;
        padding-bottom: 0.6em;
        color: #585858;

        &:hover {
          color: #000;
        }

        &::after {
          content: "";
          width: 0%;
          height: 4px;
          border-radius: 2px;
          background-color: #585858;
          position: absolute;
          bottom: 0;
          left: 0;
          transition: 0.4s ease-in-out;
        }

        &:hover::after {
          background-color: #000;
          width: 100%;
        }
      }
    }

    &.contato {
      justify-content: flex-start;
      gap: 1.6em;

      li {
        transition: 0.3s ease-in;
        opacity: 0.7;
        &:hover {
          opacity: 1;
        }
      }

      li:first-child {
        display: none;
      }

      img {
        width: 2.6em;
      }

      button {
        cursor: pointer;
        background: transparent;
        border: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .contato-icon {
          width: 3.4em;
          z-index: -1;
        }
        .arrow-down {
          margin-top: 0.1em;
          width: 1.2em;
        }
      }
    }
  }
  @media (max-width: 884px) {
    flex-direction: row-reverse;

    ul.logo {
      /* border: solid 1px blue; */
      width: 100%;
      justify-content: left;
    }

    ul.contato {
      width: auto;
      height: auto;
      gap: 0;
      position: absolute;
      z-index: 10;
      top: 0.7em;
      right: 2em;
      background: #fff;
      border: solid 3px #000;
      border-radius: 3em;
      flex-direction: column;

      li {
        border-radius: 3em;
        padding: 0.6em 1em;
        opacity: 1;
      }

      li {
        display: none;
      }

      li:first-child {
        display: block;
      }
    }

    ul.item-ativo {
      animation: ${expandAnimation} 0.5s ease-in-out;
      li:not(:first-child) {
        display: block;
      }
      li:nth-child(2) {
        animation: ${contatoItem} 0.5s ease-in-out;
      }
      li:nth-child(3) {
        animation: ${contatoItem} 0.7s ease-in-out;
      }
      li:nth-child(4) {
        animation: ${contatoItem} 1s ease-in-out;
      }
    }
    ul.sections {
      display: none;
    }
  }
`;
