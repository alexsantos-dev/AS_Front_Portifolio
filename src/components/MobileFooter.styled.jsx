import styled from "styled-components";

export const MobileFootCont = styled.nav`
  width: 100%;
  height: 5em;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: #fff;
  border-top: inset 3px #e4e4e4;

  ul {
    width: 80%;
    height: 2.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      button {
        border: none;
        background: transparent;
        opacity: 0.7;
        padding: 0.8em;
        a {
          display: flex;
          align-items: center;
          justify-items: center;
          flex-direction: column;

          img {
            width: 3em;

            &.projectIcon {
              margin-left: 0.46em;
            }
          }
        }
      }
      button:active {
        opacity: 1;
      }
    }
  }
  @media (min-width: 884px) {
    display: none;
  }
`;
