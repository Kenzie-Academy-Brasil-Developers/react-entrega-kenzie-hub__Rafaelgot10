import styled from "styled-components";

export const StyleHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 16px 0;
  width: 100%;
  border-bottom: 1px solid var(--grey-3);

  h1 {
    font-size: 2rem;
    color: var(--color-primary);
  }

  button {
    font-size: 1rem;
    padding: 8px 20px;
    border-radius: 5px;
    color: white;
    background-color: var(--grey-2);
    cursor: pointer;
  }

  button:hover {
    background-color: var(--grey-3);
  }

  .user__avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--grey-2);
    border-radius: 10px;
    height: 70px;
    width: 60px;
  }

  .user__avatar > svg {
    height: 50px;
    width: 50px;
  }

  .user__avatar > img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
  }

  & > div > h3 {
    width: 100%;
    text-align: center;
  }

  .user__avatar > div > h3 {
    color: var(--grey-1);

    cursor: pointer;
  }

  .nav__dash {
    background-color: var(--grey-3);
    padding: 16px;
    border-radius: 10px;
    min-width: 130px;
    color: var(--grey-1);
    cursor: pointer;
  }
  .nav__dash:hover {
    background-color: var(--grey-2);
  }

  .nav__view {
    background-color: var(--grey-3);
    padding: 16px;
    min-width: 130px;
    border-radius: 10px;
    color: var(--grey-1);
    cursor: pointer;
  }
  .nav__view:hover {
    background-color: var(--grey-2);
  }

  .nav__edit {
    background-color: var(--grey-3);
    padding: 16px;
    border-radius: 10px;
    min-width: 130px;
    color: var(--grey-1);
    cursor: pointer;
  }
  .nav__edit:hover {
    background-color: var(--grey-2);
  }

  @media (min-width: 620px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
    width: 100%;
    border-bottom: 1px solid var(--grey-3);
  }
`;
