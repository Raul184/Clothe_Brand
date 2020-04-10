import { 
  UPDATE_COLLECTION ,
  DATA_FETCH
} 
from './types'

const initState = {
  collections: null ,
  isLoading: true
}

const collectionReducer = ( state=initState , action ) => {
  const { type , payload  } = action
  switch (type) {
    case UPDATE_COLLECTION:
      return {
        ...state ,
        collections: payload
      }
    case DATA_FETCH:
      return {
        ...state ,
        isLoading: !state.isLoading
      }
    default:
      return state;
  }
}

export default collectionReducer;