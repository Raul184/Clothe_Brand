import styled from 'styled-components';

export const CheckoutItemDiv = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageDiv = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextDiv = styled.span`
  width: 23%;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
  }
`;

export const QuantityDiv = styled(TextDiv)`
  display: flex;

  span {
    margin: 0 10px;
  }

  div {
    cursor: pointer;
  }
`;

export const RemoveButtonDiv = styled.div`
  padding-left: 12px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    width: 20%;
  }
`;
