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
