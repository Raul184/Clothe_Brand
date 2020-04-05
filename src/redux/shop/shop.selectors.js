import { createSelector } from 'reselect'

// Mapping Names ==> Ids routing
const ID_Map = {
  'hats': 1 ,
  'sneakers': 2 ,
  'jackets' : 3 ,
  'womens' : 4 ,
  'mens' : 5
};

const selectCollection = state => state.preview

export const selectCollectionItems = createSelector(
  [ selectCollection ] ,
  items => items.collections
)

export const selectACollection = urlParam => createSelector(
  [ selectCollectionItems ] ,
  collections => 
    collections.find( el => el.id === ID_Map[ urlParam ])
)
