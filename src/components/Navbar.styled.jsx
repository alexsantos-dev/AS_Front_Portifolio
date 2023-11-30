import styled from "styled-components";

export const Nav = styled.nav`
  position: relative;
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
        width: 4.5em;
      }
    }

    &.sections {
      justify-content: flex-end;

      a {
        transition: 0.3s ease-in;
        position: relative;
        padding-bottom: 0.6em;
        color: #585858;

        &:hover {
          color: #09182a;
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
          background-color: #09182a;
          width: 100%;
        }
      }
    }

    &.contato {
      justify-content: flex-start;
      gap: 1.6em;

      li:not(:first-child, :nth-child(2)) {
        opacity: 70%;
        transition: 0.3s ease-in;

        &:hover {
          opacity: 100%;
        }
      }

      li:nth-child(2) {
        img {
          width: 1em;
        }
      }

      li:first-child,
      li:nth-child(2) {
        display: none;
      }

      img {
        width: 2.6em;
      }

      button {
        cursor: pointer;
        background: transparent;
        border: none;

        img {
          width: 3.8em;
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
      gap: 0;
      padding: 0.6em 0.4em;
      position: absolute;
      z-index: 10;
      top: 1em;
      right: 2em;
      background: #fff;
      border: solid 4px #09182a;
      border-radius: 36px;
      flex-direction: column;

      /* li {
        display: none;
        margin-bottom: 1em;
      } */

      li:first-child {
        margin-bottom: 0.5em;
      }

      li:nth-child(3),
      li:nth-child(4) {
        margin-bottom: 1em;
      }

      li:first-child,
      li:nth-child(2) {
        display: block;
      }
      li:nth-child(2) {
        margin-bottom: 0.5em;
      }
    }
  }

  ul.sections {
    display: none;
  }
`;
