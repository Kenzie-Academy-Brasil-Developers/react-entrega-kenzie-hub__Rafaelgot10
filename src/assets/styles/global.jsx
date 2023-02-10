import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
  --color-primary: #FF577F;
  --color-primary-focus: #FF427F;
  --color-primary-negative: #59323F;

  --grey-0: #F8F9FA;
  --grey-1:#868E96;
  --grey-2: #343B41;
  --grey-3: #212529;
  --grey-4: #121214;

  --sucess: #3FE864;
  --negative: #E83F5B;

  --title: 16px;
  --title: bold;
  --headline: 12px;
  /* --headline: regular */
  --headlineBold: 12px;
  --headlineItalic: 12px;
  --headlineBold: bold;
  --headlineItalic: italic;

  }
#root{
  display: flex;
  flex-direction: column;  
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background-color: var(--grey-4)
 }

  html {
    min-height: 100vh;
    width: 100%;
  }
  body {
    min-height: 100vh;
    width: 100%;
 
    font-family: "inter", sans-serif;
  }

button{
  cursor: pointer;
}

  .main__container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    padding: 0 16px;
    
    background-color: var(--grey-4)
  

  }


`;
export default GlobalStyle;
