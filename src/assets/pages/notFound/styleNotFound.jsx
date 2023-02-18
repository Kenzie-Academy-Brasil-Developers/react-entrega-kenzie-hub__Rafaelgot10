import styled from "styled-components";

export const StyleNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  max-width: 800px;
  h1 {
    width: 100%;
    text-align: center;
    font-size: 4rem;
    color: var(--grey-0);
  }

  p {
    width: 100%;
    text-align: center;
    font-size: 2rem;
    color: var(--grey-0);
    margin: 16px 0;
  }

  .link {
    text-decoration: none;
    text-align: center;
    padding: 16px 0;
    border-radius: 5px;
    width: 100%;
    color: white;
    background-color: var(--color-primary);
    cursor: pointer;
  }

  link:hover {
    background-color: var(--color-primary-focus);
  }
`;
