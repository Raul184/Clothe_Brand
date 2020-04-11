import {
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE
} 
from './types'

const initState = {
  collections: null ,
  isLoading: true , 
  errorMessage: undefined
}

const collectionReducer = ( state=initState , action ) => {
  const { type , payload  } = action
  switch (type) {
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state ,
        collections: payload , 
        isLoading: false
      }
    case FETCH_COLLECTIONS_FAILURE:
      return {
        ...state ,
        isLoading: false ,
        errorMessage: payload
      }
    default:
      return state;
  }
}

export default collectionReducer;