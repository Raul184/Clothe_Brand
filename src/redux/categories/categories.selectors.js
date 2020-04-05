import { createSelector } from 'reselect';


const selectCategories = state => state.catg

export const selectCategoriesSections = createSelector(
  [ selectCategories ] ,
  sections => sections.categories 
)