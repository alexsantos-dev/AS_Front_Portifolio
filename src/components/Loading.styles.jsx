import styled, { keyframes } from "styled-components";

const feixeDeLuz = keyframes`
   0% {
    background-position: 100% 0;
    transform: translate(-50%, -50%), rotate(45deg);


  }
  100% {
    background-position: -100% 0;
    transform: translate(-50%, -50%), rotate(45deg);

  }
`;

export const LoadingScreen = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  & div {
    text-align: center;
  }
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    z-index: 2;
    width: 256px;
    height: 256px;
    background: linear-gradient(
      to right,
      transparent 50%,
      rgb(255, 255, 255) 55%,
      transparent 51%
    );
    background-size: 300% 100%;
    animation: ${feixeDeLuz} 5s forwards infinite;
  }
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;
