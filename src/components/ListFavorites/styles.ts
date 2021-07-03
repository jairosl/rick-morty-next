import styled from 'styled-components';

export const Container = styled.div`
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 275px) {
    padding: 0;
    max-height: 700px;
    overflow-y: auto;

    div.itemList {
      min-width: 70px;
      padding-right: 20px;
    }
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    padding: 3em;
    div.itemList {
      padding-right: 0;
    }
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
  }

  padding: 3em;

  header {
    width: 100%;
    margin-bottom: 3em;
    font-weight: bold;

    div.Close {
      width: 100%;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;
      text-align: right;
      margin-bottom: 20px;

      button {
        cursor: pointer;
        border: none;
        background: none;
      }
    }

    h1 {
      text-align: center;
    }
  }

  div.itemList {
    width: 100%;
    min-width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2em;

    img {
      height: 7em;
      width: 7em;
      border-radius: 8px;
    }

    p {
      font-size: 18px;
    }

    svg {
      cursor: pointer;
    }
  }
`;
