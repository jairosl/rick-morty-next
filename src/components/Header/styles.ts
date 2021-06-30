import styled from 'styled-components';

export const Container = styled.div`
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 275px) {
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    header {
      max-width: 700px;
    }
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    header {
      max-width: 900px;
    }
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    header {
      max-width: 1000px;
    }
  }

  width: 100%;
  height: 5em;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.background};

  header {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;

    font-size: 0.8em;

    svg {
      transition: all 0.7s;
    }

    svg:hover {
      cursor: pointer;
      color: ${props => props.theme.colors.orange};
    }
  }
`;
