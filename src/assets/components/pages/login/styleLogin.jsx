import styled from "styled-components";

export const StyleLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 64px;
  padding-bottom: 16px;

  h1 {
    width: 100%;
    text-align: center;
    margin-bottom: 16px;
    color: var(--color-primary);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px;
    gap: 20px;
    width: 100%;
    border-radius: 10px;
    background-color: var(--grey-3);
  }

  form > h2 {
    padding: 16px 0;
    width: 100%;
    text-align: center;
    color: white;
  }

  form > input {
    width: 100%;
    padding: 16px;
    border-radius: 5px;
    outline: none;
    background-color: var(--grey-2);
    color: white;
    border: solid 2px var(--grey-2);
  }

  form > input::placeholder {
    color: white;
  }

  form > input:hover {
    border: solid 2px var(--grey-1);
  }

  form > label {
    color: white;
  }

  form > span {
    width: 100%;
    text-align: center;
    margin: 16px 0;
    font-size: 12px;
    color: var(--grey-2);
    font-weight: 800;
  }

  form > button {
    padding: 16px 0;
    border-radius: 5px;
    width: 100%;
    color: white;
    background-color: var(--color-primary);
  }

  form > .register {
    background-color: var(--grey-1);
  }

  .link {
    text-decoration: none;
    text-align: center;
    padding: 16px 0;
    border-radius: 5px;
    width: 100%;
    color: white;
    background-color: var(--grey-1);
    cursor: pointer;
  }
`;
