import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemDiv = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px){
    width: 40vw;
    height: 30vh;
    position: relative;
    &:hover {
      .image {
        opacity: unset;
      } 
  
      button {
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  @media screen and (max-width: 800px){
    display: block;
    position: absolute;
    height: auto;
    top: 20vh;
    opacity: 0.6;
    min-width: 55px;
    width: 40px;
    padding: 10px;
    border: none;
    line-height: 0px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterDiv = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  @media screen and (max-width: 800px){
    font-size: 15px;
  }
`;

export const NameDiv = styled.span`
  width: 90%;
`;

export const PriceDiv = styled.span`
  width: 10%;
  text-align: right;

  @media screen and (max-width: 800px){
    width: 20%;
  }
`;
