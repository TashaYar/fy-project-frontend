import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('${(props) => props.theme.fontSource}');

  body {
    
    font-family: ${(props) => props.theme.fontThird};
  }
`;

export default GlobalStyles;
