import styled from "styled-components";

export const MobileFootCont = styled.nav`
  width: 100%;
  height: 4em;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: #8cdede;
  border-top: 2px solid #609999;

  ul {
    width: 80%;
    max-width: 400px;
    height: 2.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      button {
        outline: none;
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
            width: 2em;

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
