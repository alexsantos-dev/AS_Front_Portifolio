import styled from "styled-components";

export const SecoesContainer = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 5em;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1em 0;
  section {
    border: solid 1px red;

    width: 80%;
    max-width: 1000px;
    margin-bottom: 5em;
    h1 {
      text-align: center;
    }
    p {
      text-align: left;
    }
  }
`;
