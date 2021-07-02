import styled from 'styled-components';

export const Container = styled.div`
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 275px) {
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    max-width: 700px;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    max-width: 900px;
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    max-width: 1000px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: ${props => props.theme.colors.text};
    font-weight: 700;
    font-size: 2em;
    text-align: center;
  }
`;
