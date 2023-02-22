import styled from "styled-components";

export const UserStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;

  form > div > span {
    width: 100%;
    color: var(--negative);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px 0;
    gap: 25px;
    width: 100%;
    border-radius: 10px;
  }
  form > h2 {
    width: 100%;
    text-align: center;
    color: var(--grey-1);
  }

  form > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 5px;
  }

  form > div > input {
    width: 100%;
    padding: 16px;
    border-radius: 5px;
    outline: none;
    background-color: var(--grey-2);
    color: var(--grey-1);
    border: solid 2px var(--grey-2);
  }

  form > div > input::placeholder {
    color: var(--grey-1);
  }

  form > div > input:hover {
    border: solid 2px var(--grey-1);
    background-color: var(--grey-2);
  }

  form > div > label {
    color: var(--grey-1);
  }

  form > div > select {
    width: 100%;
    padding: 16px;
    border-radius: 5px;
    outline: none;
    background-color: var(--grey-2);
    color: var(--grey-1);
    border: solid 2px var(--grey-2);
  }

  form > div > select:hover {
    border: solid 2px var(--grey-1);
    background-color: var(--grey-2);
  }

  form > div > div {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    width: 100%;
    gap: 5px;
  }

  form > div > div > button {
    text-decoration: none;
    text-align: center;
    padding: 0 16px;
    border-radius: 5px;
    background-color: var(--grey-1);
    color: white;
  }
  form > div > div > button:hover {
    background-color: var(--grey-2);
  }

  form > div > textarea {
    width: 100%;
    padding: 16px;
    border-radius: 5px;
    outline: none;
    background-color: var(--grey-2);
    color: var(--grey-1);
    border: solid 2px var(--grey-2);
    font-family: "inter", sans-serif;
  }

  form > div > div input {
    width: 100%;
    padding: 16px;
    border-radius: 5px;
    outline: none;
    background-color: var(--grey-2);
    color: var(--grey-1);
    border: solid 2px var(--grey-2);
  }

  form > div > div input::placeholder {
    color: var(--grey-1);
  }

  form > div > div input:hover {
    border: solid 2px var(--grey-1);
    background-color: var(--grey-2);
  }

  form > div > div label {
    color: var(--grey-1);
  }

  form > button {
    padding: 16px 0;
    border-radius: 5px;
    width: 100%;
    color: white;
    background-color: var(--color-primary-negative);
  }

  form > button:hover {
    background-color: var(--color-primary);
  }
`;
