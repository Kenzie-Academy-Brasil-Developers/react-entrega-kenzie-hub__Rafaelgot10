import styled from "styled-components";

export const StyleViewUser = styled.div`
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

  .tags__container {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 100%;
    padding-top: 32px;
    gap: 32px;
  }

  .tags__container > div {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 5px;
    background-color: var(--grey-2);
    width: 100%;
    padding: 16px;
    border-radius: 5px;
  }
`;
