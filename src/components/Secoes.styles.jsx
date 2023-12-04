import styled from "styled-components";

export const SecoesContainer = styled.div`
  position: relative;
  width: 100%;
  top: 6em;
  padding-bottom: 4em;
  background-color: #f2f2f2;

  section {
    background-color: #fff;
    min-width: 300px;
    max-width: 900px;
    border-radius: 1em;
    padding: 5em 0;
    margin: 0 auto 2em auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      color: #2e2473;
      font-weight: bold;
    }

    h1 {
      color: #000;
    }

    h2 {
      color: #2e2473;
    }

    h1,
    h2,
    p {
      width: 90%;
      max-width: 800px;
    }

    p {
      color: #2e2473;
    }

    h2 {
      text-align: left;
    }
  }
  section#bem-vindo {
    border-radius: 2em 2em 0 0;
    width: 100%;
    margin-bottom: 0;
    max-width: 100%;
    height: 14em;
    padding-bottom: 2em;
    background-color: #f2f2f2;
    border-top: solid 2px #2e2473;

    h1 {
      z-index: 1;
      text-shadow: 1px 1px #f22786;
      padding-bottom: 1em;
    }
  }
  section:not(:first-child) {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  div.bg-nav-section {
    background-color: #f22786;
  }
`;
