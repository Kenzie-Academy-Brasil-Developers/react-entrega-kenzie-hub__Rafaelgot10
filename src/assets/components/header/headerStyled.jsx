import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  width: 100%;
  border-bottom: 1px solid var(--grey-3);

  h1 {
    font-size: 1rem;
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
`;
