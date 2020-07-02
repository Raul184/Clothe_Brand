import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

export const CartDiv = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    right: -8px;
    top: 0px;
  }
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 30px;
  height: 30px;
  bottom: 7px;
  position: relative;
  &:hover {
    width: 40px;
    height: 30px;
  }
`;

export const ItemCountDiv = styled.span`
  position: absolute;
  font-size: 17px;
  bottom: 17px;
`;
