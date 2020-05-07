import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderDiv = styled.div`
  position: relative;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    width: auto;
    height: 50px;
    padding: 1px;
    margin-bottom: 10px; 
  }
`;

export const LogoDiv = styled(Link)`
  width: 70px;
  padding: 25px;
  position: absolute;
  top: 1vh;
  @media screen and (max-width: 800px) {
    svg{
      width: 50px;
    }
    padding: 5px;
    width: 30px;
    padding: 0; 
  }
`;

export const OptionsDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 85%;
    margin-left: 2rem;  
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    padding: 5px; 
    font-size: 15px;
  }
`;
