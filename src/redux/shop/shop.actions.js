// Firestore
import { db , arrSnapshopObjConverter } from '../../firebase/firebase.utils'
import { 
  FETCH_COLLECTIONS_FAILURE , 
  FETCH_COLLECTIONS_SUCCESS 
} from './types'

// FETCHED DATA  
const fetchCollectionsSuccess = collectionMapped => ({
  type: FETCH_COLLECTIONS_SUCCESS , 
  payload: collectionMapped
})

// ERROR on Fetch
const fetchCollectionsFailure = error => ({
  type: FETCH_COLLECTIONS_FAILURE , 
  payload: error
})

// ASYNC INIT FETCH for DATA
export const fetchCollections = () => {
  return dispatch => {
    // Search Ref -> 
    const collectionRef = db.collection('collections');
    // Get -> Collection Data needed
    collectionRef
    .get()
    .then( data => {
      const collectionMapped = arrSnapshopObjConverter( data )
      dispatch( fetchCollectionsSuccess( collectionMapped ))
      }
    )
    .catch( error => dispatch( fetchCollectionsFailure( error.message )))
  }
}



