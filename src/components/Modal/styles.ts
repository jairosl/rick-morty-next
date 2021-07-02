import styled from 'styled-components';

export const Container = styled.div`
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 275px) {
    max-width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    div.ContainerHeader {
      display: flex;
      align-items: center;
      flex-direction: column-reverse;
    }

    div.ContainerHeader h1 {
      margin-top: 20px;
      margin-bottom: 20px;
      width: 250px;
      text-align: center;
    }

    div.ContainerHeader h2 {
      width: 100%;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    div.ContainerHeader div.ContainerButtons {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-between;

      max-width: 100px;
      width: 100%;
    }

    div.Container img {
      border-radius: 8px;
    }
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    max-width: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    div.ContainerHeader {
      display: flex;
      align-items: center;
      flex-direction: row;
    }

    div.ContainerHeader h1 {
      margin-top: 20px;
      margin-bottom: 20px;
      margin-right: 2em;
      width: 150px;
      text-align: left;
    }

    h2 {
      width: 100%;
      margin-top: 10px;
      margin-bottom: 20px;
      width: 100%;
      text-align: center;
    }

    div.ContainerHeader div.ContainerButtons {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-between;
    }

    div.ContainerHeader div.ContainerButtons button {
      padding-left: 10px;
    }

    div.Container img {
      border-radius: 8px;
    }
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
  }

  div.ContainerHeader {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  div.ContainerHeader button {
    cursor: pointer;
    background: none;
    border: none;
  }

  div.ContainerHeader button svg {
    color: ${props => props.theme.colors.text};
  }

  div.ContainerHeader div.ContainerButtons {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;

    max-width: 300px;
    width: 100%;
  }
`;
