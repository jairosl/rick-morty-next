import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 180px;
  align-items: center;
  width: 100%;
  background: #000;
  position: absolute;

  img {
    height: 150px;
    position: relative;
    padding-bottom: 30px;
  }

  input {
    position: relative;
    bottom: -85px;
  }
`;

export const CardContainer = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 18em;
  margin-bottom: 10em;

  svg {
    display: block;
  }

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 275px) {
    div.Cards {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    div.Cards {
      max-width: 700px;
      max-width: 900px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2em;
    }
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    div.Cards {
      max-width: 900px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2em;
    }
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    div.Cards {
      max-width: 1000px;
    }
  }
`;

export const ButtonViewMore = styled.button`
  border: none;
  max-height: 100%;
  min-height: 300px;

  max-width: 100%;
  min-width: 300px;

  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 50px;

  background: ${props => props.theme.colors.pink};
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`;
