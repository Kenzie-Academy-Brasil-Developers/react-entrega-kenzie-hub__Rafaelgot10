import styled from "styled-components";

export const StyleEditTech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  background-color: rgb(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  padding: 16px;

  & > div {
    margin-top: 300px;
    width: 100%;
    max-width: 600px;
  }

  .header__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: var(--grey-2);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 16px;
  }

  .header__container > span {
    cursor: pointer;
    color: var(--grey-1);
  }

  .header__container > h2 {
    color: var(--grey-0);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    gap: 20px;
    width: 100%;
    max-width: 600px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: var(--grey-3);
  }

  form > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
  }

  form > div > input {
    width: 100%;
    padding: 16px;
    border-radius: 5px;
    outline: none;
    background-color: var(--grey-2);
    color: var(--grey-0);
  }

  .techtitle {
    width: 100%;
    padding: 16px;
    border-radius: 5px;
    outline: none;
    background-color: var(--grey-2);
    color: var(--grey-1);
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
  }

  .buttons__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 20px;
  }

  .delete {
    text-decoration: none;
    text-align: center;
    padding: 16px 5%;
    border-radius: 5px;
    cursor: pointer;
    background-color: var(--grey-1);
    color: white;
    font-weight: 600;
    width: 30%;
  }

  .delete:hover {
    background-color: var(--grey-2);
  }

  .save {
    text-decoration: none;
    text-align: center;
    padding: 16px 20px;
    border-radius: 5px;
    cursor: pointer;
    background-color: var(--color-primary-negative);
    color: white;
    font-weight: 600;
    width: 70%;
  }

  .save:hover {
    background-color: var(--color-primary);
  }
`;
