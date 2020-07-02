import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderDiv = styled.div`
  position: relative;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 25px 0 25px 0;

  @media screen and (max-width: 800px) {
    width: auto;
    height: 50px;
    padding: 1px;
    margin-bottom: 10px; 
  }
`;

export const LogoDiv = styled(Link)`
  width: 60px;
  display: flex;
  align-items: center;
  margin-left: 2rem;  
  @media screen and (max-width: 800px) {
    svg{
      width: 50px;
    }
    margin-left: 0; 
    padding: 5px;
    width: 30px;
    padding: 0; 
  }
  @media screen and (max-width: 400px) {
    width: 40px;
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const OptionsDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 2rem;
  @media screen and (max-width: 800px) {
    width: 85%;
    margin-left: 0rem;  
  }
  @media screen and (max-width: 400px) {
    height:70px;
    width: 100%;
    margin-right: 0;
    justify-content: space-around;
    align-items:center;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  &:hover {
    border-bottom: 1px solid black;
    font-size: 18px;
  }
  @media screen and (max-width: 800px) {
    padding: 5px; 
    font-size: 15px;
  }
`;
