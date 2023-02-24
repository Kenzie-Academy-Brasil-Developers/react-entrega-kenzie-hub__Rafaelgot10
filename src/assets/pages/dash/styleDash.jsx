import styled from "styled-components";

export const StyleDash = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;

  .loading {
    margin-top: 16px;
    background-color: var(--grey-2);
    color: var(--grey-0);
    font-size: 3rem;
    padding: 16px;
    border-radius: 5px;
  }

  .welcome {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 15px;
    width: 100%;
    border-bottom: 1px solid var(--grey-2);
    padding: 32px 0;
  }

  .welcome > p {
    font-size: 1.5rem;
    color: white;
    font-weight: 700;
  }

  .welcome > span {
    font-size: 0.75rem;
    color: var(--grey-1);
    font-weight: 600;
  }

  .techs {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .techs > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;
  }

  .techs > div > h2 {
    color: var(--grey-0);
  }

  .techs > div > svg {
    color: var(--grey-0);
    cursor: pointer;
  }

  .techs__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 16px;
    background-color: var(--grey-3);
    border-radius: 5px;
  }

  .techs__list > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 8px;
    gap: 20px;
  }

  .techs__list > ul > li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    padding: 16px;
    width: 100%;
    cursor: pointer;
    background-color: var(--grey-4);
  }

  .techs__list > ul > li:hover {
    background-color: black;
  }

  .techs__list > ul > li > p {
    color: var(--grey-0);
    font-weight: 700;
  }

  .techs__list > ul > li > span {
    color: var(--grey-2);
  }

  .tech__empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .tech__empty > h1 {
    text-align: center;
    width: 100%;
    color: var(--grey-1);
    padding: 16px;
  }

  .works {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 32px;
  }

  .works > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;
  }

  .works > div > h2 {
    color: var(--grey-0);
  }

  .works > div > svg {
    color: var(--grey-0);
    cursor: pointer;
  }

  .works__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 16px;
    background-color: var(--grey-3);
    border-radius: 5px;
  }

  .works__list > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 8px;
    gap: 20px;
  }

  .works__list > ul > li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    padding: 16px;
    width: 100%;
    cursor: pointer;
    background-color: var(--grey-4);
  }

  .works__list > ul > li:hover {
    background-color: black;
  }

  .works__list > ul > li > p {
    color: var(--grey-0);
    font-weight: 700;
  }

  .works__list > ul > li > span {
    color: var(--grey-2);
  }

  .work__empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .work__empty > h1 {
    text-align: center;
    width: 100%;
    color: var(--grey-1);
    padding: 16px;
  }

  .works__list svg {
    color: var(--grey-4);
    cursor: pointer;
    padding: 1px;
    border-radius: 5px;
    background-color: var(--grey-1);
  }

  @media (min-width: 650px) {
    .welcome {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .techs__list > ul {
      padding: 0 25px;
    }

    .works__list > ul {
      padding: 0 25px;
    }
  }
`;
