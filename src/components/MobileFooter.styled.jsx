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
  background-color: #f22e2e;
  border-top: 2px solid #2e2473;

  ul {
    width: 80%;
    max-width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      button {
        position: relative;
        outline: none;
        border: none;
        background: transparent;
        opacity: 0.5;
        padding: 0.8em;
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
          display: flex;
          align-items: center;
          justify-items: center;
          font-weight: 600;
          flex-direction: column;
          gap: 0.3em;
          color: #2e2473;

          img {
            width: 2em;

            &.projectIcon {
              margin-left: 0.46em;
            }
          }
        }
      }
      .sobreBtn {
        padding-top: -1em;
      }
      .habBtn {
        padding: 0.7em;
      }
      .ativo {
        opacity: 1;

        &::after {
          background-color: #2e2473;
          width: 100%;
        }
      }
      .sobreBtn::after {
        top: 0.2em;
      }
    }
  }
  @media (min-width: 884px) {
    display: none;
  }
`;
