import styled from 'styled-components';

export const CheckoutPageDiv = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  
  @media screen and (max-width: 800px) {
    width: 90%;
  }
  button {
    margin-left: auto;
    margin-top: 50px;
  }
`;

export const CheckoutHeaderDiv = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  @media screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    font-size: 14px;
  }
`;

export const HeaderBlockDiv = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;

    @media screen and (max-width: 800px) {
      width: 20%;
      font-size: 14px;
    }
  }
`;

export const TotalDiv = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

export const WarningDiv = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
