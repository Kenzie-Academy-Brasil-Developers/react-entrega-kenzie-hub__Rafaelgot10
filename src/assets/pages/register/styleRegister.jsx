import styled from "styled-components";

export const StyleRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  padding-top: 64px;
  padding-bottom: 16px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 32px;
    width: 100%;
    justify-content: space-between;
  }

  .link {
    text-decoration: none;
    text-align: center;
    padding: 16px 0;
    border-radius: 5px;
    width: 150px;
    color: white;
    background-color: var(--grey-2);
    cursor: pointer;
  }

  .link:hover {
    background-color: var(--grey-3);
  }

  h1 {
    color: var(--color-primary);
  }

  form > span {
    width: 100%;
    text-align: center;
    color: var(--grey-0);
  }

  form > h2 {
    padding: 16px 0;
    width: 100%;
    text-align: center;
    color: var(--grey-0);
  }

  form > div > span {
    width: 100%;
    color: var(--negative);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px;
    gap: 15px;
    width: 100%;
    border-radius: 10px;
    background-color: var(--grey-3);
  }

  form > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
    color: var(--grey-0);
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
