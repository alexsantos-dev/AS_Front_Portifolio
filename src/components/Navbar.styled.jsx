import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  background-color: #000;
  border-bottom: 2px inset #e4e4e4;
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
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  ul {
    display: flex;
    /* width: 33%; */
    align-items: center;
    gap: 1em;

    &.logo {
      width: 69%;
      /* height: 4em; */
      justify-content: center;

      .logoIcon {
        position: absolute;
        top: 0;
        /* background-color: #fff; */
      }
    }

    &.sections {
      justify-content: right;
      width: 19%;

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
          height: 0.3em;
          border-radius: 1em;
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
      width: 12%;
      justify-content: flex-start;
      /* gap: 1.6em; */

      &:hover > :not(:hover) {
        opacity: 0.4;
        transform: scale(0.9);
      }

      li {
        transition: 0.3s ease-in;
        opacity: 0.7;
        display: flex;
        &:hover {
          opacity: 1;
        }
        img {
          width: 2.6em;
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
      top: 10%;
      right: 1em;
      background: #05f2f2;
      border: solid 2px #fff;
      border-radius: 6em;
      flex-direction: row-reverse;

      &:hover > :not(:hover) {
        opacity: 1;
      }

      li {
        border-radius: 3em;
        opacity: 1;

        button {
          z-index: 10;
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
        border-radius: 50%;
      }

      li:not(:first-child) {
        padding: 0;
        position: absolute;
        z-index: -1;
      }

      li:first-child {
        display: block;
      }
      li:nth-child(2) {
        background-color: #0e76a8;
      }
      li:nth-child(3) {
        background-color: #fff;
      }
      li:last-child {
        margin-left: 1em;
        background-color: #25d366;
      }
    }

    ul.item-ativo {
      height: auto;
      li:not(:first-child) {
        display: block;
      }
    }
    ul.sections {
      display: none;
    }
  }

  @media (min-width: 376px) {
  }
`;
