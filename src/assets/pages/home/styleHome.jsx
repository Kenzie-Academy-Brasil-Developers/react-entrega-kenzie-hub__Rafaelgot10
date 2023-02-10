import styled from "styled-components";

export const StyleHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
  max-width: 600px;

  h1 {
    font-size: 32px;
    color: var(--color-primary);
    padding: 16px 0;
  }

  p {
    color: white;
    line-height: 64px;
    text-align: center;
    font-size: 32px;
    font-style: italic;
    padding: 16px 0;
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
`;
