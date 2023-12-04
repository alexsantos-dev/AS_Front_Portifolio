import styled from "styled-components";

export const SecoesContainer = styled.div`
  position: relative;
  width: 100%;
  top: 6em;
  padding-bottom: 4em;
  background-color: #fff;

  section {
    min-width: 300px;
    max-width: 900px;
    padding-top: 4em;
    margin: 0 auto 2em auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      color: #000;
    }

    h2,
    p {
      width: 90%;
      max-width: 800px;
      color: #2e2473;
    }

    h2 {
      text-align: left;
    }
  }
  section#bem-vindo {
    width: 100%;
    max-width: 100%;
    height: 14em;
    background-color: #f2f2f2;

    h1 {
      text-shadow: 1px 1px #f22786;
      padding-bottom: 1em;
    }
  }
`;