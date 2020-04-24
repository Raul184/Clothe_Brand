import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemDiv,
  BackgroundImageDiv,
  ContentDiv,
  ContentTitle,
  ContentSubtitle
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemDiv
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageDiv
      className='background-image'
      imageUrl={imageUrl}
    />
    <ContentDiv className='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentDiv>
  </MenuItemDiv>
);

export default withRouter(MenuItem);
