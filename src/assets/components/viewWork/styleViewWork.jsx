import styled from "styled-components";

export const StyleViewWork = styled.div`
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

  .container {
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

  .container > .edit {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 16px;
  }

  .container > .edit > svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
    color: var(--grey-1);
  }

  .container > div {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 100%;
    gap: 5px;
  }

  .container > .edit > h1 {
    width: 100%;
    text-align: left;
    color: var(--grey-1);
    font-size: 2rem;
  }

  .container > div > p {
    width: 100%;
    background-color: var(--grey-2);
    color: var(--grey-1);
    padding: 16px;
    border-radius: 5px;
  }

  .container > div > label {
    color: var(--grey-0);
  }

  .container > div > a {
    width: 100%;
    background-color: var(--grey-2);
    padding: 16px;
    border-radius: 5px;
    color: var(--grey-1);
    cursor: pointer;
  }

  .container > div > a:hover {
    background-color: black;
  }
`;
