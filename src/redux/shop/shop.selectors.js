import { createSelector } from 'reselect'


const selectCollection = state => state.preview

// Set all Categories > Items available 
export const selectCollectionItems = createSelector(
  [ selectCollection ] ,
  items => items.collections
)

// Convert obt to array
export const selectConvertedCollectionItems = createSelector(
  [ selectCollectionItems ] ,
  items => Object.keys(items).map( key => items[key])
)


// Set 1 Category > items depending on urlParam
export const selectACollection = urlParam => createSelector(
  [ selectCollectionItems ] ,
  collections => collections[ urlParam ]
)
