import styled from 'styled-components';

export const Input = styled.input`
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 275px) {
    width: 18em;
    height: 3em;
    text-align: center;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
  }

  border: none;
  background: ${props => props.theme.colors.background};
  border: 5px solid #000;
  height: 12em;
  padding: 1em 2em;
  border-radius: 20px;
  outline: none;
  font-size: 18px;

  transition: all 0.8s;

  &:focus {
    color: ${props => props.theme.colors.text};
  }
`;

export const Wrapper = styled.div`
  position: absolute;
`;
