import { createSelector } from 'reselect'

const selectCollection = state => state.preview

export const selectCollectionItems = createSelector(
  [ selectCollection ] ,
  items => items.collections
)