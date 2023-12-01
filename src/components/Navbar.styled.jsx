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

// export const NavContainer = styled.div`
//   width: 100%;
//   height: 6em;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #fff;
//   border-bottom: inset 4px #000;
//   position: relative;
// `;

export const Nav = styled.nav`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #000;
  padding: 1em;
  height: 6em;
  top: 0;
  left: 0;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  z-index: 10;

  ul {
    display: flex;
    width: 33%;
    align-items: center;
    gap: 1em;

    &.logo {
      justify-content: center;

      .logoIcon {
        width: 5em;
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
      /* gap: 1.6em; */

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
    }
  }
  @media (max-width: 884px) {
    flex-direction: row-reverse;

    ul.logo {
      /* border: solid 1px blue; */
      width: 100%;
      justify-content: flex-start;

      li {
        .logoIcon {
          margin-top: 0.4em;
        }
      }
    }

    ul.contato {
      width: auto;
      height: auto;
      gap: 0.5em;
      position: absolute;
      z-index: 10;
      top: 0.72em;
      right: 1em;
      background: #fff;
      border: solid 2px #000;
      border-radius: 6em;
      flex-direction: row-reverse;
      li {
        border-radius: 3em;
        opacity: 1;

        button {
          height: auto;
          cursor: pointer;
          background: transparent;
          border: none;
          display: flex;
          flex-direction: row-reverse;
          justify-content: center;
          align-items: center;
          border-radius: 6em;
          padding: 1em 0.5em;
          .contato-icon {
            width: 3em;
            z-index: -1;
          }
          .arrow-down {
            transform: rotate(90deg);
            width: 1em;
            z-index: -1;
          }
        }
        a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      li {
        display: none;
      }

      li:not(:first-child) {
        padding: 0;
      }

      li:first-child {
        display: block;
      }
      li:last-child {
        margin-left: 1em;
      }
    }

    ul.item-ativo {
      height: auto;
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

  @media (min-width: 376px) {
  }
`;
