import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewDiv,
  TitleDiv,
  PreviewDiv
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewDiv>
    <TitleDiv onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleDiv>
    <PreviewDiv>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewDiv>
  </CollectionPreviewDiv>
);

export default withRouter(CollectionPreview);
