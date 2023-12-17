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

const logoAnim = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const LoadingScreen = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 80vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
    animation: ${feixeDeLuz} 7s infinite;
  }
  img {
    color: transparent;
    filter: drop-shadow(3px 3px 3px #0000008b);
    width: 256px;
    height: 256px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    animation: ${logoAnim} 1.5s ease-in-out;
  }
`;
