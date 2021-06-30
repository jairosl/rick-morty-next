import { createGlobalStyle } from 'styled-components';

const Styles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #fff;
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }
`;

export default Styles;
